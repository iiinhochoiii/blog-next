import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useCheckIdMutation, useSendMailMutation, useUpdatePasswordMutation, useVerifyCertCodeMutation } from '@/queries/user';
import { Toaster } from '@/utils/common';
import { FindPasswordForm } from '@/types/user';

// 비밀번호 찾기 단계: 이메일 확인 → 인증코드 전송 → 인증 → 비밀번호 변경
export const useFindPassword = (onClose: () => void) => {
  const { mutateAsync: checkId } = useCheckIdMutation();
  const { mutateAsync: sendMailMutate } = useSendMailMutation();
  const { mutateAsync: verifyCertCode } = useVerifyCertCodeMutation();
  const { mutateAsync: updatePasswordMutate } = useUpdatePasswordMutation();
  const [isEmailCheck, setIsEmailCheck] = useState(false);
  const [isSendMail, setIsSendMail] = useState(false);
  const [isSuccessCert, setIsSuccessCert] = useState(false);
  const [certToken, setCertToken] = useState<string>();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<FindPasswordForm>();

  const checkEmail = async (data: FindPasswordForm): Promise<void> => {
    try {
      if (isEmailCheck) {
        return;
      }
      const res = await checkId(data.email);
      // checkId 는 기존에, 회원 가입 할 때,
      // 중복 된 이메일이 있는지 확인하기 위한 api로
      // 회원가입 가능한 상태는 status = true, 아닐 때 flase
      // 여기서는 반대로, status값이 true라면 회원가입 가능한 상태이기에
      // 등록되지 않은 계정이고 false는 등록된 계정임
      if (res.status) {
        Toaster.showError('가입된 계정이 아닙니다. 이메일을 다시 확인해주세요.');
      } else {
        setIsEmailCheck(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const sendMail = async (): Promise<void> => {
    try {
      if (isEmailCheck) {
        const { email } = watch();
        const res = await sendMailMutate(email);

        if (res?.status) {
          setIsSendMail(true);
        } else {
          Toaster.showWarning(res?.message);
        }
      } else {
        Toaster.showWarning('이메일 확인이 되지않았습니다.');
      }
    } catch (err) {
      console.log(err);
    }
  };

  const verify = async (data: FindPasswordForm): Promise<void> => {
    try {
      const { email, certificationCode } = data;

      const res = await verifyCertCode({
        email: email,
        certificationCode: certificationCode,
      });

      if (res?.status) {
        setIsSuccessCert(true);
        setCertToken(res?.token);
      } else {
        Toaster.showWarning(res?.message || '인증번호가 맞지 않습니다. 다시 확인해주세요.');
      }
    } catch (err) {
      console.log(err);
    }
  };

  const doneAction = () => {
    setIsEmailCheck(false);
    setIsSendMail(false);
    setIsSuccessCert(false);
    reset({
      email: '',
      certificationCode: '',
      password: '',
      passwordConfirm: '',
    });
  };

  const updatePassword = async (data: FindPasswordForm): Promise<void> => {
    try {
      const { password } = data;

      const res = await updatePasswordMutate({ password, token: certToken });
      if (res?.status) {
        doneAction();
        onClose();
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
    isEmailCheck,
    isSendMail,
    isSuccessCert,
    onCheckEmail: handleSubmit(checkEmail),
    onSendMail: sendMail,
    onVerify: handleSubmit(verify),
    onUpdatePassword: handleSubmit(updatePassword),
    validatePasswordConfirm: (value: string) => (value !== watch('password') ? '패스워드가 일치하지 않습니다.' : undefined),
    onCloseModal: () => {
      onClose();
      doneAction();
    },
  };
};
