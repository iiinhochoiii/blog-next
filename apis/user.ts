import axios from '@/utils/axios';
import { ApiResponse } from '@/apis/types/common';
import { checkIdStatus, UserInfo } from '@/types/user';

const modelName = 'users';

export const checkId = async (email: string): Promise<checkIdStatus> => {
  const res = await axios.post(`/${modelName}/checkId`, { email });
  return res.data;
};

export const createUser = async (params: { email: string; password: string; name: string; phone: string }): Promise<ApiResponse> => {
  const res = await axios.post(`/${modelName}`, params);
  return res.data;
};

export const getUser = async (id: number): Promise<UserInfo> => {
  const res = await axios.get(`/${modelName}/${id}`);
  return res.data.data;
};

export const sendMail = async (email: string): Promise<ApiResponse> => {
  const res = await axios.post(`/${modelName}/sendMail`, { email });
  return res.data;
};

export const verifyCertCode = async (params: { email: string; certificationCode: string }): Promise<ApiResponse> => {
  const res = await axios.post(`/${modelName}/verify-certCode`, params);
  return res.data;
};

export const updatePassword = async (params: { password: string; token?: string }): Promise<ApiResponse> => {
  const { password, token } = params;
  const res = await axios.post(
    `/${modelName}/update-password`,
    { password },
    {
      ...(token && {
        headers: {
          Authorization: `Token ${token}`,
        },
      }),
    },
  );
  return res.data;
};

export const verifyPassword = async (params: { id: number; password: string }): Promise<ApiResponse> => {
  const res = await axios.post(`/${modelName}/verify-password`, params);
  return res.data;
};

export const updateUserInfo = async (params: { id: number; name: string; phone: string }): Promise<ApiResponse<UserInfo>> => {
  const res = await axios.post(`/${modelName}/update-user`, params);
  return res.data;
};
