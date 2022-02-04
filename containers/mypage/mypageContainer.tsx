import React, {useState, useEffect} from 'react';
import {observer} from 'mobx-react';
import router from 'next/router';
import ContactComponent from '@/components/mypage';
import useStores from '@/hooks/use-stores';
import { Toaster } from '@/utils/common';

const MypageContainer = observer((): JSX.Element => {
    const {contactStore} = useStores();
    const [loading, setLoading] = useState(false) 

    useEffect(()=>{
        search()
    },[]);

    const search = async (): Promise<void> => {
        if(process.browser) {
            const user: any = localStorage.getItem('auth');

            if(user) {
                if(JSON.parse(user).user_id === 1) {
                    try {
                        setLoading(true);
                        const res = await contactStore.getContactList();
                        contactStore.setContacts(res.data);
                        setLoading(false);
                    } catch (err) {
                        setLoading(false);
                        console.log(false);
                    }
                } else {
                    router.push('/');
                }
            } else {
                router.push('/');
            }
        }
    };

    const deleteContact = async (contact_id: number): Promise<void> => {
        try {
            await contactStore.deleteContact(contact_id);
            Toaster.showSuccess('삭제 되었습니다.');
            search()
        } catch (err) {
            Toaster.showError('삭제하는 중 오류가 발생하였습니다. 데이터를 확인해주세요');
            console.log(err);
        }
    }

    return(
        <ContactComponent 
            contacts={contactStore.contacts}
            deleteContact={deleteContact}
            loading={loading}
        />
    );
});

export default MypageContainer;