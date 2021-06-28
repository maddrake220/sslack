import React, { useEffect, useCallback, useRef } from 'react';
import { Container, Header, DragOver } from './styles';
import gravatar from 'gravatar';
import useSWR, { useSWRInfinite } from 'swr';
import fetcher from '@utils/fetcher';
import { useParams } from 'react-router';
import ChatBox from '@components/ChatBox';
import ChatList from '@components/ChatList';
import useInput from '@hooks/useInput';
import axios from 'axios';
import { IDM } from '@typings/db';
import makeSection from '@utils/makeSection';
import Scrollbars from 'react-custom-scrollbars';
function DirectMessage() {
  const { workspace, id } = useParams<{ workspace: string; id: string }>();
  const { data: userData } = useSWR(`/api/workspaces/${workspace}/users/${id}`, fetcher);
  const { data: myData } = useSWR('/api/users', fetcher);
  const [chat, onChangeChat, setChat] = useInput('');
  const scrollbarRef = useRef<Scrollbars>(null);

  const {
    data: chatData,
    mutate: mutateChat,
    revalidate: revalidateChat,
    setSize, // page 수를 바꿔주는
  } = useSWRInfinite<IDM[]>(
    (index) => `/api/workspaces/${workspace}/dms/${id}/chats?perPage=20&page=${index + 1}`,
    fetcher,
  );
  // useSWRInfinite : SWR에서 제공하는 infinite 구현하기 편한 메서드
  // [{id: 1}, {id: 2}, {id: 3}, {id: 4}]
  // useSWRInfinite -> [[{id: 1}, {id: 2}], [{id: 3}, {id: 4}]]
  const isEmpty = chatData?.[0]?.length === 0;
  const isReachingEnd = isEmpty || (chatData && chatData[chatData.length - 1]?.length < 20) || false;

  // console.log('chatData', chatData);
  const onSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      if (chat?.trim() && chatData) {
        const savedChat = chat;
        mutateChat((prevChatData) => {
          prevChatData?.[0].unshift({
            id: (chatData[0][0]?.id || 0) + 1,
            content: savedChat,
            SenderId: myData.id,
            Sender: myData,
            ReceiverId: userData.id,
            Receiver: userData,
            createdAt: new Date(),
          });
          return prevChatData;
        }, false) // optimistic UI 할때는 shouldRevalidate 가 false 여야 한다.
          .then(() => {
            setChat('');
            scrollbarRef.current?.scrollToBottom(); // 채팅시 스크롤바 아래로
          });
        // optimistic UI
        axios
          .post(`/api/workspaces/${workspace}/dms/${id}/chats`, {
            content: chat,
          })
          .then(() => {
            setChat('');
          })
          .catch(() => {
            revalidateChat();
          });
      }
    },
    [chat, chatData, myData, userData, workspace, id],
  );
  // 로딩 시 스크롤바 제일 아래로

  useEffect(() => {
    if (chatData?.length === 1) {
      scrollbarRef.current?.scrollToBottom();
    }
  }, [chatData]);

  if (!userData || !myData) {
    return null;
  }

  const chatSections = makeSection(chatData ? chatData.flat().reverse() : []);
  // immutable 하게 reverse 하는 방법
  // .flat() 다차원 배열을 1차원 배열로
  return (
    <Container>
      <Header>
        <img
          src={gravatar.url(userData.email, {
            s: '24px',
            d: 'retro',
          })}
          alt={userData.nickname}
        ></img>
      </Header>
      <ChatList chatSections={chatSections} ref={scrollbarRef} setSize={setSize} isReachingEnd={isReachingEnd} />

      <ChatBox chat={chat} onChangeChat={onChangeChat} onSubmitForm={onSubmitForm} />
    </Container>
  );
}

export default DirectMessage;
