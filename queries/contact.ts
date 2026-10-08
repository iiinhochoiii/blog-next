import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import * as contactApi from '@/apis/contact';
import { contactKeys } from './keys';

export { contactKeys };

export const useContactListQuery = () =>
  useQuery({
    queryKey: contactKeys.all,
    queryFn: contactApi.getContactList,
  });

// 본인에게 보낸 메세지는 받은 메세지 목록에도 노출되므로 생성 시에도 무효화
export const useCreateContactMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: contactApi.createContact,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: contactKeys.all }),
  });
};

export const useDeleteContactMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: contactApi.deleteContact,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: contactKeys.all }),
  });
};
