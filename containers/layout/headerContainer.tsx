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
        auth:false,
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
        if(process.browser){
           if(localStorage.getItem('auth')){
               this.setState({auth:true});
               const storageData = JSON.parse(String(localStorage.getItem('auth')));
                this.setState({
                            userData:{
                                user_id:storageData.user_id,
                                email:storageData.email,
                                name:storageData.name,
                                phone:storageData.phone,
                                profile_color:storageData.profile_color
                            }
                        })
           }
           else{
               await this.userStore.getTokenData(this.token);
               if(this.userStore.userData?.status){
                    localStorage.setItem('auth', JSON.stringify(this.userStore.userData.data));
                    location.reload();
               }
           }
        }
        if(!this.token){
            localStorage.removeItem('auth');
            this.setState({auth:false});
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