import React, { useState } from 'react';
import { observer } from 'mobx-react';
import useStores from '@/hooks/use-stores';
import { Modal } from '@/components/Organisms';
import { useForm } from 'react-hook-form';
import { Flex, Form, FormInput, FormSubmit, Box, Button, Text, Link } from '@/components/Atom';
import { regExpEmail, regPassword } from '@/utils/regExp';
import { Toaster } from '@/utils/common';
import { FindPasswordForm } from '@/interfaces/models/user';

interface Props {
  onClose: () => void;
}
const FindPasswordDialog = observer((props: Props): JSX.Element => {
  const { onClose } = props;
  const { userStore } = useStores();
  const [isEmailCheck, setIsEmailCheck] = useState(false);
  const [isSendMail, setIsSendMail] = useState(false);
  const [isSuccessCert, setIsSuccessCert] = useState(false);
  const [certToken, setCertToken] = useState(undefined);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<FindPasswordForm>();

  const checkEmail = async (data: FindPasswordForm): Promise<void> => {
    try {
      if (isEmailCheck) {
        return;
      }
      const res = await userStore.checkId(data.email);
      // userStore.checkId 는 기존에, 회원 가입 할 때,
      // 중복 된 이메일이 있는지 확인하기 위한 api로
      // 회원가입 가능한 상태는 status = true, 아닐 때 flase
      // 여기서는 반대로, status값이 true라면 회원가입 가능한 상태이기에
      // 등록되지 않은 계정이고 false는 등록된 계정임
      if (res.status) {
        Toaster.showError('가입된 계정이 아닙니다. 이메일을 다시 확인해주세요.');
      } else {
        setIsEmailCheck(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const sendMail = async (): Promise<void> => {
    try {
      if (isEmailCheck) {
        const { email } = watch();
        const res = await userStore.sendMail(email);

        if (res?.status) {
          setIsSendMail(true);
        } else {
          Toaster.showWarning(res?.message);
        }
      } else {
        Toaster.showWarning('이메일 확인이 되지않았습니다.');
      }
    } catch (err) {
      console.log(err);
    }
  };

  const verify = async (data: FindPasswordForm): Promise<void> => {
    try {
      const { email, certificationCode } = data;

      const res = await userStore.verifyCertCode({
        email: email,
        certificationCode: certificationCode,
      });

      if (res?.status) {
        setIsSuccessCert(true);
        setCertToken(res?.token);
      } else {
        Toaster.showWarning(res?.message || '인증번호가 맞지 않습니다. 다시 확인해주세요.');
      }
    } catch (err) {
      console.log(err);
    }
  };

  const updatePassword = async (data: FindPasswordForm): Promise<void> => {
    try {
      const { password } = data;

      const res = await userStore.updatePassowrd(password, certToken);
      if (res?.status) {
        doneAction();
        onClose();
        Toaster.showSuccess(res?.message || '비밀번호가 변경 되었습니다.');
      }
    } catch (err) {
      console.log(err);
      Toaster.showError('비밀번호가 변경되지 않았습니다. 다시 시도해주세요.');
    }
  };

  const doneAction = () => {
    setIsEmailCheck(false);
    setIsSendMail(false);
    setIsSuccessCert(false);
    reset({
      email: '',
      certificationCode: '',
      password: '',
      passwordConfirm: '',
    });
  };

  return (
    <Modal
      onClose={() => {
        onClose();
        doneAction();
      }}
      title="비밀번호 찾기"
      width={600}
      height={400}
    >
      {!isSuccessCert ? (
        <Box>
          <Form onSubmit={handleSubmit(checkEmail)}>
            <Flex justify="space-between">
              <Box width="70%">
                <FormInput
                  {...register('email', {
                    required: {
                      value: true,
                      message: '이메일을 입력해주세요.',
                    },
                    pattern: {
                      value: regExpEmail,
                      message: '이메일 형식에 맞게 입력해주세요.',
                    },
                  })}
                  error={errors.email}
                  placeholder="이메일을 입력해주세요."
                  width="100%"
                  height={44}
                  padding={{
                    left: '10px',
                    right: '10px',
                  }}
                  fontSize={14}
                  readonly={isEmailCheck}
                />
              </Box>
              <FormSubmit type="submit" value="확인" width="30%" disabled={isEmailCheck} />
            </Flex>
            {!isEmailCheck && (
              <Box textAlign="center" backgroundColor={'rgb(247, 248, 250)'} margin={{ top: '30px' }} padding={{ top: '20px', bottom: '20px' }}>
                <Text size={12} textAlign="center">
                  회원가입시 입력한 정보가 기억나지 않으신가요?
                </Text>
                <Link href="mailto:dlsgh120@gmail.com" style={{ color: '#12b886', fontWeight: 'bold' }}>
                  Email 문의하기
                </Link>
              </Box>
            )}
          </Form>
          <Box>
            {isSendMail && (
              <Form margin={{ top: '20px' }} onSubmit={handleSubmit(verify)}>
                <FormInput
                  {...register('certificationCode', {
                    required: {
                      value: true,
                      message: '인증번호를 입력해주세요.',
                    },
                    minLength: {
                      value: 6,
                      message: '6자리를 입력해주세요.',
                    },
                  })}
                  width={'100%'}
                  padding={{ left: '10px', right: '10px' }}
                  maxLength={6}
                  fontSize={14}
                  error={errors.certificationCode}
                />
                <Box>
                  <FormSubmit type="submit" margin={{ top: '20px' }} width={'100%'} value="인증하기" />
                  <Flex margin={{ top: '15px' }}>
                    인증번호를 받지 않으셨나요?{' '}
                    <Text
                      margin={{ top: 'auto', bottom: 'auto', left: '5px' }}
                      size={14}
                      style={{ textDecoration: 'underline', cursor: 'pointer' }}
                      onClick={() => {
                        sendMail();
                      }}
                    >
                      인증번호 전송
                    </Text>
                  </Flex>
                </Box>
              </Form>
            )}
            {isEmailCheck && !isSendMail && (
              <Button onClick={() => sendMail()} margin={{ top: '20px' }} width={'100%'}>
                인증코드 전송
              </Button>
            )}
          </Box>
        </Box>
      ) : (
        <Box>
          <Form onSubmit={handleSubmit(updatePassword)}>
            <FormInput
              width="100%"
              height={50}
              padding={{ left: '5px', right: '10px' }}
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

            <FormInput
              width="100%"
              height={50}
              padding={{ left: '5px', right: '10px' }}
              margin={{ bottom: '10px' }}
              type="password"
              placeholder="비밀번호 확인"
              style={{ background: 'none' }}
              {...register('passwordConfirm', {
                required: {
                  value: true,
                  message: '패스워드 확인을 입력해주세요.',
                },
                validate: (value) => {
                  if (value !== watch('password')) {
                    return '패스워드가 일치하지 않습니다.';
                  }
                },
              })}
              error={errors.passwordConfirm}
            />
            <FormSubmit type="submit" value="변경" width={'100%'} />
          </Form>
        </Box>
      )}
    </Modal>
  );
});

export default FindPasswordDialog;
