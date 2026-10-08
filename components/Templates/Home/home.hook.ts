import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useBlogListQuery } from '@/queries/blog';
import { Toaster } from '@/utils/common';

// 홈에 노출할 최근 게시글 수
const RECENT_POST_COUNT = 3;

export const useHome = () => {
  const router = useRouter();
  const { data, isLoading, isError } = useBlogListQuery({ page: 1 });

  useEffect(() => {
    if (isError) {
      Toaster.showError('정보를 불러오는중 에러가 발생하였습니다.');
    }
  }, [isError]);

  return {
    isLoading,
    recentBlogs: data?.data?.slice(0, RECENT_POST_COUNT) ?? [],
    onClickMore: () => router.push('/blog'),
  };
};
