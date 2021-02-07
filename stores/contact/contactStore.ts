import {action, observable, computed,  makeObservable} from 'mobx';
import BaseStore from '../BaseStore';
import client from '../../lib/client';
import {createContactStatus, contacts} from './types';
import qs from 'qs';
import { ClickAwayListener } from '@material-ui/core';

class ContactStore extends BaseStore{
    constructor() {
		super();
		makeObservable(this);
    }

    @observable
    _createContactStatus?:createContactStatus;

    @observable
    _contacts: contacts[] = [];

    @computed
    get createContactStatus(){
        return this._createContactStatus;
    }

    @computed
    get contacts(){
        return this._contacts;
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

    @action
    getContactList = async() =>{
        this._init("READ_CONTACT");
        try{
            const res = await client.get('/api/contacts');
            if(res.data.status){
                this._contacts = await res.data.data;
                this._success["READ_CONTACT"] = true;                
            }
        } catch(e){
            this._failure["READ_CONTACT"] = [true, e];
        } finally{
            this._pending["READ_CONTACT"] = false;
        }
    }

    @action
    deleteContact = async(contact_id:number) =>{
        this._init("DELETE_CONTACT");
        try{
            const res = await client.delete(`/api/contacts/${contact_id}`);
            if(res.data.status){
                this._success["DELETE_CONTACT"] = true;
            }
        } catch(e){
            this._failure["DELETE_CONTACT"] = [true, e];
        } finally{
            this._pending["DELETE_CONTACT"] = false;
        }
    }
}

export default ContactStore;