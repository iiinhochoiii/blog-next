import axios from '@/utils/axios';
import { ApiResponse } from '@/apis/types/common';
import { contacts } from '@/types/contact';

const modelName = 'contacts';

export const createContact = async (params: { name: string; email: string; phone: string; message: string; receiverUserId: number }): Promise<ApiResponse> => {
  const res = await axios.post(`/${modelName}`, params);
  return res.data;
};

export const getContactList = async (): Promise<ApiResponse<contacts[]>> => {
  const res = await axios.get(`/${modelName}`);
  return res.data;
};

export const deleteContact = async (contact_id: number): Promise<void> => {
  await axios.delete(`/${modelName}/${contact_id}`);
};
