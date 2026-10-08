'use client';

import { Box, Text, Link, Flex, Button, Form, FormInput, FormSubmit } from '@/components/Atom';
import { regExpEmail, regPassword, regPhone } from '@/utils/regExp';
import { useSignUp } from './sign-up.hook';

const SignUpComponent = (): JSX.Element => {
  const { register, errors, checkIdStatus, onCheckEmail, onSubmit, validatePasswordConfirm } = useSignUp();

  return (
    <Box>
      <Box width="360px" margin={{ top: '150px', bottom: '150px', left: 'auto', right: 'auto' }}>
        <Box textAlign="center">
          <Link href="/" size={32} fontFamily={`'Audiowide', cursive`}>
            Choi Tech
          </Link>
        </Box>
        <Form margin={{ top: '30px' }} onSubmit={onSubmit}>
          <Text size={16} fontWeight={400} textAlign="center">
            회원 정보를 입력해주세요.
          </Text>
          <Text size={10} margin={{ top: '10px', bottom: '5px' }}>
            email
          </Text>
          <Flex justify="space-between" margin={{ bottom: '10px' }}>
            <FormInput
              width="70%"
              height={45}
              padding={{ left: '10px', right: '10px' }}
              type="text"
              placeholder="E-mail을 입력해주세요."
              readonly={checkIdStatus?.status && true}
              style={{
                background: 'none',
                ...(errors.email && { border: '1px solid #ff0000' }),
                ...(checkIdStatus && !checkIdStatus.status && { border: '1px solid #ff0000' }),
              }}
              {...register('email', {
                required: {
                  value: true,
                  message: '이메일을 입력해주세요.',
                },
                pattern: {
                  value: regExpEmail,
                  message: '이메일을 정확히 입력해주세요.',
                },
              })}
            />
            <Button onClick={onCheckEmail} width="25%" radius={5}>
              중복확인
            </Button>
          </Flex>
          {errors.email ? (
            <Text style={{ color: '#ff0000' }}>{errors.email.message}</Text>
          ) : (
            <Text style={checkIdStatus?.status ? { color: '#333333' } : { color: 'red' }}>{checkIdStatus?.massage}</Text>
          )}
          <Text size={10} margin={{ top: '10px', bottom: '5px' }}>
            password
          </Text>
          <FormInput
            width="100%"
            height={50}
            padding={{ left: '10px', right: '10px' }}
            margin={{ bottom: '10px' }}
            type="password"
            placeholder="비밀번호를 입력해 주세요."
            style={{ background: 'none' }}
            {...register('password', {
              required: {
                value: true,
                message: '패스워드를 입력해주세요.',
              },
              pattern: {
                value: regPassword,
                message: '영문, 숫자, 특수문자를 포함한 8자리 이상을 입력해주세요.',
              },
            })}
            error={errors.password}
          />
          <Text size={10} margin={{ top: '10px', bottom: '5px' }}>
            password Confirm
          </Text>
          <FormInput
            width="100%"
            height={50}
            padding={{ left: '10px', right: '10px' }}
            margin={{ bottom: '10px' }}
            type="password"
            placeholder="비밀번호 확인"
            style={{ background: 'none' }}
            {...register('passwordConfirm', {
              required: {
                value: true,
                message: '패스워드 확인을 입력해주세요.',
              },
              validate: validatePasswordConfirm,
            })}
            error={errors.passwordConfirm}
          />
          <Text size={10} margin={{ top: '10px', bottom: '5px' }}>
            name
          </Text>
          <FormInput
            width="100%"
            height={50}
            padding={{ left: '10px', right: '10px' }}
            margin={{ bottom: '10px' }}
            type="text"
            placeholder="이름을 입력해 주세요."
            style={{ background: 'none' }}
            {...register('name', {
              required: {
                value: true,
                message: '이름을 입력해주세요',
              },
            })}
            error={errors.name}
          />
          <Text size={10} margin={{ top: '10px', bottom: '5px' }}>
            핸드폰번호
          </Text>
          <FormInput
            width="100%"
            height={50}
            padding={{ left: '10px', right: '10px' }}
            margin={{ bottom: '10px' }}
            type="text"
            placeholder="-를 제외한 핸드폰 번호를 입력해주세요."
            style={{ background: 'none' }}
            {...register('phone', {
              required: {
                value: true,
                message: '핸드폰번호를 입력해주세요.',
              },
              pattern: {
                value: regPhone,
                message: '올바른 핸드폰 번호를 입력해주세요.',
              },
            })}
            error={errors.phone}
          />
          <Box className="user_join">
            <FormSubmit type="submit" value="Sign Up" width="100%" radius={5} />
          </Box>
        </Form>
        <Box margin={{ top: '30px' }}>
          <Text size={10}>Copyright © 2021 by Choi Tech, Inc. All rights reserved</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUpComponent;
