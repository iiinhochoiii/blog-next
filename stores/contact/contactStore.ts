import {action,  makeObservable} from 'mobx';
import BaseStore from '../BaseStore';
import client from '../../lib/client';
import qs from 'qs';

class ContactStore extends BaseStore{
    constructor() {
		super();
		makeObservable(this);
    }

    @action
    createContact = async(contact:{name:string, email:string, phone:string, message:string}) =>{
        this._init("CREATE_CONTACT");
        try{
            const res = await client.post('/api/contacts', qs.stringify({name:contact.name, email:contact.email, phone:contact.phone, message:contact.message}));
            if(res.data.status){
                this._success["CREATE_CONTACT"] = true;
            }
        } catch(e){
            this._failure["CREATE_CONTACT"] = [true, e];
        } finally{
            this._pending["CREATE_CONTACT"] = false;
        }
    }
}

export default ContactStore;