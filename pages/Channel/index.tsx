import React, { useCallback } from 'react';
import { Container, Header } from './styles';
import ChatBox from '@components/ChatBox';
import ChatList from '@components/ChatList';
import { useParams } from 'react-router';
import useSWR from 'swr';
import fetcher from '@utils/fetcher';
import useInput from '@hooks/useInput';

const Channel = () => {
  const { workspace, id } = useParams<{ workspace: string; id: string }>();

  const { data: userData } = useSWR(`/api/workspaces/${workspace}/users/${id}`, fetcher);
  const { data: myData } = useSWR('/api/users', fetcher);
  const [chat, onChangeChat] = useInput('');
  const onSubmitForm = useCallback((e) => {
    e.preventDefault();
  }, []);

  if (!userData || !myData) {
    return null;
  }
  return (
    <Container>
      <Header>채널) 로그인하신 것을 축하드립니다.!</Header>

      <ChatList />
      <ChatBox chat={chat} onSubmitForm={onSubmitForm} onChangeChat={onChangeChat} />
    </Container>
  );
};

export default Channel;
