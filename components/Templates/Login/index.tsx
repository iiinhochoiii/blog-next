'use client';

import { Text, Box, Form, Link, FormSubmit, FormInput, Flex } from '@/components/Atom';
import FindPasswordDioalog from './Dialog/FindPasswordDialog';
import { useLogin } from './login.hook';

const LoginComponent = (): JSX.Element => {
  const { register, onSubmit, isLoggingIn, showFindPasswordModal, onOpenFindPassword, onCloseFindPassword } = useLogin();

  return (
    <Box>
      <Box width="360px" margin={{ top: '150px', bottom: '150px', left: 'auto', right: 'auto' }}>
        <Box textAlign="center">
          <Link href="/" size={32} fontFamily={`'Audiowide', cursive`}>
            Choi Tech
          </Link>
        </Box>
        <Form margin={{ top: '30px' }} onSubmit={onSubmit}>
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
          <Flex justify="right" margin={{ bottom: '20px' }}>
            <Text style={{ cursor: 'pointer' }} onClick={onOpenFindPassword}>
              비밀번호 찾기
            </Text>
            <Link href="/join" size={12} margin={{ left: '10px' }}>
              Sign up
            </Link>
          </Flex>
          <Box>
            <FormSubmit type="submit" width="100%" radius={5} value="로그인" loading={isLoggingIn} />
          </Box>
        </Form>
        <Box margin={{ top: '30px' }}>
          <Text size={12}>Copyright © 2021 by Choi Tech, Inc. All rights reserved</Text>
        </Box>
      </Box>

      {showFindPasswordModal && <FindPasswordDioalog onClose={onCloseFindPassword} />}
    </Box>
  );
};

export default LoginComponent;
