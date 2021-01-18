import {action, observable, computed, makeObservable} from 'mobx';
import {checkIdStatus} from './types';
import BaseStore from '../BaseStore';
import qs from 'qs';
import client from '../../lib/client';

class UserStore extends BaseStore{
    constructor() {
		super();
		makeObservable(this);
    }
    
    @observable
    _checkIdStatus?:checkIdStatus;

    @computed
    get checkIdStatus(){
        return this._checkIdStatus;
    }

    @action
    initUserInfo = () =>{
        this._checkIdStatus = undefined;
    }

    @action
    checkId = async(email:string) =>{
        this._checkIdStatus = undefined;
        this._init('CHECK_EMAIL_COMPLETE');
        try{
            const res = await client.post('/api/users/checkId', qs.stringify({email:email}));
            this._checkIdStatus = await res.data;
            this._success["CHECK_EMAIL_COMPLETE"] = true;
        } catch(e){
            this._failure["CHECK_EMAIL_COMPLETE"] = [true, e];
        } finally{
            this._pending["CHECK_EMAIL_COMPLETE"] = false;
        }
    }

    @action
    createUser = async(email:string, password:string, name:string, phone:string) =>{
        this._init('CREATE_USER');
        try{
            const res = await client.post('/api/users', qs.stringify({email:email, password:password, name:name, phone:phone}));
            if(res.data.status){
                this._success["CREATE_USER"] = true;
            }
        } catch(e){
            this._failure["CREATE_USER"] = [true ,e];
        } finally{
            this._pending["CREATE_USER"] = false;
        }
    }
}

export default UserStore;
