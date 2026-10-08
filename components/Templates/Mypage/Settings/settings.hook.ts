import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useUserStore } from '@/stores/user-store-provider';
import { useUpdateUserInfoMutation, useVerifyPasswordMutation } from '@/queries/user';
import { Toaster } from '@/utils/common';
import { setToken } from '@/utils/auth';
import { UpdateUserForm } from '@/types/user';

// 개인정보 변경: 비밀번호 확인 후 정보 변경 폼을 노출
export const useMypageSettings = () => {
  const userInfo = useUserStore((state) => state.userInfo);
  const setUserInfo = useUserStore((state) => state.setUserInfo);
  const { mutateAsync: verifyPasswordMutate } = useVerifyPasswordMutation();
  const { mutateAsync: updateUserInfoMutate } = useUpdateUserInfoMutation();

  const [isVerifyPassword, setIsVerifyPassword] = useState(false);
  const [showUpdatePasswordModal, setShowUpdatePasswordModal] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UpdateUserForm>();

  useEffect(() => {
    if (isVerifyPassword && userInfo) {
      reset({
        email: userInfo?.email,
        name: userInfo?.name,
        phone: userInfo?.phone,
      });
    }
  }, [userInfo, isVerifyPassword]);

  const verifyPassword = async (data: UpdateUserForm): Promise<void> => {
    try {
      const { password } = data;
      if (userInfo?.user_id) {
        const res = await verifyPasswordMutate({ id: Number(userInfo.user_id), password });

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
        if (userInfo?.user_id) {
          const res = await updateUserInfoMutate({ id: Number(userInfo.user_id), name, phone });

          if (res.status) {
            setToken(res.token as string);
            setUserInfo({
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

  return {
    register,
    errors,
    isVerifyPassword,
    onVerifyPassword: handleSubmit(verifyPassword),
    onUpdateUserInfo: handleSubmit(updateUserInfo),
    showUpdatePasswordModal,
    onOpenUpdatePassword: () => setShowUpdatePasswordModal(true),
    onCloseUpdatePassword: () => setShowUpdatePasswordModal(false),
  };
};
