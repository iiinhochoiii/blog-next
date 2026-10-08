import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Toaster } from '@/utils/common';
import { Categories } from '@/types/categories';

export const useUpdateCategoryForm = (category: Categories | undefined, updateCategory: (category_id: number, name: string) => void) => {
  const { register, handleSubmit, reset } = useForm<{ name: string }>();

  // 선택한 카테고리 이름으로 입력값 초기화
  useEffect(() => {
    if (category) {
      reset({
        name: category.name,
      });
    }
  }, [category]);

  const update = (data: { name: string }) => {
    const { name } = data;

    if (category?.category_id && name) {
      updateCategory(category?.category_id, name);
    } else {
      Toaster.showWarning('카테고리 이름을 입력해주세요.');
    }
  };

  return {
    register,
    onSubmit: handleSubmit(update),
  };
};
