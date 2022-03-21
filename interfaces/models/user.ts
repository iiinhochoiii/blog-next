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

export interface UpdatePasswordForm {
  password: string;
  passwordConfirm: string;
}

export interface SignUpForm extends UpdatePasswordForm {
  email: string;
  name: string;
  phone: string;
}

export interface FindPasswordForm extends UpdatePasswordForm {
  email: string;
  certificationCode: string;
}

export interface UpdateUserForm {
  user_id: number;
  email: string;
  name: string;
  phone: string;
  password: string;
}
