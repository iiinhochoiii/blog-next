import Cookies from 'js-cookie';
import moment from 'moment';

const tokenName = 'uuid_token';

export const getToken = () => {
  return Cookies.get(tokenName);
};

export const setToken = (token: string) => {
  const expires = moment().add(8, 'hour').toDate();
  return Cookies.set(tokenName, token, { sameSite: 'None', secure: true, expires });
};

export const removeToken = () => {
  return Cookies.remove(tokenName);
};
