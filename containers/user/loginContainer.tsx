import React from 'react';
import LoginComponent from '@/components/user/login';
import { observer } from 'mobx-react';
import router from 'next/router';
import useStores from '@/hooks/use-stores';
import { Toaster } from '@/utils/common';
import { setToken } from '@/utils/auth';

const LoginContainer = observer((): JSX.Element => {
  const { userStore } = useStores();

  const login = async (email: string, password: string) => {
    try {
      const res = await userStore.login(email, password);
      if (res.status) {
        setToken(res?.token);
        const userInfo = await userStore.getTokenData(res?.token);

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
  return <LoginComponent login={login} />;
});
export default LoginContainer;
