import React from 'react';
import { observer } from 'mobx-react';
import ContactComponent from '@/components/contact';
import useStores from '@/hooks/use-stores';
import { Toaster } from '@/utils/common';

const ContactContainer = observer((): JSX.Element => {
    const { contactStore } = useStores();

    const createContact = async (contact:{name:string, email:string, phone:string, message:string}): Promise<void> => {
        try {
            await contactStore.createContact(contact);
            Toaster.showSuccess('메세지가 전송되었습니다.');
        } catch (err) {
            Toaster.showError('메세지 전송에 실패하였습니다.');
        }
    }
    return (
        <ContactComponent 
            createContact={createContact}
        />
    );
});

export default ContactContainer;