import {action, observable, computed, makeObservable} from 'mobx';
import {checkIdStatus, loginStatus} from './types';
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

    @observable
    _loginStatus?:loginStatus;

    @computed
    get checkIdStatus(){
        return this._checkIdStatus;
    }

    @computed
    get loginStatus(){
        return this._loginStatus;
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

    @action
    login = async(email:string, password:string) =>{
        this._init('LOGIN_COMPLETE');
        try{
            const res = await client.post('/api/auth/login', qs.stringify({email:email, password:password}));
            this._loginStatus = await res.data;
            this._success["LOGIN_COMPLETE"] = true;
        } catch(e){
            this._failure["LOGIN_COMPLETE"] = [true, e];
        } finally{
            this._pending["LOGIN_COMPLETE"] = false;
        }
    }
}

export default UserStore;
