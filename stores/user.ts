import { action, observable, makeObservable } from 'mobx';
import { checkIdStatus, userData, UserInfo } from '@/interfaces/models/user';
import axios from '@/utils/axios';

class UserStore {
  protected modelName: string;

  constructor() {
    makeObservable(this);
    this.modelName = 'users';
  }

  @observable
  checkIdStatus?: checkIdStatus = undefined;

  @observable
  userData?: userData = undefined;

  @observable
  userInfo?: UserInfo = undefined;

  @action
  setUserInfo = (data?: UserInfo) => {
    this.userInfo = data;
  };

  @action
  setCheckIdStatus = (value: checkIdStatus | undefined) => {
    this.checkIdStatus = value;
  };

  @action
  setUserData = (value: userData | undefined) => {
    this.userData = value;
  };

  checkId = async (email: string) => {
    this.checkIdStatus = undefined;
    try {
      const res = await axios.post(`/${this.modelName}/checkId`, { email: email });
      // this.checkIdStatus = await res.data;
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  createUser = async (email: string, password: string, name: string, phone: string) => {
    try {
      await axios.post(`/${this.modelName}`, { email: email, password: password, name: name, phone: phone });
    } catch (err) {
      console.log(err);
    }
  };

  getUser = async (id: number) => {
    try {
      const res = await axios.get(`/${this.modelName}/${id}`);
      return res.data.data;
    } catch (err) {
      console.log(err);
    }
  };
}

export default UserStore;
