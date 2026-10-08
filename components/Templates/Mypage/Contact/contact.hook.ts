import { useEffect, useState } from 'react';
import { useContactListQuery, useDeleteContactMutation } from '@/queries/contact';
import { Toaster } from '@/utils/common';
import { contacts } from '@/types/contact';

export const useMypageContact = () => {
  const { data, isLoading, error } = useContactListQuery();
  const { mutateAsync: deleteContactMutate } = useDeleteContactMutation();
  const [contact, setContact] = useState<contacts>();
  const [showContactModal, setShowContactModal] = useState(false);

  useEffect(() => {
    if (error) {
      console.log(error);
    }
  }, [error]);

  const onDelete = async (contact_id: number): Promise<void> => {
    try {
      if (window.confirm('삭제하시겠습니까?')) {
        await deleteContactMutate(contact_id);
        Toaster.showSuccess('삭제 되었습니다.');

        if (showContactModal) {
          setShowContactModal(false);
        }
      }
    } catch (err) {
      Toaster.showError('삭제하는 중 오류가 발생하였습니다. 데이터를 확인해주세요');
      console.log(err);
    }
  };

  const onOpenContact = (item: contacts) => {
    setContact(item);
    setShowContactModal(true);
  };

  return {
    isLoading,
    contactList: data?.data ?? [],
    contact,
    showContactModal,
    onOpenContact,
    onCloseContact: () => setShowContactModal(false),
    onDelete,
  };
};
