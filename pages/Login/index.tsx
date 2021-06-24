import React, { useState, useCallback } from 'react';
import axios from 'axios';
import { Success, Form, Error, Label, Input, LinkContainer, Button, Header } from './styles';
import useInput from '@hooks/useInput';
import { Link, Redirect } from 'react-router-dom';
import useSWR from 'swr';
import fetcher from '@utils/fetcher';

const Login = () => {
  // graphql을 사용하면 useSWR사용하지말고 apollo 사용하면 된다.
  // SWR vs react Query 비슷한 개념
  const { data, error, revalidate, mutate } = useSWR('http://localhost:3095/api/users', fetcher, {
    dedupingInterval: 100000, // 주기적으로 호출은 되지만 deduplingInterval 기간 내에는 캐시에서 불러옴.
    // 즉, component가 100개든 1000개든 이 기간동안에는 서버에서 호출하지 않고 cache에서 가져옴
  }); // useSWR -> 주소를 fetcher로 넘겨주는 역활
  const [email, onChangeEmail] = useInput('');
  const [password, setPassword] = useState('');
  const [LoginError, setLoginError] = useState('');
  const [LoginSuccess, setLoginSuccess] = useState(false);

  const onSubmitLoginForm = useCallback(
    (e) => {
      e.preventDefault();

      setLoginError('');
      setLoginSuccess(false);
      axios
        .post(
          'http://localhost:3095/api/users/login',
          {
            email,
            password,
          },
          {
            withCredentials: true, // post 3번째 자리
          },
        )
        .then((response) => {
          // revalidate(); // revalidate -> 서버 재호출
          mutate(response.data); // mutate -> 서버에 요청하지않고 데이터 수정
          //2번째 인자 shouldRevelidate check
          // OPTIMISTIC UI : 낙관적 UI
          // 내가 보낸 요청이 성공할거라는 낙관적인 UI 개념으로서
          // 예를들어, 인스타그램 좋아요 누를 때 0.1초만에 바로바로 변경되는데
          // 일단 변경하고 shouldRevelidate로 나중에 데이터베이스랑 비교하는 것들 처럼
          // 이러한 경우에 사용할 때 좋다
          // <--> 반대 개념 : Pessimistic UI
          // 일반적으로 사용되는 UI로
          // 일단 DB에서 비교한 후 UI로 표시하는 개념

          // 기본적으로는 Pessimistic 이고 서버 검사를 아예 하고싶지 않으면 false, Optimistic UI 하고싶으면 True
          setLoginSuccess(true);
        })
        .catch((error) => {
          setLoginError(error.response.data);
        })
        .finally(() => {});
    },
    [email, password],
  );

  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  // hooks 는 무조건 상위부분으로 올려야 한다
  if (data === undefined) {
    return <div>로딩 중...</div>;
  }

  if (data) {
    console.log(data);
    return <Redirect to="/workspace/channel" />;
  }
  return (
    <div id="container">
      <Header>SSlack</Header>
      <Form onSubmit={onSubmitLoginForm}>
        <Label id="email-label">
          <span>이메일 주소</span>
          <div>
            <Input type="email" id="email" name="email" value={email} onChange={onChangeEmail} />
          </div>
        </Label>

        <Label id="password-label">
          <span>비밀번호</span>
          <div>
            <Input type="password" id="password" name="password" value={password} onChange={onChangePassword} />
          </div>

          {LoginError && <Error>{LoginError}</Error>}
          {LoginSuccess && <Success>로그인 되었습니다 !</Success>}
        </Label>
        <Button type="submit">로그인</Button>
      </Form>
      <LinkContainer>
        회원이 아니신가요?&nbsp;
        <Link to="/signup">회원가입 하러 가기</Link>
      </LinkContainer>
    </div>
  );
};

export default Login;
