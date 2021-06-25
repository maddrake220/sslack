import React, { useCallback } from 'react';
import { Container, Header, DragOver } from './styles';
import gravatar from 'gravatar';
import useSWR from 'swr';
import fetcher from '@utils/fetcher';
import { useParams } from 'react-router';
import ChatBox from '@components/ChatBox';
import ChatList from '@components/ChatList';
import useInput from '@hooks/useInput';
import axios from 'axios';
import { IDM } from '@typings/db';
function DirectMessage() {
  const { workspace, id } = useParams<{ workspace: string; id: string }>();
  const { data: userData } = useSWR(`/api/workspaces/${workspace}/users/${id}`, fetcher);
  const { data: myData } = useSWR('/api/users', fetcher);
  const [chat, onChangeChat, setChat] = useInput('');
  const {
    data: chatData,
    mutate: mutateChat,
    revalidate: revalidateChat,
  } = useSWR<IDM[]>(`/api/workspaces/${workspace}/dms/${id}/chats?perPage=20&page=1`, fetcher);
  const onSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      if (chat?.trim() && chatData) {
        console.log('WHY');
        axios
          .post(`/api/workspaces/${workspace}/dms/${id}/chats`, {
            content: chat,
          })
          .then(() => {
            revalidateChat();
            setChat('');
          })
          .catch(console.error);
      }
    },
    [chat],
  );

  if (!userData || !myData) {
    return null;
  }
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
      <ChatList />

      <ChatBox chat={chat} onChangeChat={onChangeChat} onSubmitForm={onSubmitForm} />
    </Container>
  );
}

export default DirectMessage;
