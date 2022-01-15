import React, {useState, useEffect} from 'react';
import Headers from '../../components/layout/header';
import {withCookies, ReactCookieProps} from 'react-cookie';
import UserStore from '../../stores/users';
import {inject, observer} from 'mobx-react';
import useStores from '../../hooks/use-stores';

interface Props extends ReactCookieProps{}

const HeaderContainer = observer((props: Props):JSX.Element=>{
    const { cookies } = props
    const { userStore } = useStores();
    const [auth, setAuth] = useState(false);
    const [userData, setUserData] = useState({
        user_id: '',
        email: '',
        name: '',
        phone: '',
        profile_color: ''
    })
    
    const token = cookies?.get('uuid_token');

    useEffect(()=> {
        getUserInfo()
    },[]);

    const getUserInfo = async (): Promise<void> => {
        if(process.browser){
            if(localStorage.getItem('auth')){
                setAuth(true);
                const storageData = JSON.parse(String(localStorage.getItem('auth')));
                setUserData({
                    user_id:storageData.user_id,
                    email:storageData.email,
                    name:storageData.name,
                    phone:storageData.phone,
                    profile_color:storageData.profile_color
                })
            }
            else{
                const res = await userStore.getTokenData(token);

                if(res.status){
                    localStorage.setItem('auth', JSON.stringify(res.data));
                    location.reload();
                }
            }
        }
        if(!token){
            localStorage.removeItem('auth');
            setAuth(false);
        }
    }

    const  logout = () =>{
        cookies?.remove('uuid_token');
        localStorage.removeItem('auth');
        window.location.href="/";
    }

    return(
        <Headers 
            auth={auth}
            userData={userData}
            logout={logout}
        />
    );
});

export default withCookies(HeaderContainer);