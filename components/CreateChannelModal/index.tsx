import React, { useCallback, VFC, SetStateAction } from 'react';
import Modal from '@components/Modal';
import { Button, Input, Label } from '@pages/Signup/styles';
import useInput from '@hooks/useInput';

interface Props {
  show: boolean;
  onCloseModal: () => void;
  setShowCreateChannelModal: (flag: boolean) => void;
}

const CreateChannelModal: VFC<Props> = ({ show, onCloseModal, setShowCreateChannelModal }) => {
  console.log(show);
  const [newChannel, onChangeNewChannel] = useInput('');
  const onCreateChannel = useCallback(() => {
    {
    }
  }, []);
  return (
    <Modal show={show} onCloseModal={onCloseModal}>
      <form onSubmit={onCreateChannel}>
        <Label id="channel-label">
          <span>채널 이름</span>
          <Input id="channel" value={newChannel} onChange={onChangeNewChannel} />
        </Label>
        <Button type="submit">생성하기</Button>
      </form>
    </Modal>
  );
};

export default CreateChannelModal;
