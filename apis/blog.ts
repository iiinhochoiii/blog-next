import axios from '@/utils/axios';
import { ApiResponse } from '@/apis/types/common';
import { blogs } from '@/types/blog';

const modelName = 'blogs';

export interface BlogSearchParams {
  title?: string;
  page: number;
  userId?: string;
  showStatus?: boolean;
}

export const getSearchBlogList = async (params: BlogSearchParams): Promise<ApiResponse<blogs[]>> => {
  const { page, title, userId, showStatus } = params;

  let query = `page=${page || 1}`;
  if (title) {
    query = query + `&title=${title}`;
  }
  if (showStatus) {
    query = query + `&showStatus=${showStatus}`;
  }

  const url = userId ? `/${modelName}/${userId}/search?` : `/${modelName}/search?`;
  const res = await axios.get(`${url}${query}`);
  return res.data;
};

export const getBlogItem = async (blog_id: number): Promise<ApiResponse<blogs>> => {
  const res = await axios.get(`/${modelName}/read/${blog_id}`);
  return res.data;
};

export interface BlogPayload {
  title: string;
  summary: string;
  content: string;
  category_id: number;
  markdown: string;
}

export const createBlog = async (params: BlogPayload): Promise<ApiResponse> => {
  const res = await axios.post(`/${modelName}`, params);
  return res.data;
};

export const updateBlog = async (params: BlogPayload & { blog_id: number }): Promise<ApiResponse> => {
  const res = await axios.post(`/${modelName}/update`, params);
  return res.data;
};

export const deleteBlog = async (blog_id: number): Promise<ApiResponse> => {
  const res = await axios.delete(`/${modelName}/${blog_id}`);
  return res.data;
};

export const hideBlog = async (params: { blog_id: number; hideStatus: boolean }): Promise<ApiResponse> => {
  const res = await axios.post(`/${modelName}/hide`, params);
  return res.data;
};
