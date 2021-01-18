import React from 'react';
import JoinComponent from '../../components/user/join';
import {inject, observer} from 'mobx-react';
import UserStore from '../../stores/users';

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
    render(){
        return(
            <JoinComponent 
                checkId={this.checkId}
                checkIdStatus={this.userStore.checkIdStatus}
            />
        );
    }
}

export default JoinContainer;