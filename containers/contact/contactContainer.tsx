import React from 'react';
import { observer } from 'mobx-react';
import ContactComponent from '../../components/contact';
import useStores from '../../hooks/use-stores';



const ContactContainer = observer((): JSX.Element => {
    const { contactStore } = useStores();

    const createContact = async (contact:{name:string, email:string, phone:string, message:string}): Promise<void> => {
        try {
            const res = await contactStore.createContact(contact);
            alert(res?.msg);
            if(res?.status) {
                location.reload();
            }
        } catch (err) {
            console.log(err);
            alert('보내기에 실패하였습니다. 다시 시도해주세요.');
        }
    }
    return (
        <ContactComponent 
            createContact={createContact}
        />
    );
});

export default ContactContainer;