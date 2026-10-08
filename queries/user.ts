import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import * as userApi from '@/apis/user';
import * as authApi from '@/apis/auth';
import { blogKeys, userKeys } from './keys';

export { userKeys };

export const useUserQuery = (id: number, options?: { enabled?: boolean }) =>
  useQuery({
    queryKey: userKeys.detail(id),
    queryFn: () => userApi.getUser(id),
    enabled: options?.enabled,
  });

export const useLoginMutation = () => useMutation({ mutationFn: authApi.login });

export const useCheckIdMutation = () => useMutation({ mutationFn: userApi.checkId });

export const useCreateUserMutation = () => useMutation({ mutationFn: userApi.createUser });

export const useSendMailMutation = () => useMutation({ mutationFn: userApi.sendMail });

export const useVerifyCertCodeMutation = () => useMutation({ mutationFn: userApi.verifyCertCode });

export const useUpdatePasswordMutation = () => useMutation({ mutationFn: userApi.updatePassword });

export const useVerifyPasswordMutation = () => useMutation({ mutationFn: userApi.verifyPassword });

// 사용자 이름은 사용자 정보(Contact 수신자 등)와 블로그 목록/상세의 작성자명으로 노출되므로 함께 무효화
export const useUpdateUserInfoMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: userApi.updateUserInfo,
    onSuccess: () => Promise.all([queryClient.invalidateQueries({ queryKey: userKeys.all }), queryClient.invalidateQueries({ queryKey: blogKeys.all })]),
  });
};
