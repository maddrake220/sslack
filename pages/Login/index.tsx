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
  const { data, error, revalidate } = useSWR('http://localhost:3095/api/users', fetcher, {
    dedupingInterval: 100000, // 주기적으로 호출은 되지만 deduplingInterval 기간 내에는 캐시에서 불러옴.
  }); // useSWR -> 주소를 fetcher로 넘겨주는 역활
  // revalidate -> swr 호출 컨트롤
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
          revalidate();
          console.log(response);
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
