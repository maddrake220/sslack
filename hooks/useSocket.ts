import io from 'socket.io-client';
import { useCallback } from 'react';

const baseUrl = 'http://localhost:3095';
const sockets: { [key: string]: SocketIOClient.Socket } = {};

const useSocket = (workspace?: string): [SocketIOClient.Socket | undefined, () => void] => {
  const disconnect = useCallback(() => {
    if (workspace) {
      sockets[workspace].disconnect;
      delete sockets[workspace];
    }
  }, []);
  console.log(workspace);

  if (!workspace) {
    return [undefined, disconnect];
  }
  if (!sockets[workspace]) {
    sockets[workspace] = io.connect(`${baseUrl}/ws-${workspace}`, {
      transports: ['websocket'], // websocket만
    });
  }

  return [sockets[workspace], disconnect];
};
// socket사용할 때 주의 할점
// 경로 지정을 잘 해줘야한다.
// connect와 disconnect 잘 해줘야 한다.
// front단에서는 connect, emit, on, disconnect

export default useSocket;
