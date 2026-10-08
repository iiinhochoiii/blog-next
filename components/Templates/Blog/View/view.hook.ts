import { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Prism from 'prismjs';
import { useBlogItemQuery, useHideBlogMutation } from '@/queries/blog';
import { useUserStore } from '@/stores/user-store-provider';
import { Toaster } from '@/utils/common';

export const useBlogView = () => {
  const router = useRouter();
  const { id: blog_id } = useParams<{ id: string }>();
  const userInfo = useUserStore((state) => state.userInfo);
  const { data, isError } = useBlogItemQuery(Number(blog_id), { enabled: !!blog_id });
  const { mutateAsync: hideBlog } = useHideBlogMutation();
  const blogItem = data?.status ? data.data : undefined;

  useEffect(() => {
    if (data && !data.status) {
      Toaster.showError(data.message);
    }
  }, [data]);

  useEffect(() => {
    if (isError) {
      Toaster.showError('데이터를 불러오는 중 에러가 발생하였습니다.');
    }
  }, [isError]);

  // 본문 코드 블록 하이라이팅 (렌더링마다 적용)
  useEffect(() => {
    Prism.highlightAll();
  });

  const onHide = async () => {
    if (window.confirm('숨김 처리 하시겠습니까?')) {
      try {
        const params = {
          blog_id: Number(blog_id),
          hideStatus: true,
        };
        const res = await hideBlog(params);
        if (res?.status) {
          Toaster.showSuccess('숨김 처리 되었습니다. 숨김 상태는 마이페이지에서 확인할 수 있습니다.');
          router.back();
        }
      } catch (err) {
        Toaster.showError('숨김처리 중 에러가 발생하였습니다.');
      }
    }
  };

  const onUpdate = () => {
    router.push(`/blog/update?blog_id=${blogItem?.blog_id}`);
  };

  return {
    blogItem,
    isOwner: !!blogItem && blogItem.user_id === userInfo?.user_id,
    onHide,
    onUpdate,
  };
};
