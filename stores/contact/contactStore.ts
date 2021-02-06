import {action, observable, computed,  makeObservable} from 'mobx';
import BaseStore from '../BaseStore';
import client from '../../lib/client';
import {createContactStatus} from './types';
import qs from 'qs';

class ContactStore extends BaseStore{
    constructor() {
		super();
		makeObservable(this);
    }

    @observable
    _createContactStatus?:createContactStatus;

    @computed
    get createContactStatus(){
        return this._createContactStatus;
    }

    @action
    createContact = async(contact:{name:string, email:string, phone:string, message:string}) =>{
        this._init("CREATE_CONTACT");
        try{
            const res = await client.post('/api/contacts', qs.stringify({name:contact.name, email:contact.email, phone:contact.phone, message:contact.message}));
            this._createContactStatus = await res.data;
            this._success["CREATE_CONTACT"] = true;
        } catch(e){
            this._failure["CREATE_CONTACT"] = [true, e];
        } finally{
            this._pending["CREATE_CONTACT"] = false;
        }
    }
}

export default ContactStore;