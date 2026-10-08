import axios from '@/utils/axios';
import { ApiResponse } from '@/apis/types/common';
import { UserInfo } from '@/types/user';

const modelName = 'auth';

export const login = async (params: { email: string; password: string }): Promise<ApiResponse> => {
  const res = await axios.post(`/${modelName}/login`, params);
  return res.data;
};

// 토큰으로 사용자 정보 불러오기
export const getTokenData = async (token?: string): Promise<ApiResponse<UserInfo>> => {
  const res = await axios.post(`/${modelName}/user`, { token });
  return res.data;
};
