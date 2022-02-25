import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { useRouter } from 'next/router';
import useStores from '@/hooks/use-stores';
import { Toaster } from '@/utils/common';
import { Box, Text, Link, Flex, Input, Button } from '@/components/Atom';
import { regExpEmail, regPassword } from '@/utils/regExp';

const SignUpComponent = observer((): JSX.Element => {
  const router = useRouter();
  const { userStore } = useStores();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');

  const onChangeHandler = (e: any) => {
    const { id, value } = e.target;
    switch (id) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      case 'passwordConfirm':
        return setPasswordConfirm(value);
      case 'name':
        return setName(value);
      case 'phone':
        return setPhone(value);
    }
  };

  useEffect(() => {
    userStore.setCheckIdStatus(undefined);
  }, []);

  const checkId = async (email: string) => {
    try {
      const res = await userStore.checkId(email);

      userStore.setCheckIdStatus(res);
    } catch (err) {
      console.log(err);
    }
  };

  const createUser = async (email: string, password: string, name: string, phone: string) => {
    try {
      await userStore.createUser(email, password, name, phone);
      Toaster.showSuccess('회원가입이 완료되었습니다.');
      router.push('/login');
    } catch (err) {
      console.log(err);
      Toaster.showError('회원가입에 실패하였습니다. 다시한번 시도 해주세요');
    }
  };
  const emailCheckHandler = () => {
    if (!regExpEmail.test(email)) {
      Toaster.showWarning('이메일을 정확히 입력해주세요.');
    } else {
      checkId(email);
    }
  };

  const joinHandler = () => {
    if (!userStore.checkIdStatus?.status) {
      Toaster.showWarning('중복확인을 하지 않았습니다.');
      document.getElementById('email')?.focus();
    } else if (!regPassword.test(password)) {
      Toaster.showWarning('영문, 숫자, 특수문자를 포함한 8자리 이상을 입력해주세요.');
      document.getElementById('password')?.focus();
    } else if (password !== passwordConfirm) {
      Toaster.showWarning('패스워드가 일치하지 않습니다.');
      document.getElementById('passwordConfirm')?.focus();
    } else if (name === '') {
      Toaster.showWarning('이름을 입력해주세요.');
      document.getElementById('name')?.focus();
    } else if (phone === '') {
      Toaster.showWarning('핸드폰번호를 입력해주세요.');
      document.getElementById('phone')?.focus();
    } else {
      createUser(email, password, name, phone);
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
        <Box margin={{ top: '30px' }}>
          <Text size={16} fontWeight={400} textAlign="center">
            회원 정보를 입력해주세요.
          </Text>
          <Text size={10} margin={{ top: '10px', bottom: '5px' }}>
            email
          </Text>
          <Flex justify="space-between" margin={{ bottom: '10px' }}>
            <Input
              width="70%"
              height={45}
              padding={{ left: '10px', right: '10px' }}
              type="text"
              placeholder="E-mail을 입력해주세요."
              value={email}
              id="email"
              onChange={onChangeHandler}
              readOnly={userStore.checkIdStatus?.status && true}
              style={{ background: 'none' }}
            />
            <Button onClick={emailCheckHandler} width="25%" radius={5}>
              중복확인
            </Button>
          </Flex>
          <Text style={userStore.checkIdStatus?.status ? { color: '#333333' } : { color: 'red' }}>{userStore.checkIdStatus?.massage}</Text>
          <Text size={10} margin={{ top: '10px', bottom: '5px' }}>
            password
          </Text>
          <Input
            width="100%"
            height={50}
            padding={{ left: '10px', right: '10px' }}
            margin={{ bottom: '10px' }}
            type="password"
            placeholder="비밀번호를 입력해 주세요."
            value={password}
            id="password"
            onChange={onChangeHandler}
            style={{ background: 'none' }}
          />
          <Text size={10} margin={{ top: '10px', bottom: '5px' }}>
            password Confirm
          </Text>
          <Input
            width="100%"
            height={50}
            padding={{ left: '10px', right: '10px' }}
            margin={{ bottom: '10px' }}
            type="password"
            placeholder="비밀번호 확인"
            value={passwordConfirm}
            id="passwordConfirm"
            onChange={onChangeHandler}
            style={{ background: 'none' }}
          />
          <span style={{ color: 'red' }}>{passwordConfirm.length > 0 && password !== passwordConfirm ? '비밀번호가 일치하지 않습니다.' : ''}</span>
          <Text size={10} margin={{ top: '10px', bottom: '5px' }}>
            name
          </Text>
          <Input
            width="100%"
            height={50}
            padding={{ left: '10px', right: '10px' }}
            margin={{ bottom: '10px' }}
            type="text"
            placeholder="이름을 입력해 주세요."
            value={name}
            id="name"
            onChange={onChangeHandler}
            style={{ background: 'none' }}
          />
          <Text size={10} margin={{ top: '10px', bottom: '5px' }}>
            핸드폰번호
          </Text>
          <Input
            width="100%"
            height={50}
            padding={{ left: '10px', right: '10px' }}
            margin={{ bottom: '10px' }}
            type="text"
            placeholder="-를 제외한 핸드폰 번호를 입력해주세요."
            value={phone}
            id="phone"
            onChange={onChangeHandler}
            style={{ background: 'none' }}
          />
          <Box className="user_join">
            <Button onClick={joinHandler} width="100%" radius={5}>
              Sign Up
            </Button>
          </Box>
        </Box>
        <Box margin={{ top: '30px' }}>
          <Text size={10}>Copyright © 2021 by Choi Tech, Inc. All rights reserved</Text>
        </Box>
      </Box>
    </Box>
  );
});

export default SignUpComponent;
