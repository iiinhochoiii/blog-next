import React from 'react';
import Headers from '@/components/layout/header';
import { observer } from 'mobx-react';
import useStores from '@/hooks/use-stores';
import { removeToken } from '@/utils/auth';

const HeaderContainer = observer((): JSX.Element => {
  const { userStore } = useStores();

  const logout = () => {
    removeToken();
    userStore.setUserInfo(undefined);
    window.location.href = '/';
  };

  return <Headers userInfo={userStore.userInfo} logout={logout} />;
});

export default HeaderContainer;
