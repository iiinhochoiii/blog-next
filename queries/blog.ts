import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import * as blogApi from '@/apis/blog';
import { BlogSearchParams } from '@/apis/blog';
import { blogKeys, categoriesKeys } from './keys';

export { blogKeys };

export const useBlogListQuery = (params: BlogSearchParams, options?: { enabled?: boolean }) =>
  useQuery({
    queryKey: blogKeys.list(params),
    queryFn: () => blogApi.getSearchBlogList(params),
    enabled: options?.enabled,
  });

export const useBlogItemQuery = (blog_id: number, options?: { enabled?: boolean }) =>
  useQuery({
    queryKey: blogKeys.detail(blog_id),
    queryFn: () => blogApi.getBlogItem(blog_id),
    enabled: options?.enabled,
  });

// 블로그 생성/수정/삭제/숨김 시 블로그 목록·상세와 카테고리별 게시글 수(blog_count)가 바뀌므로 함께 무효화
const useInvalidateBlogs = () => {
  const queryClient = useQueryClient();
  return () => Promise.all([queryClient.invalidateQueries({ queryKey: blogKeys.all }), queryClient.invalidateQueries({ queryKey: categoriesKeys.all })]);
};

export const useCreateBlogMutation = () => {
  const invalidate = useInvalidateBlogs();
  return useMutation({ mutationFn: blogApi.createBlog, onSuccess: invalidate });
};

export const useUpdateBlogMutation = () => {
  const invalidate = useInvalidateBlogs();
  return useMutation({ mutationFn: blogApi.updateBlog, onSuccess: invalidate });
};

export const useDeleteBlogMutation = () => {
  const invalidate = useInvalidateBlogs();
  return useMutation({ mutationFn: blogApi.deleteBlog, onSuccess: invalidate });
};

export const useHideBlogMutation = () => {
  const invalidate = useInvalidateBlogs();
  return useMutation({ mutationFn: blogApi.hideBlog, onSuccess: invalidate });
};
