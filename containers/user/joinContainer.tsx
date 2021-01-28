import React from 'react';
import JoinComponent from '../../components/user/join';
import {inject, observer} from 'mobx-react';
import UserStore from '../../stores/users';
import router from 'next/router';

interface Props{
    userStore?:UserStore;
}

@inject('userStore')
@observer
class JoinContainer extends React.Component<Props>{
    private userStore = this.props.userStore as UserStore;

    componentDidMount(){
        this.userStore.initUserInfo();
    }
    
    checkId = async (email:string) =>{
        await this.userStore.checkId(email);
    }

    createUser = async(email:string, password:string, name:string, phone:string) =>{
        await this.userStore.createUser(email, password, name, phone);
        if(this.userStore.success["CREATE_USER"]){
            alert('회원가입이 완료되었습니다.');
            router.push('/adminlogin');
        }
    }
    render(){
        return(
            <JoinComponent 
                checkId={this.checkId}
                checkIdStatus={this.userStore.checkIdStatus}
                createUser={this.createUser}
            />
        );
    }
}

export default JoinContainer;