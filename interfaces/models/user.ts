export type checkIdStatus = {
  status: boolean;
  massage: string;
};

export type userData = {
  status: boolean;
  data: {
    name?: string;
    message?: string;
    user_id?: number;
    email?: string;
    phone?: string;
    profile_color?: string;
    iat?: number;
    exp?: number;
  };
};

export interface UserInfo {
  user_id?: number | string;
  email?: string;
  name?: string;
  phone?: string;
}

export interface LoginForm {
  email: string;
  password: string;
}
