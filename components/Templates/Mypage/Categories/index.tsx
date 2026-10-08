'use client';

import { Box, HeaderText, Form, FormInput, FormSubmit, Flex, Table, Text } from '@/components/Atom';
import MypageUpdateCategoryDialog from './Dialog/MypageUpdateCategoryDialog';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useMypageCategories } from './categories.hook';

const MypageCategoriesComponent = (): JSX.Element => {
  const {
    isLoading,
    categories,
    register,
    onCreateCategory,
    onDeleteCategory,
    category,
    showUpdateCategoryModal,
    onOpenUpdateCategory,
    onCloseUpdateCategory,
    onUpdateCategory,
  } = useMypageCategories();

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <Box style={{ minHeight: '100vh' }} width={'70%'} screen={{ size: 1010, calc: '0px' }}>
      <HeaderText size={22} fontWeight={400} color="rgb(18, 184, 134)">
        카테고리 설정
      </HeaderText>
      <Box margin={{ top: '20px' }}>
        <Form onSubmit={onCreateCategory}>
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
              {categories.length > 0 ? (
                categories.map((category, index) => (
                  <tr key={category.category_id}>
                    <td>{index + 1}</td>
                    <td>{category.name}</td>
                    <td>{category.blog_count}개</td>
                    <td>
                      <Text textAlign="center" size={14} style={{ cursor: 'pointer' }} onClick={() => onOpenUpdateCategory(category)}>
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
                            onDeleteCategory(category.category_id);
                          }
                        }}
                      >
                        {category.blog_count === 0 ? '삭제' : '삭제 불가능'}
                      </Text>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5}>등록된 카테고리가 없습니다.</td>
                </tr>
              )}
            </tbody>
          </Table>
        </Box>
      </Box>
      {showUpdateCategoryModal && <MypageUpdateCategoryDialog onClose={onCloseUpdateCategory} category={category} updateCategory={onUpdateCategory} />}
    </Box>
  );
};

export default MypageCategoriesComponent;
