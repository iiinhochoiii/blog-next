import { action, observable, makeObservable } from 'mobx';
import { checkIdStatus, userData, UserInfo } from '@/interfaces/models/user';
import { getToken, setToken, removeToken } from '@/utils/auth';
import axios from '@/utils/axios';

class UserStore {
  constructor() {
    makeObservable(this);
  }

  @observable
  checkIdStatus?: checkIdStatus = undefined;

  @observable
  userData?: userData = undefined;

  @observable
  userInfo?: UserInfo = undefined;

  @observable
  token?: string = getToken();

  @action
  setUserInfo = (data?: UserInfo) => {
    this.userInfo = data;
  };

  @action
  setToken = (token?: string) => {
    if (token) {
      setToken(token);
    } else {
      removeToken();
    }
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
      const res = await axios.post('/api/users/checkId', { email: email });
      // this.checkIdStatus = await res.data;
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  createUser = async (email: string, password: string, name: string, phone: string) => {
    try {
      await axios.post('/api/users', { email: email, password: password, name: name, phone: phone });
    } catch (err) {
      console.log(err);
    }
  };

  login = async (email: string, password: string) => {
    try {
      const res = await axios.post('/api/auth/login', { email: email, password: password });
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  // 토근으로 사용자 정보 불러오기
  getTokenData = async (token?: string) => {
    try {
      const res = await axios.post('/api/auth/user', { token: token });

      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  getUser = async (id: number) => {
    try {
      const res = await axios.get(`/api/users/${id}`);
      return res.data.data;
    } catch (err) {
      console.log(err);
    }
  };
}

export default UserStore;
