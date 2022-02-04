import React, {useEffect} from 'react';
import JoinComponent from '@/components/user/join';
import { observer } from 'mobx-react';
import router from 'next/router';
import useStores from '@/hooks/use-stores';
import {Toaster} from '@/utils/common';

const JoinContainer = observer(():JSX.Element=> {
    const { userStore } = useStores()

    useEffect(()=>{
        userStore.setCheckIdStatus(undefined);
    },[]);

    const checkId = async (email: string) => {
        try {
            const res = await userStore.checkId(email);

            userStore.setCheckIdStatus(res);
        } catch (err) {
            console.log(err)
        }
    }

    const createUser = async(email:string, password:string, name:string, phone:string) =>{
        try {
            await userStore.createUser(email, password, name, phone);
            Toaster.showSuccess('회원가입이 완료되었습니다.');
            router.push('/adminlogin');
        } catch (err) {
            console.log(err);
            Toaster.showError('회원가입에 실패하였습니다. 다시한번 시도 해주세요');
        }
    }

    return(
        <JoinComponent 
            checkId={checkId}
            checkIdStatus={userStore.checkIdStatus}
            createUser={createUser}
        />
    );
});

export default JoinContainer;