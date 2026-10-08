import axios from '@/utils/axios';
import { ApiResponse } from '@/apis/types/common';
import { Categories } from '@/types/categories';

const modelName = 'categories';

export const getCategoriesList = async (): Promise<ApiResponse<Categories[]>> => {
  const res = await axios.get(`/${modelName}`);
  return res.data;
};

export const createCategories = async (name: string): Promise<ApiResponse> => {
  const res = await axios.post(`/${modelName}`, { name });
  return res.data;
};

export const updateCategories = async (params: { category_id: number; name: string }): Promise<ApiResponse> => {
  const res = await axios.post(`/${modelName}/update`, params);
  return res.data;
};

export const deleteCategories = async (category_id: number): Promise<ApiResponse> => {
  const res = await axios.delete(`/${modelName}/${category_id}`);
  return res.data;
};
