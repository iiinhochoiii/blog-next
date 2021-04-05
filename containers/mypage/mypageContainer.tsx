import React from 'react';
import {inject, observer} from 'mobx-react';
import ContactStore from '../../stores/contact';
import router from 'next/router';
import ContactComponent from '../../components/mypage';

interface Props{
    contactStore?:ContactStore;
}

@inject('contactStore')
@observer
class MypageContainer extends React.Component<Props>{
    state={
        loading:true
    }
    private contactStore = this.props.contactStore as ContactStore;
    async componentDidMount(){
        if(process.browser){
            const user:any = localStorage.getItem('auth');

            if(user){      
              if(JSON.parse(user).user_id === 1){
                this.setState({loading:true});
                await this.contactStore.getContactList();
                if(this.contactStore.success["READ_CONTACT"]){
                  this.setState({loading:false});
                }
              }
              else{
                router.push('/');
              }
            } else{
                router.push('/');
            }
        }
    }

    deleteContact = async(contact_id:number) =>{
        await this.contactStore.deleteContact(contact_id);
        if(this.contactStore.success["DELETE_CONTACT"]){
            alert("삭제 되었습니다.");
            await this.contactStore.getContactList();
        }
    }
    render(){
        return(
            <ContactComponent 
                contacts={this.contactStore.contacts}
                deleteContact={this.deleteContact}
                loading={this.state.loading}
            />
        );
    }
}

export default MypageContainer;