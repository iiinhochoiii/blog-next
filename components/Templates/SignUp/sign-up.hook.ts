import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { useCheckIdMutation, useCreateUserMutation } from '@/queries/user';
import { Toaster } from '@/utils/common';
import { regExpEmail } from '@/utils/regExp';
import { checkIdStatus as CheckIdStatus, SignUpForm } from '@/types/user';

export const useSignUp = () => {
  const router = useRouter();
  const [checkIdStatus, setCheckIdStatus] = useState<CheckIdStatus>();
  const { mutateAsync: checkId } = useCheckIdMutation();
  const { mutateAsync: createUserMutate } = useCreateUserMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<SignUpForm>();

  const onCheckEmail = async (): Promise<void> => {
    const form = watch();

    if (!regExpEmail.test(form.email)) {
      Toaster.showWarning('이메일을 정확히 입력해주세요.');
    } else {
      try {
        setCheckIdStatus(undefined);
        const res = await checkId(form.email);

        setCheckIdStatus(res);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const createUser = async (data: SignUpForm): Promise<void> => {
    const { email, password, name, phone } = data;
    if (checkIdStatus?.status) {
      try {
        await createUserMutate({ email, password, name, phone });
        Toaster.showSuccess('회원가입이 완료되었습니다.');
        router.push('/login');
      } catch (err) {
        console.log(err);
        Toaster.showError('회원가입에 실패하였습니다. 다시한번 시도 해주세요');
      }
    } else {
      Toaster.showError('이메일 중복확인이 되지 않았습니다.');
    }
  };

  return {
    register,
    errors,
    checkIdStatus,
    onCheckEmail,
    onSubmit: handleSubmit(createUser),
    validatePasswordConfirm: (value: string) => (value !== watch('password') ? '패스워드가 일치하지 않습니다.' : undefined),
  };
};
