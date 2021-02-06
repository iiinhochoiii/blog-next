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
       alert(this.contactStore.createContactStatus?.msg);
       if(this.contactStore.createContactStatus?.status){
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