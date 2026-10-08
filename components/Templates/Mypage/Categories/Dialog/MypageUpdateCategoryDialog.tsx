import { Modal } from '@/components/Organisms';
import { Flex, Form, FormInput, FormSubmit } from '@/components/Atom';
import { Categories } from '@/types/categories';
import { useUpdateCategoryForm } from './update-category.hook';

interface Props {
  onClose: () => void;
  category?: Categories;
  updateCategory: (category_id: number, name: string) => void;
}

const MypageUpdateCategoryDialog = (props: Props) => {
  const { onClose, category, updateCategory } = props;
  const { register, onSubmit } = useUpdateCategoryForm(category, updateCategory);

  return (
    <Modal title="카테고리 변경" onClose={onClose} height={300}>
      <Form onSubmit={onSubmit}>
        <Flex justify="space-between">
          <FormInput {...register('name')} width="65%" height={45} padding={{ left: '5px', right: '5px' }} />
          <FormSubmit type="submit" value="변경" width="30%" radius={5} />
        </Flex>
      </Form>
    </Modal>
  );
};

export default MypageUpdateCategoryDialog;
