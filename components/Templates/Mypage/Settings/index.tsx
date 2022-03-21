import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react';
import { Box, Form, FormInput, FormSubmit, HeaderText, Text, Flex, Button } from '@/components/Atom';
import { useForm } from 'react-hook-form';
import useStores from '@/hooks/use-stores';
import { Toaster } from '@/utils/common';
import { setToken } from '@/utils/auth';
import MypageUpdatePasswordDialog from './Dialog/MypageUpdatePasswordDialog';
import { UpdateUserForm } from '@/interfaces/models/user';

const MypageSettingsComponent = observer(() => {
  const { userStore } = useStores();

  const [isVerifyPassword, setIsVerifyPassword] = useState(false);
  const [showUpdatePasswordModal, setShowUpdatePasswordModal] = useState(false);

  useEffect(() => {
    if (isVerifyPassword && userStore.userInfo) {
      reset({
        email: userStore?.userInfo?.email,
        name: userStore?.userInfo?.name,
        phone: userStore?.userInfo?.phone,
      });
    }
  }, [userStore?.userInfo, isVerifyPassword]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UpdateUserForm>();

  const verifyPassword = async (data: UpdateUserForm): Promise<void> => {
    try {
      const { password } = data;
      if (userStore.userInfo?.user_id) {
        const res = await userStore.verifyPassword(Number(userStore.userInfo.user_id), password);

        if (res.status) {
          setIsVerifyPassword(true);
          reset({
            password: '',
          });
        } else {
          Toaster.showError(res?.message || '비밀번호가 일치하지 않습니다.');
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  const updateUserInfo = async (data: UpdateUserForm): Promise<void> => {
    try {
      const { name, phone } = data;

      if (window.confirm('정보를 변경하시겠습니까?')) {
        if (userStore.userInfo?.user_id) {
          const res = await userStore.updateUserInfo(Number(userStore.userInfo.user_id), name, phone);

          if (res.status) {
            setToken(res?.token);
            userStore.setUserInfo({
              ...res.data,
            });
            Toaster.showSuccess(res.message);
            setIsVerifyPassword(true);
          } else {
            Toaster.showError(res.message || '정보가 변경 되지 않았습니다.');
          }
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box width={'70%'} style={{ minHeight: '100vh' }}>
      <HeaderText size={22} fontWeight={400} color="rgb(18, 184, 134)">
        개인정보 변경
      </HeaderText>
      {isVerifyPassword ? (
        <Form width={'70%'} onSubmit={handleSubmit(updateUserInfo)}>
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
            <Button
              width={'45%'}
              radius={5}
              onClick={() => {
                setShowUpdatePasswordModal(true);
              }}
            >
              비밀번호 변경
            </Button>
            <FormSubmit width={'45%'} type="submit" value="정보 변경" radius={5} />
          </Flex>
        </Form>
      ) : (
        <Form width={'70%'} onSubmit={handleSubmit(verifyPassword)}>
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
      {showUpdatePasswordModal && <MypageUpdatePasswordDialog onClose={() => setShowUpdatePasswordModal(false)} />}
    </Box>
  );
});

export default MypageSettingsComponent;
