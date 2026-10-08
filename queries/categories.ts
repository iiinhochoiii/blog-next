import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import * as categoriesApi from '@/apis/categories';
import { blogKeys, categoriesKeys } from './keys';

export { categoriesKeys };

export const useCategoriesQuery = () =>
  useQuery({
    queryKey: categoriesKeys.all,
    queryFn: categoriesApi.getCategoriesList,
  });

export const useCreateCategoriesMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: categoriesApi.createCategories,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: categoriesKeys.all }),
  });
};

// 카테고리명은 블로그 목록/상세의 blog_type 으로 노출되므로 블로그 캐시도 함께 무효화
export const useUpdateCategoriesMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: categoriesApi.updateCategories,
    onSuccess: () => Promise.all([queryClient.invalidateQueries({ queryKey: categoriesKeys.all }), queryClient.invalidateQueries({ queryKey: blogKeys.all })]),
  });
};

// 게시글이 없는 카테고리만 삭제 가능하므로 블로그 캐시에는 영향 없음
export const useDeleteCategoriesMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: categoriesApi.deleteCategories,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: categoriesKeys.all }),
  });
};
