import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useCategoriesQuery, useCreateCategoriesMutation, useDeleteCategoriesMutation, useUpdateCategoriesMutation } from '@/queries/categories';
import { getErrorMessage, Toaster } from '@/utils/common';
import { Categories } from '@/types/categories';

export const useMypageCategories = () => {
  const { data, isLoading, error } = useCategoriesQuery();
  const { mutateAsync: createCategories } = useCreateCategoriesMutation();
  const { mutateAsync: updateCategories } = useUpdateCategoriesMutation();
  const { mutateAsync: deleteCategories } = useDeleteCategoriesMutation();
  const { register, handleSubmit, reset } = useForm<{ category?: string }>();
  const [showUpdateCategoryModal, setShowUpdateCategoryModal] = useState(false);
  const [category, setCategory] = useState<Categories>();
  const categories = data?.status ? data.data : [];

  useEffect(() => {
    if (error) {
      console.log(error);
      Toaster.showError(getErrorMessage(error) || '오류가 발생하였습니다.');
    }
  }, [error]);

  const createCategory = async (data: { category?: string }): Promise<void> => {
    const { category } = data;

    if (category) {
      try {
        const res = await createCategories(category);
        if (res?.status) {
          Toaster.showSuccess(res?.message || '등록 되었습니다.');
          reset({
            category: '',
          });
        }
      } catch (err) {
        console.log(err);
        Toaster.showError(getErrorMessage(err) || '오류가 발생하였습니다.');
      }
    } else {
      Toaster.showError('카테고리를 입력해주세요.');
    }
  };

  const onUpdateCategory = async (category_id: number, name: string): Promise<void> => {
    try {
      const params = {
        category_id: category_id,
        name: name,
      };
      const res = await updateCategories(params);
      if (res?.status) {
        Toaster.showSuccess(res?.message || '변경 되었습니다.');
        setShowUpdateCategoryModal(false);
      }
    } catch (err) {
      console.log(err);
      Toaster.showError(getErrorMessage(err) || '오류가 발생하였습니다.');
    }
  };

  // 게시글이 등록된 카테고리는 삭제할 수 없음
  const onDeleteCategory = async (category_id: number): Promise<void> => {
    const findCategory = categories.find((category) => category.category_id === category_id);

    if (findCategory?.blog_count === 0) {
      if (window.confirm('카테고리를 삭제하시겠습니까?')) {
        try {
          const res = await deleteCategories(category_id);
          if (res?.status) {
            Toaster.showSuccess(res?.message || '변경 되었습니다.');
          }
        } catch (err) {
          console.log(err);
          Toaster.showError(getErrorMessage(err) || '오류가 발생하였습니다.');
        }
      }
    } else {
      Toaster.showWarning('해당 카테고리로 등록된 게시글이 있어, 삭제를 할 수 없습니다.');
    }
  };

  const onOpenUpdateCategory = (item: Categories) => {
    setCategory(item);
    setShowUpdateCategoryModal(true);
  };

  return {
    isLoading,
    categories,
    register,
    onCreateCategory: handleSubmit(createCategory),
    onDeleteCategory,
    category,
    showUpdateCategoryModal,
    onOpenUpdateCategory,
    onCloseUpdateCategory: () => setShowUpdateCategoryModal(false),
    onUpdateCategory,
  };
};
