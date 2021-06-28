import { IChat, IDM } from '@typings/db';
import React, { VFC, memo, useMemo } from 'react';
import { ChatWrapper } from './styles';
import gravatar from 'gravatar';
import dayjs from 'dayjs';
import { Link, useParams } from 'react-router-dom';
import regexifyString from 'regexify-string';
import { stringify } from 'querystring';

interface Props {
  data: IDM | IChat;
}

function a(b: number | string | number[]) {
  if (typeof b === 'number') {
    b.toFixed();
  }
  if (typeof b === 'string') {
    b.slice();
  }
  if (Array.isArray(b)) {
    b.forEach(() => {});
  }
}
// Typescript TypeGuard 예시..

const Chat: VFC<Props> = ({ data }) => {
  const user = 'Sender' in data ? data.Sender : data.User;
  // TypeGuard -> 'Sender'가 data에 있으면 DM or Channel

  // const { workspace } = useParams<{ workspace: string }>();
  const result = useMemo(
    () =>
      regexifyString({
        input: data.content,
        pattern: /@\[(.+?)\]\((\d+?)\)|[\n]/g,
        //   -> g (모두 찾는것)  -> (하나만),
        // . -> 모든 글자 한개 이상
        // \d -> 숫자
        // + -> 하나 이상
        // ? -> 0개나 1개
        // * -> 0개 이상
        // | -> 또는
        // \n -> 줄바꿈

        // EX ))
        // @[userName](4)
        // + 만 있으면 [userName] 최대한 많이
        // +? 는 최대한 조금
        decorator(match, index) {
          const arr = match.match(/@\[(.+?)\]\((\d+?)\)/)!;
          console.log(arr);
          if (arr) {
            return (
              <Link key={match + index} to={`${arr[2]}`}>
                @{arr[1]}
              </Link>
            );
          }
          return <br key={index} />;
        },
      }),
    [data.content],
  );
  return (
    <ChatWrapper>
      <div className="chat-img">
        <img src={gravatar.url(user.email, { s: '36px', d: 'retro' })} alt={user.nickname} />
      </div>
      <div className="chat-text">
        <div className="chat-user">
          <b>{user.nickname}</b>
          <span>{dayjs(data.createdAt).format('h:mm A')}</span>
        </div>
        <p>{result}</p>
      </div>
    </ChatWrapper>
  );
};

export default memo(Chat);

/*
 memo => 보통 말단컴포넌트를 캐싱하여
 리렌더링 비효율을 최소화 한다.

 useMemo => 정규표현식같이 계산해야하는 부분에서 캐싱하면 좋다.
 useMemo(()=> ,[//해당 데이터])
*/
