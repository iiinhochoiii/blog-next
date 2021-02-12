import React from 'react';
import {inject, observer} from 'mobx-react';
import ContactStore from '../../stores/contact';
import ContactComponent from '../../components/contact';

interface Props{
    contactStore?:ContactStore;
}

@inject('contactStore')
@observer
class ContactContainer extends React.Component<Props>{
    private contactStore = this.props.contactStore as ContactStore;
    createContact = async(contact:{name:string, email:string, phone:string, message:string}) =>{
        await this.contactStore.createContact(contact);
        alert(this.contactStore.createContactStatus?.msg);
        if(this.contactStore.createContactStatus?.status){
            location.reload();
        }
       
     }

    render(){
        return(
            <ContactComponent 
                 createContact={this.createContact}
            />
        );
    }
}

export default ContactContainer;