import { Modal } from '@/components/Organisms';
import { Flex, Form, FormInput, FormSubmit, Box, Button, Text, Link } from '@/components/Atom';
import { regExpEmail, regPassword } from '@/utils/regExp';
import { useFindPassword } from './find-password.hook';

interface Props {
  onClose: () => void;
}
const FindPasswordDialog = (props: Props): JSX.Element => {
  const { onClose } = props;
  const {
    register,
    errors,
    isEmailCheck,
    isSendMail,
    isSuccessCert,
    onCheckEmail,
    onSendMail,
    onVerify,
    onUpdatePassword,
    validatePasswordConfirm,
    onCloseModal,
  } = useFindPassword(onClose);

  return (
    <Modal onClose={onCloseModal} title="비밀번호 찾기" width={600} height={400}>
      {!isSuccessCert ? (
        <Box>
          <Form onSubmit={onCheckEmail}>
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
              <Form margin={{ top: '20px' }} onSubmit={onVerify}>
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
                      onClick={onSendMail}
                    >
                      인증번호 전송
                    </Text>
                  </Flex>
                </Box>
              </Form>
            )}
            {isEmailCheck && !isSendMail && (
              <Button onClick={onSendMail} margin={{ top: '20px' }} width={'100%'}>
                인증코드 전송
              </Button>
            )}
          </Box>
        </Box>
      ) : (
        <Box>
          <Form onSubmit={onUpdatePassword}>
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
                validate: validatePasswordConfirm,
              })}
              error={errors.passwordConfirm}
            />
            <FormSubmit type="submit" value="변경" width={'100%'} />
          </Form>
        </Box>
      )}
    </Modal>
  );
};

export default FindPasswordDialog;
