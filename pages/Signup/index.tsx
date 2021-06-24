import React, { useState, useCallback } from 'react';
import axios from 'axios';
import { Success, Form, Error, Label, Input, LinkContainer, Button, Header } from './styles';
import useInput from '@hooks/useInput';
import { Link, Redirect } from 'react-router-dom';
import useSWR from 'swr';
import fetcher from '@utils/fetcher';

const SignUp = () => {
  const { data, error } = useSWR('http://localhost:3095/api/users', fetcher);

  const [email, onChangeEmail] = useInput('');
  const [nickname, onChangeNickname] = useInput('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const [mismatchError, setMismatchError] = useState(false);
  const [signUpError, setSignUpError] = useState('');
  const [signUpSuccess, setSignUpSuccess] = useState(false);

  const onSubmitSignupForm = useCallback(
    (e) => {
      e.preventDefault();
      if (!mismatchError) {
        setSignUpError(''); // 비동기 요청에서 set state 하는 것들은 초기화를 해주는 것이 좋다.
        // 안그러면 연달아 요청할 때 그전 state가 남아있을 수 있기 때문
        setSignUpSuccess(false);
        axios
          .post('/api/users', {
            // '/api/users' -> localhost 3095 가 localhost 3095에게 api 요청 ( webpack의 proxy 설정 덕분에 )
            // 'http://localhost:3095/api/users' -> localhost 3090 이 localhost 3095 에게 api 요청 하는 의미
            email,
            nickname,
            password,
          })
          .then((response) => {
            console.log(response);
            setSignUpSuccess(true);
          })
          .catch((error) => {
            console.log(error.response);
            setSignUpError(error.response.data);
          })
          .finally(() => {});
      }
    },
    [email, nickname, password, checkPassword, mismatchError],
  );

  const onChangePassword = useCallback(
    (e) => {
      setPassword(e.target.value);
      setMismatchError(e.target.value !== checkPassword);
    },
    [checkPassword],
  );

  const onChangeCheckPassword = useCallback(
    (e) => {
      setCheckPassword(e.target.value);
      setMismatchError(e.target.value !== password);
    },
    [password],
  );

  if (data === undefined) {
    return <div>로딩 중...</div>;
  }
  if (data) {
    console.log(data);
    return <Redirect to="/workspace/sslack/channel/일반" />;
  }

  return (
    <div id="container">
      <Header>SSlack</Header>
      <Form onSubmit={onSubmitSignupForm}>
        <Label id="email-label">
          <span>이메일 주소</span>
          <div>
            <Input type="email" id="email" name="email" value={email} onChange={onChangeEmail} />
          </div>
        </Label>
        <Label id="nickname-label">
          <span>닉네임</span>
          <div>
            <Input type="text" id="nickname" name="nickname" value={nickname} onChange={onChangeNickname} />
          </div>
        </Label>
        <Label id="password-label">
          <span>비밀번호</span>
          <div>
            <Input type="password" id="password" name="password" value={password} onChange={onChangePassword} />
          </div>
        </Label>
        <Label id="password-check-label">
          <span>비밀번호 확인</span>
          <div>
            <Input
              type="password"
              id="password-check"
              name="password-check"
              value={checkPassword}
              onChange={onChangeCheckPassword}
            />
          </div>
          {mismatchError && <Error>비밀번호가 일치하지 않습니다.</Error>}
          {!nickname && <Error>닉네임을 입력해주세요.</Error>}
          {signUpError && <Error>{signUpError}</Error>}
          {signUpSuccess && <Success>회원가입 되었습니다! 로그인 해주세요.</Success>}
        </Label>
        <Button type="submit">회원가입</Button>
      </Form>
      <LinkContainer>
        이미 회원이신가요?&nbsp;
        <Link to="/Login">로그인 하러 가기</Link>
      </LinkContainer>
    </div>
  );
};

export default SignUp;
