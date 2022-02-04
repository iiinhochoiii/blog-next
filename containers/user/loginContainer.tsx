import React from 'react';
import LoginComponent from '@/components/user/login';
import { observer } from 'mobx-react';
import {ReactCookieProps, withCookies} from 'react-cookie';
import router from 'next/router';
import useStores from '@/hooks/use-stores';
import {Toaster} from '@/utils/common';

interface Props extends ReactCookieProps{}

const LoginContainer = observer((props: Props):JSX.Element=> {
    const { userStore } = useStores();

    const login = async(email:string, password:string) =>{
        const { cookies } = props;
        try {
            const res = await userStore.login(email, password);
            if (res.status) {
                cookies?.set("uuid_token", res?.token)
                router.push('/');
            } else {
                Toaster.showWarning(res?.msg)
            }
        } catch (err) {
            console.log(err);
            Toaster.showError('로그인 API 요청 실패 하였습니다. 다시 요청 해주세요');
        }
    }
    return(
        <LoginComponent 
            login={login}
        />
    );
})
export default withCookies(LoginContainer);