import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { useUserStore } from '@/stores/user-store-provider';
import { useUserQuery } from '@/queries/user';
import { useCreateContactMutation } from '@/queries/contact';
import { Toaster } from '@/utils/common';
import { ContactForm } from '@/types/contact';

// 수신자를 지정하지 않으면 운영자(user_id: 1)에게 전송 (헤더 Contact 메뉴로 진입한 사이트 문의)
const ADMIN_USER_ID = 1;
const ADMIN_NAME = 'Choi Tech 운영자';

export const useContact = () => {
  const userInfo = useUserStore((state) => state.userInfo);
  const searchParams = useSearchParams();
  const receiver = searchParams.get('receiver');
  const receiverUserId = receiver ? Number(receiver) : ADMIN_USER_ID;
  // 수신자 미지정 = 운영자 문의, 지정 = 특정 작성자에게 메세지
  const isAdminContact = !receiver;
  const { data: receiverUser } = useUserQuery(receiverUserId);
  // 로그인한 사용자 본인에게 보내는 경우 (전송 차단)
  const isSelf = !isAdminContact && userInfo?.user_id !== undefined && String(userInfo.user_id) === String(receiverUserId);
  const { mutateAsync: createContact } = useCreateContactMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactForm>();

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
    if (isSelf) {
      Toaster.showWarning('본인에게는 메세지를 보낼 수 없습니다.');
      return;
    }
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
    isAdminContact,
    isSelf,
    receiverName: isAdminContact ? ADMIN_NAME : receiverUser?.name,
    // 이메일은 운영자 문의일 때만 노출 (작성자 이메일은 공개하지 않음)
    adminEmail: isAdminContact ? receiverUser?.email : undefined,
    authorBlogPath: isAdminContact ? undefined : `/blog/${receiverUserId}?page=1`,
  };
};
