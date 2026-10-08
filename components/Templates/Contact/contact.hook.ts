import { useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { useUserStore } from '@/stores/user-store-provider';
import { useUserQuery } from '@/queries/user';
import { useCreateContactMutation } from '@/queries/contact';
import { Toaster } from '@/utils/common';
import { ContactForm } from '@/types/contact';

// 수신자를 지정하지 않으면 관리자(user_id: 1)에게 전송
const ADMIN_USER_ID = 1;

export const useContact = () => {
  const userInfo = useUserStore((state) => state.userInfo);
  const searchParams = useSearchParams();
  const receiver = searchParams.get('receiver');
  const receiverUserId = receiver ? Number(receiver) : ADMIN_USER_ID;
  const { data: receiverUser } = useUserQuery(receiverUserId);
  const { mutateAsync: createContact } = useCreateContactMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactForm>();

  // 수신자 미지정 안내는 진입 시 1회만 표시 (StrictMode 의 effect 이중 실행, userInfo 변경 시 중복 노출 방지)
  const warnedNoReceiverRef = useRef(false);
  useEffect(() => {
    if (receiver) {
      warnedNoReceiverRef.current = false;
    } else if (!warnedNoReceiverRef.current) {
      warnedNoReceiverRef.current = true;
      Toaster.showWarning('받는사람이 지정되어있지 않을 시, 관리자에게 전송 됩니다.');
    }
  }, [receiver]);

  // 로그인 상태면 보내는 사람 정보를 미리 채움
  useEffect(() => {
    if (userInfo) {
      reset({
        name: userInfo?.name,
        email: userInfo?.email,
        phone: userInfo?.phone,
      });
    }
  }, [userInfo]);

  const create = async (data: ContactForm): Promise<void> => {
    try {
      const params = {
        ...data,
        receiverUserId,
      };
      await createContact(params);

      Toaster.showSuccess('메세지가 전송되었습니다.');
      reset({
        message: '',
      });
    } catch (err) {
      console.log(err);
      Toaster.showError('메세지 전송에 실패하였습니다.');
    }
  };

  return {
    register,
    errors,
    onSubmit: handleSubmit(create),
    receiverEmail: receiverUser?.email,
    receiverName: receiver ? receiverUser?.name : '관리자',
  };
};
