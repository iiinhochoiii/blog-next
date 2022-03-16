import React from 'react';
import { observer } from 'mobx-react';
import { useRouter } from 'next/router';
import useStores from '@/hooks/use-stores';
import { Toaster } from '@/utils/common';
import { setToken } from '@/utils/auth';
import { Text, Box, Form, Link, FormSubmit, FormInput } from '@/components/Atom';
import { useForm } from 'react-hook-form';
import { LoginForm } from '@/interfaces/models/user';

const LoginComponent = observer((): JSX.Element => {
  const router = useRouter();
  const { userStore, authStore } = useStores();
  const { register, handleSubmit } = useForm<LoginForm>();

  const login = async (data: LoginForm): Promise<void> => {
    const { email, password } = data;

    if (!email || !password) {
      Toaster.showError('아이디 및 패스워드를 입력해주세요.');
      return;
    }

    try {
      const res = await authStore.login(email, password);
      if (res.status) {
        setToken(res?.token);
        const userInfo = await authStore.getTokenData(res?.token);
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

  return (
    <Box>
      <Box width="360px" margin={{ top: '150px', bottom: '150px', left: 'auto', right: 'auto' }}>
        <Box textAlign="center">
          <Link href="/" size={32} fontFamily={`'Audiowide', cursive`}>
            Choi Tech
          </Link>
        </Box>
        <Form margin={{ top: '30px' }} onSubmit={handleSubmit(login)}>
          <Text size={12} margin={{ top: '10px', bottom: '5px' }}>
            Email or Id
          </Text>
          <FormInput
            type="text"
            id="email"
            width="100%"
            padding={{ left: '10px', right: '10px' }}
            margin={{ bottom: '10px' }}
            height={50}
            style={{ background: 'none' }}
            {...register('email')}
          />
          <Text size={12} margin={{ top: '10px', bottom: '5px' }}>
            Password
          </Text>
          <FormInput
            type="password"
            id="password"
            width="100%"
            padding={{ left: '10px', right: '10px' }}
            margin={{ bottom: '10px' }}
            height={50}
            style={{ background: 'none' }}
            {...register('password')}
            enabled={true}
          />
          <Box textAlign="right" margin={{ bottom: '20px' }}>
            <Link href="/join" size={12} margin={{ left: '20px' }}>
              Sign up
            </Link>
          </Box>
          <Box>
            <FormSubmit type="submit" width="100%" radius={5} value="로그인" />
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
