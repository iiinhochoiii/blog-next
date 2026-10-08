import { useForm } from 'react-hook-form';
import { useUpdatePasswordMutation } from '@/queries/user';
import { Toaster } from '@/utils/common';
import { UpdatePasswordForm } from '@/types/user';

export const useMypageUpdatePassword = (onClose: () => void) => {
  const { mutateAsync: updatePasswordMutate } = useUpdatePasswordMutation();

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

      const res = await updatePasswordMutate({ password });
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

  return {
    register,
    errors,
    onSubmit: handleSubmit(updatePassword),
    validatePasswordConfirm: (value: string) => (value !== watch('password') ? '패스워드가 일치하지 않습니다.' : undefined),
  };
};
