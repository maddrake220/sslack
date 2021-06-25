import React, { useCallback, VFC } from 'react';
import Modal from '@components/Modal';
import { Button, Input, Label } from '@pages/Signup/styles';
import useInput from '@hooks/useInput';
import axios from 'axios';
import useSWR from 'swr';
import { IChannel, IUser } from '@typings/db';
import fetcher from '@utils/fetcher';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';

interface Props {
  show?: boolean;
  onCloseModal: () => void;
  setShowInviteWorkspaceModal: (flag: boolean) => void;
}

const InviteWorkspaceModal: VFC<Props> = ({ show, onCloseModal, setShowInviteWorkspaceModal }) => {
  const [newInviteMember, onChangeNewInviteMember, setNewInviteMember] = useInput('');
  const { data: userData } = useSWR<IUser | false>('/api/users', fetcher, {
    dedupingInterval: 2000,
  });
  const { workspace, channel } = useParams<{ workspace: string; channel: string }>();
  const { revalidate: revalidateMembers } = useSWR<IChannel[]>(
    userData ? `/api/workspaces/${workspace}/members` : null,
    fetcher,
  );
  const onInviteSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!newInviteMember || !newInviteMember.trim()) return;

      axios
        .post(`/api/workspaces/${workspace}/members`, {
          email: newInviteMember,
        })
        .then(() => {
          revalidateMembers();
          setNewInviteMember('');
          setShowInviteWorkspaceModal(false);
        })
        .catch((error) => {
          console.dir(error);
          toast.error(error.response.data, {
            position: 'bottom-center',
          });
        });
    },
    [newInviteMember],
  );
  return (
    <Modal show={show} onCloseModal={onCloseModal}>
      <form onSubmit={onInviteSubmit}>
        <Label>
          <span>이메일</span>
          <Input id="member" type="email" value={newInviteMember} onChange={onChangeNewInviteMember} />
        </Label>
        <Button type="submit">사용자 초대</Button>
      </form>
    </Modal>
  );
};

export default InviteWorkspaceModal;
