import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Toaster } from '@/utils/common';
import { Input, Button, Text } from '@/components/Atom';

interface Props {
  login: (email: string, password: string) => void;
}
const LoginComponent: React.FC<Props> = ({ login }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    switch (id) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
    }
  };
  const LoginHandler = (e: any) => {
    e.preventDefault();
    if (email === '') {
      Toaster.showWarning('email을 입력해주세요.');
      document.getElementById('email')?.focus();
    } else if (password === '') {
      Toaster.showWarning('password를 입력해주세요.');
      document.getElementById('password')?.focus();
    } else {
      login(email, password);
    }
  };

  return (
    <LoginWrap>
      <LoginContainer>
        <LoginHeader>
          <Link href="/">
            <a>Choi Tech</a>
          </Link>
        </LoginHeader>
        <LoginContent onSubmit={LoginHandler}>
          <div className="user-info-wrap">
            <Text style={{ marginBottom: '5px' }}>Email or Id</Text>
            <Input type="text" value={email} id="email" onChange={inputChangeHandler} />
            <Text style={{ marginBottom: '5px' }}>Password</Text>
            <Input type="password" value={password} id="password" onChange={inputChangeHandler} />
          </div>
          <div className="user-info-forgot">
            <Link href="/join">
              <a>Sign up</a>
            </Link>
          </div>
          <div className="user-info-login">
            <Button size="FULL_SIZE" radius={5}>
              LOGIN
            </Button>
          </div>
        </LoginContent>
        <LoginFooter>
          <Text>Copyright © 2021 by Choi Tech, Inc. All rights reserved</Text>
        </LoginFooter>
      </LoginContainer>
    </LoginWrap>
  );
};

const LoginWrap = styled.div``;

const LoginHeader = styled.div`
  text-align: center;
  & > a {
    font-family: 'Audiowide', cursive;
    text-decoration: none;
    color: #333333;
    font-size: 32px;
  }
`;
const LoginContainer = styled.div`
  width: 360px;
  margin: 150px auto;
`;

const LoginContent = styled.form`
  margin: 30px 0px 0px 0px;
  & > .user-info-wrap {
  }
  & > .user-info-forgot {
    text-align: right;
    margin-bottom: 20px;
    & > a {
      margin: 0px 0px 0px 20px;
      text-decoration: none;
      color: #333333;
      font-size: 12px;
    }
  }
  & > .user-info-login {
  }
`;

const LoginFooter = styled.div`
  margin-top: 30px;
`;
export default LoginComponent;
