import React, { useState } from 'react';
import { observer } from 'mobx-react';
import { useRouter } from 'next/router';
import useStores from '@/hooks/use-stores';
import { Toaster } from '@/utils/common';
import { setToken } from '@/utils/auth';
import { Input, Button, Text, Box, Form, Link } from '@/components/Atom';

const LoginComponent = observer((): JSX.Element => {
  const router = useRouter();
  const { userStore } = useStores();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const login = async (email: string, password: string) => {
    try {
      const res = await userStore.login(email, password);
      if (res.status) {
        setToken(res?.token);
        const userInfo = await userStore.getTokenData(res?.token);

        if (userInfo.status) {
          userStore.setUserInfo({
            user_id: userInfo?.data?.user_id,
            name: userInfo?.data?.name,
            email: userInfo?.data?.email,
            phone: userInfo?.data?.phone,
          });
        }
        router.push('/');
      } else {
        Toaster.showWarning(res?.msg);
      }
    } catch (err) {
      console.log(err);
      Toaster.showError('로그인 API 요청 실패 하였습니다. 다시 요청 해주세요');
    }
  };

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
            <Text size={12} margin={{ top: '10px', bottom: '5px' }}>
              Email or Id
            </Text>
            <Input
              type="text"
              value={email}
              id="email"
              onChange={inputChangeHandler}
              width="100%"
              padding={{ left: '10px', right: '10px' }}
              margin={{ bottom: '10px' }}
              height={50}
              style={{ background: 'none' }}
            />
            <Text size={12} margin={{ top: '10px', bottom: '5px' }}>
              Password
            </Text>
            <Input
              type="password"
              value={password}
              id="password"
              onChange={inputChangeHandler}
              width="100%"
              padding={{ left: '10px', right: '10px' }}
              margin={{ bottom: '10px' }}
              height={50}
              style={{ background: 'none' }}
            />
          </Form>
          <Box textAlign="right" margin={{ bottom: '20px' }}>
            <Link href="/join" size={12} margin={{ left: '20px' }}>
              Sign up
            </Link>
          </Box>
          <Box>
            <Button width="100%" radius={5}>
              LOGIN
            </Button>
          </Box>
        </Form>
        <Box margin={{ top: '30px' }}>
          <Text size={12}>Copyright © 2021 by Choi Tech, Inc. All rights reserved</Text>
        </Box>
      </Box>
    </Box>
  );
});

export default LoginComponent;
