import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import useStores from '@/hooks/use-stores';
import { Toaster } from '@/utils/common';
import { Box, HeaderText, Form, FormInput, FormSubmit, Flex, Table, Text } from '@/components/Atom';
import { useForm } from 'react-hook-form';
import { Categories } from '@/interfaces/models/categories';
import MypageUpdateCategoryDialog from './Dialog/MypageUpdateCategoryDialog';

const MypageCategoriesComponent = observer((): JSX.Element => {
  const { categoriesStore } = useStores();
  const { register, handleSubmit, reset } = useForm<{ category?: string }>();
  const [showUpdateCategoryModal, setShowUpdateCategoryModal] = useState(false);
  const [category, setCategory] = useState<Categories>();

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async (): Promise<void> => {
    try {
      const res = await categoriesStore.getCategoriesList();
      if (res?.status) {
        categoriesStore.setCategories(res.data);
      }
    } catch (err: any) {
      console.log(err);
      Toaster.showError(err?.response?.data?.message || '오류가 발생하였습니다.');
    }
  };

  const createCategory = async (data: { category?: string }): Promise<void> => {
    const { category } = data;

    if (category) {
      try {
        const res = await categoriesStore.createCategories(category);
        if (res?.status) {
          Toaster.showSuccess(res?.message || '등록 되었습니다.');
          getCategories();
          reset({
            category: '',
          });
        }
      } catch (err: any) {
        console.log(err);
        Toaster.showError(err?.response?.data?.message || '오류가 발생하였습니다.');
      }
    } else {
      Toaster.showError('카테고리를 입력해주세요.');
    }
  };

  const updateCategory = async (category_id: number, name: string): Promise<void> => {
    try {
      const params = {
        category_id: category_id,
        name: name,
      };
      const res = await categoriesStore.updateCategories(params);
      if (res?.status) {
        Toaster.showSuccess(res?.message || '변경 되었습니다.');
        getCategories();
        setShowUpdateCategoryModal(false);
      }
    } catch (err: any) {
      console.log(err);
      Toaster.showError(err?.response?.data?.message || '오류가 발생하였습니다.');
    }
  };

  const deleteBlog = async (category_id: number): Promise<void> => {
    const findCategory = categoriesStore.categories.find((category) => category.category_id === category_id);

    if (findCategory?.blog_count === 0) {
      if (window.confirm('카테고리를 삭제하시겠습니까?')) {
        try {
          const res = await categoriesStore.deleteCategories(category_id);
          if (res?.status) {
            Toaster.showSuccess(res?.message || '변경 되었습니다.');
            getCategories();
          }
        } catch (err: any) {
          console.log(err);
          Toaster.showError(err?.response?.data?.message || '오류가 발생하였습니다.');
        }
      }
    } else {
      Toaster.showWarning('해당 카테고리로 등록된 게시글이 있어, 삭제를 할 수 없습니다.');
    }
  };

  return (
    <Box style={{ minHeight: '100vh' }} width={'70%'} screen={{ size: 1010, calc: '0px' }}>
      <HeaderText size={22} fontWeight={400} color="rgb(18, 184, 134)">
        카테고리 설정
      </HeaderText>
      <Box margin={{ top: '20px' }}>
        <Form onSubmit={handleSubmit(createCategory)}>
          <Flex justify="space-between">
            <FormInput {...register('category')} placeholder="카테고리를 입력해주세요." width="70%" height={45} padding={{ left: '5px', right: '5px' }} />
            <FormSubmit type="submit" value="등록" width="25%" radius={5} />
          </Flex>
        </Form>

        <Box margin={{ top: '30px' }}>
          <Table>
            <thead>
              <tr>
                <th>번호</th>
                <th>카테고리 명</th>
                <th>게시글 수</th>
                <th>변경</th>
                <th>삭제</th>
              </tr>
            </thead>
            <tbody>
              {categoriesStore.categories.map((category, index) => (
                <tr key={category.category_id}>
                  <td>{index + 1}</td>
                  <td>{category.name}</td>
                  <td>{category.blog_count}개</td>
                  <td>
                    <Text
                      textAlign="center"
                      size={14}
                      style={{ cursor: 'pointer' }}
                      onClick={() => {
                        setCategory(category);
                        setShowUpdateCategoryModal(true);
                      }}
                    >
                      변경
                    </Text>
                  </td>
                  <td>
                    <Text
                      textAlign="center"
                      size={14}
                      style={category.blog_count === 0 ? { cursor: 'pointer' } : { color: '#ff0000' }}
                      onClick={() => {
                        if (category.blog_count === 0) {
                          deleteBlog(category.category_id);
                        }
                      }}
                    >
                      {category.blog_count === 0 ? '삭제' : '삭제 불가능'}
                    </Text>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Box>
      </Box>
      {showUpdateCategoryModal && (
        <MypageUpdateCategoryDialog
          onClose={() => setShowUpdateCategoryModal(false)}
          category={category}
          updateCategory={(category_id: number, name: string) => updateCategory(category_id, name)}
        />
      )}
    </Box>
  );
});

export default MypageCategoriesComponent;
