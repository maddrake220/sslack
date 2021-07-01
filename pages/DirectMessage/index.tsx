import React, { useState, useEffect, useCallback, useRef } from 'react';
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
import useSocket from '@hooks/useSocket';
function DirectMessage() {
  const { workspace, id } = useParams<{ workspace: string; id: string }>();
  const { data: userData } = useSWR(`/api/workspaces/${workspace}/users/${id}`, fetcher);
  const { data: myData } = useSWR('/api/users', fetcher);
  const [chat, onChangeChat, setChat] = useInput('');
  const [socket] = useSocket(workspace);
  const [dragOver, setDragOver] = useState(false);
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
            localStorage.setItem(`${workspace}-${id}`, new Date().getTime().toString());

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
          .catch((error) => {
            console.dir(error);
            revalidateChat();
          });
      }
    },
    [chat, chatData, myData, userData, workspace, id],
  );
  // 로딩 시 스크롤바 제일 아래로
  const onMessage = useCallback((data: IDM) => {
    if (data.SenderId === Number(id) && myData.id !== Number(id)) {
      mutateChat((chatData) => {
        chatData?.[0].unshift(data);
        return chatData;
      }, false).then(() => {
        if (scrollbarRef.current) {
          if (
            scrollbarRef.current.getScrollHeight() <
            scrollbarRef.current.getClientHeight() + scrollbarRef.current.getScrollHeight() + 150
            // 150px 이상 스크롤을 올렸을 때는 남이 채팅을 쳐도 bottom으로 가지 않는다.
          ) {
            console.log('scrollToBottom!', scrollbarRef.current?.getValues());
            setTimeout(() => {
              scrollbarRef.current?.scrollToBottom();
            }, 50);
          }
        }
      });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(`${workspace}-${id}`, new Date().getTime().toString());
  }, [workspace, id]);
  useEffect(() => {
    socket?.on('dm', onMessage);

    return () => {
      socket?.on('dm', onMessage);
    };
  }, [socket, id, myData]);
  useEffect(() => {
    if (chatData?.length === 1) {
      scrollbarRef.current?.scrollToBottom();
    }
  }, [chatData]);

  const onDrop = useCallback(
    (e) => {
      e.preventDefault();
      console.log(e);
      const formData = new FormData();
      if (e.dataTransfer.items) {
        // Use DataTransferItemList interface to access the file(s)
        for (let i = 0; i < e.dataTransfer.items.length; i++) {
          // If dropped items aren't files, reject them
          if (e.dataTransfer.items[i].kind === 'file') {
            const file = e.dataTransfer.items[i].getAsFile();
            console.log(e, '.... file[' + i + '].name = ' + file.name);
            formData.append('image', file); // server에 Image를 보낼때
          }
        }
      } else {
        // Use DataTransfer interface to access the file(s)
        for (let i = 0; i < e.dataTransfer.files.length; i++) {
          console.log(e, '... file[' + i + '].name = ' + e.dataTransfer.files[i].name);
          formData.append('image', e.dataTransfer.files[i]);
        }
      }

      axios.post(`/api/workspaces/${workspace}/dms/${id}/images`, formData).then(() => {
        localStorage.setItem(`${workspace}-${id}`, new Date().getTime().toString());

        setDragOver(false);
      });
    },
    [workspace, id],
  );

  const onDragOver = useCallback((e) => {
    e.preventDefault();
    console.log(e);
    setDragOver(true);
  }, []);

  if (!userData || !myData) {
    return null;
  }

  const chatSections = makeSection(chatData ? chatData.flat().reverse() : []);
  console.log('chatDataLists == > ', chatData?.flat().reverse());
  // immutable 하게 reverse 하는 방법
  // .flat() 다차원 배열을 1차원 배열로
  return (
    <Container onDrop={onDrop} onDragOver={onDragOver}>
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

      {dragOver && <DragOver>업로드!</DragOver>}
    </Container>
  );
}

export default DirectMessage;
