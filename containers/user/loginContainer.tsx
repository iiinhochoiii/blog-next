import React from 'react';
import LoginComponent from '../../components/user/login';
import UserStore from '../../stores/users';
import {inject, observer} from 'mobx-react';
import {ReactCookieProps, withCookies} from 'react-cookie';

interface Props extends ReactCookieProps{
    userStore?:UserStore;
}

@inject('userStore')
@observer
class LoginContainer extends React.Component<Props>{
    private userStore = this.props.userStore as UserStore;

    login = async(email:string, password:string) =>{
        await this.userStore.login(email, password);
        if(this.userStore.loginStatus?.status){
            this.props.cookies?.set("uuid_token", this.userStore.loginStatus.token);
        }
        else{
            alert(this.userStore.loginStatus?.msg);
        }
    }
    render(){
        return(
            <LoginComponent 
                login={this.login}
            />
        );
    }
}

export default withCookies(LoginContainer);