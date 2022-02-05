import {action, observable,  makeObservable} from 'mobx';
import client from '@/lib/client';
import {contacts} from '@/interfaces/models/contact';
import qs from 'qs';

class ContactStore{
    constructor() {
		makeObservable(this);
    }

    @observable
    contacts: contacts[] = [];

    @action
    setContacts = (value: contacts[]): void => {
        this.contacts = value
    }

    createContact = async(contact:{name:string, email:string, phone:string, message:string}) =>{
        try {
            const res = await client.post('/api/contacts', qs.stringify({name:contact.name, email:contact.email, phone:contact.phone, message:contact.message}));
            
            return res.data
        } catch (err) {
            console.log(err)
        }
    }

    getContactList = async() =>{
        try {
            const res = await client.get('/api/contacts');

            return res.data;
        } catch (err) {
            console.log(err);
        }
    }

    deleteContact = async(contact_id:number) =>{
        try {
            await client.delete(`/api/contacts/${contact_id}`);
        } catch (err) {
            console.log(err);
        }
    }
}

export default ContactStore;