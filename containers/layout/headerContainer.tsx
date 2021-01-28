import React from 'react';
import Headers from '../../components/layout/header';
import {withCookies, ReactCookieProps} from 'react-cookie';
import UserStore from '../../stores/users';
import {inject, observer} from 'mobx-react';

interface Props extends ReactCookieProps{
    userStore?:UserStore;
}

@inject('userStore')
@observer
class HeaderContainer extends React.Component<Props>{
    state={
        auth:"",
        userData:{
            user_id:'',
            email:'',
            name:'',
            phone:'',
            profile_color:''
        }
    }
    private userStore = this.props.userStore as UserStore;
    private token = this.props.cookies?.get('uuid_token');

    async componentDidMount(){
        if(this.token){
            await this.userStore.getTokenData(this.token);
            this.setState({auth:this.token});
            if(this.userStore.userData?.status){
                if(!localStorage.getItem('auth')){
                    localStorage.setItem('auth', JSON.stringify(this.userStore.userData.data));
                }
                const storageData = JSON.parse(String(localStorage.getItem('auth')));
                this.setState({
                    userData:{
                        user_id:storageData.user_id,
                        email:storageData.storageData,
                        name:storageData.name,
                        phone:storageData.phone,
                        profile_color:storageData.profile_color
                    }
                })
            }
        }else{
            localStorage.removeItem('auth');
        }
    }

    logout = async() =>{
        this.props.cookies?.remove('uuid_token');
        localStorage.removeItem('auth');
        await this.userStore.logout();
        if(this.userStore.success["LOGOUT_COMPLETE"]){
            window.location.href="/";
        }
    }
    render(){
        return(
            <Headers 
                auth={this.state.auth}
                userData={this.state.userData}
                logout={this.logout}
            />
        );
    }
}

export default withCookies(HeaderContainer);