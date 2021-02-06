import React from 'react';
import AboutComponent from '../../components/about';
import {inject, observer} from 'mobx-react';
import ContactStore from '../../stores/contact';

interface Props{
    contactStore?:ContactStore;
}

@inject('contactStore')
@observer
class AboutContainer extends React.Component<Props>{
    private contactStore = this.props.contactStore as ContactStore;

    createContact = async(contact:{name:string, email:string, phone:string, message:string}) =>{
       await this.contactStore.createContact(contact);
       if(this.contactStore.success["CREATE_CONTACT"]){
           alert("메세지가 전송되었습니다.");
           location.reload();
       }
    }
    render(){
        return(
            <AboutComponent 
                createContact={this.createContact}
            />
        );
    }
}

export default AboutContainer;