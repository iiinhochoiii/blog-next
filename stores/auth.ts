import axios from '@/utils/axios';

class AuthStore {
  protected modelName: string;

  constructor() {
    this.modelName = 'auth';
  }

  login = async (email: string, password: string) => {
    try {
      const res = await axios.post(`/${this.modelName}/login`, { email: email, password: password });
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  // 토근으로 사용자 정보 불러오기
  getTokenData = async (token?: string) => {
    try {
      const res = await axios.post(`/${this.modelName}/user`, { token: token });

      return res.data;
    } catch (err) {
      console.log(err);
    }
  };
}

export default AuthStore;
