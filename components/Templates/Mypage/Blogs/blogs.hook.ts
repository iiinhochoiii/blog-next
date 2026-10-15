import { useEffect, useState } from 'react';
import { useBlogListQuery } from '@/queries/blog';
import { useUserStore } from '@/stores/user-store-provider';
import { Toaster } from '@/utils/common';
import { BLOG_PAGE_SIZE } from '@/apis/blog';

export const useMypageBlogs = () => {
  const userId = useUserStore((state) => state.userInfo?.user_id);
  const [paging, setPaging] = useState(1);

  const {
    data: blogList,
    isLoading,
    error,
  } = useBlogListQuery(
    {
      page: paging,
      userId: String(userId),
      showStatus: true,
    },
    { enabled: !!userId },
  );

  useEffect(() => {
    if (error) {
      console.log(error);
      Toaster.showWarning('블로그를 불러오는 중 오류가 발생하였습니다.');
    }
  }, [error]);

  return {
    isLoading,
    skeletonCount: BLOG_PAGE_SIZE,
    blogs: blogList?.data ?? [],
    page: blogList?.page,
    paging,
    setPaging,
  };
};
