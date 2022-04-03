import React, { useEffect } from 'react';
import { Modal } from '@/components/Organisms';
import { Flex, Form, FormInput, FormSubmit } from '@/components/Atom';
import { Categories } from '@/interfaces/models/categories';
import { useForm } from 'react-hook-form';
import { Toaster } from '@/utils/common';

interface Props {
  onClose: () => void;
  category?: Categories;
  updateCategory: (category_id: number, name: string) => void;
}

const MypageUpdateCategoryDialog = (props: Props) => {
  const { onClose, category, updateCategory } = props;
  const { register, handleSubmit, reset } = useForm<{ name: string }>();

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

  return (
    <Modal title="카테고리 변경" onClose={onClose} height={300}>
      <Form onSubmit={handleSubmit(update)}>
        <Flex justify="space-between">
          <FormInput {...register('name')} width="65%" height={45} padding={{ left: '5px', right: '5px' }} />
          <FormSubmit type="submit" value="변경" width="30%" radius={5} />
        </Flex>
      </Form>
    </Modal>
  );
};

export default MypageUpdateCategoryDialog;
