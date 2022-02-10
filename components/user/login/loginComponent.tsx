import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Toaster } from '@/utils/common';
import { Input, Button, Text, Box } from '@/components/Atom';

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
    <Box>
      <Box width="360px" margin={{ top: '150px', bottom: '150px', left: 'auto', right: 'auto' }}>
        <LoginHeader>
          <Link href="/">
            <a>Choi Tech</a>
          </Link>
        </LoginHeader>
        <LoginContent onSubmit={LoginHandler}>
          <Box>
            <Text style={{ marginBottom: '5px' }}>Email or Id</Text>
            <Input type="text" value={email} id="email" onChange={inputChangeHandler} size={100} />
            <Text style={{ marginBottom: '5px' }}>Password</Text>
            <Input type="password" value={password} id="password" onChange={inputChangeHandler} size={100} />
          </Box>
          <Box textAlign="right" margin={{ bottom: '20px' }}>
            <Link href="/join">
              <a>Sign up</a>
            </Link>
          </Box>
          <Box>
            <Button size="FULL_SIZE" radius={5}>
              LOGIN
            </Button>
          </Box>
        </LoginContent>
        <Box margin={{ top: '30px' }}>
          <Text>Copyright © 2021 by Choi Tech, Inc. All rights reserved</Text>
        </Box>
      </Box>
    </Box>
  );
};

const LoginHeader = styled.div`
  text-align: center;
  & > a {
    font-family: 'Audiowide', cursive;
    text-decoration: none;
    color: #333333;
    font-size: 32px;
  }
`;

const LoginContent = styled.form`
  margin: 30px 0px 0px 0px;

  & > a {
    margin: 0px 0px 0px 20px;
    text-decoration: none;
    color: #333333;
    font-size: 12px;
  }
`;

export default LoginComponent;
