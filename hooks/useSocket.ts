import io from 'socket.io-client';
import { useCallback } from 'react';

const baseUrl = 'http://localhost:3095';
const sockets: { [key: string]: SocketIOClient.Socket } = {};

/*
  socketIO 는 백엔드와 프론트가 버전이 같아야 한다.
  
  Network Logs
  connected : 연결
  disconnected : 비연결
  receiveBuffer :  receiveBuffer 서버에서 클라이언트로 데이터가 와야 하는데 그렇지 못한 버퍼들이 남아있다. receiveBuffer 는 거의 항상 비어있어야 한다.
  sendBuffer :  데이터를 서버에 보내야 하는데 그렇지 못한 상황의 데이터가 버퍼로 남아있다.
  _callback : data

  Message에서 2(클라->서버), 3(서버->클라) 뜨는 이유 :pingpong이라 부름, 계속해서 연결을 확인 시켜주기위해

*/
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
    // hook rerendering 방지
  }

  if (!sockets[workspace]) {
    sockets[workspace] = io.connect(`${baseUrl}/ws-${workspace}`, {
      transports: ['websocket'],
      // websocket은 먼저 브라우저에 websocket을 지원하는지 http로 확인한 후 websocket으로 전환
      // 하지만 최근 버전의 ie 와 대부분의 브라우저는 websocket을 지원
      // 따라서 transports:['websocket']을 통해 폴링하지말고 websocket만 쓰라고 지시
      // => http 연결 안하고 websocket연결을 바로함
      //
    });
  }

  return [sockets[workspace], disconnect];
};
// socket사용할 때 주의 할점
// 경로 지정을 잘 해줘야한다.
// connect와 disconnect 잘 해줘야 한다.
// front단에서는 connect, emit, on, disconnect

export default useSocket;
