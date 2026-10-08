import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { useUserStore } from '@/stores/user-store-provider';
import { useLoginMutation } from '@/queries/user';
import { getTokenData } from '@/apis/auth';
import { Toaster } from '@/utils/common';
import { setToken } from '@/utils/auth';
import { LoginForm } from '@/types/user';

export const useLogin = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const setUserInfo = useUserStore((state) => state.setUserInfo);
  const { mutateAsync: loginMutate } = useLoginMutation();
  const { register, handleSubmit } = useForm<LoginForm>();
  const [showFindPasswordModal, setShowFindPasswordModal] = useState(false);
  // 로그인 요청 ~ 페이지 이동까지 로딩 표시 (중복 제출 방지)
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const login = async (data: LoginForm): Promise<void> => {
    const { email, password } = data;

    if (!email || !password) {
      Toaster.showError('아이디 및 패스워드를 입력해주세요.');
      return;
    }

    setIsLoggingIn(true);
    try {
      const res = await loginMutate({ email, password });
      if (res.status) {
        setToken(res.token as string);
        const userInfo = await getTokenData(res?.token);
        if (userInfo.status) {
          setUserInfo({
            user_id: userInfo?.data?.user_id,
            name: userInfo?.data?.name,
            email: userInfo?.data?.email,
            phone: userInfo?.data?.phone,
          });
        }
        const redirect = searchParams.get('redirect');
        if (redirect) {
          router.push(redirect);
        } else {
          router.push('/');
        }
      } else {
        setIsLoggingIn(false);
        Toaster.showWarning(res?.msg);
      }
    } catch (err) {
      console.log(err);
      setIsLoggingIn(false);
      Toaster.showError('로그인 API 요청 실패 하였습니다. 다시 요청 해주세요');
    }
  };

  return {
    register,
    onSubmit: handleSubmit(login),
    isLoggingIn,
    showFindPasswordModal,
    onOpenFindPassword: () => setShowFindPasswordModal(true),
    onCloseFindPassword: () => setShowFindPasswordModal(false),
  };
};
