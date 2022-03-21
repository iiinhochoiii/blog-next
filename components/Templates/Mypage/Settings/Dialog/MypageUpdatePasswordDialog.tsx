import React from 'react';
import { observer } from 'mobx-react';
import useStores from '@/hooks/use-stores';
import { Modal } from '@/components/Organisms';
import { Form, FormInput, FormSubmit, Text } from '@/components/Atom';
import { useForm } from 'react-hook-form';
import { regPassword } from '@/utils/regExp';
import { Toaster } from '@/utils/common';
import { UpdatePasswordForm } from '@/interfaces/models/user';

interface Props {
  onClose: () => void;
}

const MypageUpdatePasswordDialog = observer((props: Props) => {
  const { onClose } = props;
  const { userStore } = useStores();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<UpdatePasswordForm>();

  const updatePassword = async (data: UpdatePasswordForm): Promise<void> => {
    try {
      const { password } = data;

      const res = await userStore.updatePassowrd(password);
      if (res?.status) {
        onClose();
        reset({
          password: '',
          passwordConfirm: '',
        });
        Toaster.showSuccess(res?.message || '비밀번호가 변경 되었습니다.');
      }
    } catch (err) {
      console.log(err);
      Toaster.showError('비밀번호가 변경되지 않았습니다. 다시 시도해주세요.');
    }
  };

  return (
    <Modal title="비밀번호 변경" onClose={onClose} width={600} height={400}>
      <Form onSubmit={handleSubmit(updatePassword)}>
        <Text size={12} margin={{ top: '10px', bottom: '5px' }}>
          비밀번호
        </Text>
        <FormInput
          type="password"
          placeholder="비밀번호를 입력해 주세요."
          padding={{ left: '10px', right: '10px' }}
          {...register('password', {
            required: {
              value: true,
              message: '비밀번호를 입력해주세요.',
            },
            pattern: {
              value: regPassword,
              message: '영문, 숫자, 특수문자를 포함한 8자리 이상을 입력해주세요.',
            },
          })}
          error={errors.password}
        />

        <Text size={12} margin={{ top: '10px', bottom: '5px' }}>
          비밀번호 확인
        </Text>
        <FormInput
          type="password"
          placeholder="비밀번호 확인"
          padding={{ left: '10px', right: '10px' }}
          {...register('passwordConfirm', {
            required: {
              value: true,
              message: '비밀번호 확인을 입력해주세요.',
            },
            validate: (value) => {
              if (value !== watch('password')) {
                return '패스워드가 일치하지 않습니다.';
              }
            },
          })}
          error={errors.passwordConfirm}
        />
        <FormSubmit type="submit" value="변경" margin={{ top: '20px' }} radius={5} />
      </Form>
    </Modal>
  );
});

export default MypageUpdatePasswordDialog;
