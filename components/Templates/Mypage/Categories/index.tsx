import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import useStores from '@/hooks/use-stores';
import { Toaster } from '@/utils/common';
import { Box, HeaderText, Form, FormInput, FormSubmit, Flex, Table } from '@/components/Atom';
import { useForm } from 'react-hook-form';

const MypageCategoriesComponent = observer((): JSX.Element => {
  const { categoriesStore } = useStores();
  const { register, handleSubmit, reset } = useForm<{ category?: string }>();

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async (): Promise<void> => {
    try {
      const res = await categoriesStore.getCategoriesList();
      if (res?.status) {
        categoriesStore.setCategories(res.data);
      }
    } catch (err) {
      console.log(err);
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
        console.log(err?.response);
        Toaster.showError(err?.response?.data?.message || '오류가 발생하였습니다.');
      }
    } else {
      Toaster.showError('카테고리를 입력해주세요.');
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
                  <td>변경</td>
                  <td>삭제</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Box>
      </Box>
    </Box>
  );
});

export default MypageCategoriesComponent;
