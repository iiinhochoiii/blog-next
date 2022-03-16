import React from 'react';
import { observer } from 'mobx-react';
import useStores from '@/hooks/use-stores';
import { Modal } from '@/components/Organisms';
import { useForm } from 'react-hook-form';
import { Flex, Form, FormInput, FormSubmit, Box } from '@/components/Atom';
import { regExpEmail } from '@/utils/regExp';
import { Toaster } from '@/utils/common';

interface Props {
  onClose: () => void;
}
const FindPasswordDialog = observer((props: Props): JSX.Element => {
  const { onClose } = props;
  const { userStore } = useStores();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const checkEmail = async (data): Promise<void> => {
    try {
      const res = await userStore.checkId(data.email);
      // userStore.checkId 는 기존에, 회원 가입 할 때,
      // 중복 된 이메일이 있는지 확인하기 위한 api로
      // 회원가입 가능한 상태는 status = true, 아닐 때 flase
      // 여기서는 반대로, status값이 true라면 회원가입 가능한 상태이기에
      // 등록되지 않은 계정이고 false는 등록된 계정임
      if (res.status) {
        Toaster.showError('가입된 계정이 아닙니다. 이메일을 다시 확인해주세요.');
      } else {
        console.log('asd');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Modal onClose={onClose} title="비밀번호 찾기" width={600} height={400}>
      <Form onSubmit={handleSubmit(checkEmail)}>
        <Flex justify="space-between">
          <Box width="70%">
            <FormInput
              {...register('email', {
                required: {
                  value: true,
                  message: '이메일을 입력해주세요.',
                },
                pattern: {
                  value: regExpEmail,
                  message: '이메일 형식에 맞게 입력해주세요.',
                },
              })}
              error={errors.email}
              placeholder="이메일을 입력해주세요."
              width="100%"
              padding={{
                left: '10px',
                right: '10px',
              }}
            />
          </Box>
          <FormSubmit type="submit" value="확인" width="30%" />
        </Flex>
      </Form>
    </Modal>
  );
});

export default FindPasswordDialog;
