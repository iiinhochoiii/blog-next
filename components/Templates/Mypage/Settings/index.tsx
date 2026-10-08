'use client';

import { Box, Form, FormInput, FormSubmit, HeaderText, Text, Flex, Button } from '@/components/Atom';
import MypageUpdatePasswordDialog from './Dialog/MypageUpdatePasswordDialog';
import { useMypageSettings } from './settings.hook';

const MypageSettingsComponent = () => {
  const { register, errors, isVerifyPassword, onVerifyPassword, onUpdateUserInfo, showUpdatePasswordModal, onOpenUpdatePassword, onCloseUpdatePassword } =
    useMypageSettings();

  return (
    <Box width={'70%'} style={{ minHeight: '100vh' }} screen={{ size: 1010, calc: '0px' }}>
      <HeaderText size={22} fontWeight={400} color="rgb(18, 184, 134)">
        개인정보 변경
      </HeaderText>
      {isVerifyPassword ? (
        <Form width={'100%'} onSubmit={onUpdateUserInfo}>
          <Text size={12} margin={{ top: '10px', bottom: '5px' }}>
            이메일
          </Text>
          <FormInput type="text" {...register('email')} readonly={true} padding={{ left: '10px', right: '10px' }} />
          <Text size={12} margin={{ top: '10px', bottom: '5px' }}>
            이름
          </Text>
          <FormInput
            type="text"
            {...register('name', {
              required: {
                value: true,
                message: '이름을 입력해주세요.',
              },
            })}
            error={errors.name}
            placeholder="이름을 입력해주세요"
            padding={{ left: '10px', right: '10px' }}
          />
          <Text size={12} margin={{ top: '10px', bottom: '5px' }}>
            핸드폰번호
          </Text>
          <FormInput
            type="text"
            {...register('phone', {
              required: {
                value: true,
                message: '전화번호를 입력해주세요.',
              },
            })}
            placeholder="-를 제외한 전화번호를 입력해주세요"
            error={errors.phone}
            padding={{ left: '10px', right: '10px' }}
          />

          <Flex margin={{ top: '20px' }} justify="space-between" width={'100%'}>
            <Button width={'45%'} radius={5} onClick={onOpenUpdatePassword}>
              비밀번호 변경
            </Button>
            <FormSubmit width={'45%'} type="submit" value="정보 변경" radius={5} />
          </Flex>
        </Form>
      ) : (
        <Form width={'100%'} onSubmit={onVerifyPassword}>
          <Text size={12} margin={{ top: '10px', bottom: '5px' }}>
            Password
          </Text>
          <FormInput
            type="password"
            {...register('password', {
              required: {
                value: true,
                message: '패스워드를 입력해주세요.',
              },
            })}
            padding={{ left: '10px', right: '10px' }}
            width={'100%'}
            placeholder="본인 확인을 위해 비밀번호를 인증해주세요."
            error={errors.password}
            enabled={true}
          />
          <FormSubmit type="submit" margin={{ top: '15px' }} width={'100px'} value="확인" radius={5} />
        </Form>
      )}
      {showUpdatePasswordModal && <MypageUpdatePasswordDialog onClose={onCloseUpdatePassword} />}
    </Box>
  );
};

export default MypageSettingsComponent;
