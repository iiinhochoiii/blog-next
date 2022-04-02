import React from 'react';
import { observer } from 'mobx-react';
import { Toaster } from '@/utils/common';
import { Box, HeaderText, Form, FormInput, FormSubmit, Flex, Table } from '@/components/Atom';
import { useForm } from 'react-hook-form';

const MypageCategoryComponent = observer((): JSX.Element => {
  const { register, handleSubmit } = useForm<{ category?: string }>();

  const createCategory = (data: { category?: string }) => {
    const { category } = data;

    if (category) {
      console.log(category);
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
                <th>등록일</th>
                <th>변경</th>
                <th>삭제</th>
              </tr>
            </thead>
          </Table>
        </Box>
      </Box>
    </Box>
  );
});

export default MypageCategoryComponent;
