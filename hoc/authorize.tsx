import React from 'react';
import useStores from '@/hooks/use-stores';
import cookies from 'next-cookies';
import { UserInfo } from '@/interfaces/models/user';
import axios from '@/utils/axios';

interface PageProps {
  isServer: boolean;
  token?: string;
  userInfo?: UserInfo;
}

const WrapComponent = (TargetComponent): ((props: PageProps) => JSX.Element) => {
  const Authorize = (props: PageProps): JSX.Element => {
    const { isServer, userInfo } = props;
    const { userStore } = useStores();

    if (isServer) {
      let data;
      if (userInfo) {
        data = {
          user_id: userInfo?.user_id,
          email: userInfo?.email,
          name: userInfo?.name,
          phone: userInfo?.phone,
        };
      } else {
        data = undefined;
      }
      userStore.setUserInfo(data);
    }
    return <TargetComponent />;
  };

  Authorize.getInitialProps = async (ctx) => {
    const isServer = !!ctx.req;
    const token = cookies(ctx)['uuid_token'];
    let userInfo = undefined;

    if (isServer) {
      if (token) {
        try {
          const [res] = await Promise.all([axios.post('/api/auth/user', { token: token })]);
          userInfo = res.data.data;
        } catch (err) {
          console.log(err);
          ctx.res.end();
        }
      } else {
        userInfo = undefined;
      }
    }

    const props = {
      isServer,
      token,
      userInfo,
    };
    return props;
  };

  return Authorize;
};

export default WrapComponent;
