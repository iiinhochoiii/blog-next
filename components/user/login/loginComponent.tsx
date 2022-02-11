import React, { useState } from 'react';
import { Toaster } from '@/utils/common';
import { Input, Button, Text, Box, Form, Link } from '@/components/Atom';

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
        <Box textAlign="center">
          <Link href="/" size={32} fontFamily={`'Audiowide', cursive`}>
            Choi Tech
          </Link>
        </Box>
        <Form onSubmit={LoginHandler}>
          <Form margin={{ top: '30px' }}>
            <Text style={{ marginBottom: '5px' }}>Email or Id</Text>
            <Input type="text" value={email} id="email" onChange={inputChangeHandler} size={100} />
            <Text style={{ marginBottom: '5px' }}>Password</Text>
            <Input type="password" value={password} id="password" onChange={inputChangeHandler} size={100} />
          </Form>
          <Box textAlign="right" margin={{ bottom: '20px' }}>
            <Link href="/join" size={12} margin={{ left: '20px' }}>
              Sign up
            </Link>
          </Box>
          <Box>
            <Button size="FULL_SIZE" radius={5}>
              LOGIN
            </Button>
          </Box>
        </Form>
        <Box margin={{ top: '30px' }}>
          <Text>Copyright © 2021 by Choi Tech, Inc. All rights reserved</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginComponent;
