import { useEffect, SetStateAction } from 'react';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { useBlogListQuery } from '@/queries/blog';
import { Toaster } from '@/utils/common';

export const useBlogList = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { userId } = useParams<{ userId?: string }>() ?? {};
  const title = searchParams.get('title') ?? undefined;
  // 현재 페이지는 URL(?page=) 을 단일 기준으로 사용 (Blog 메뉴 재클릭, 뒤로가기 시에도 URL 과 일치)
  const paging = Number(searchParams.get('page')) || 1;
  const basePath = userId ? `/blog/${userId}` : '/blog';

  const {
    data: blogList,
    isLoading,
    isError,
  } = useBlogListQuery({
    page: paging,
    ...(title && { title: String(title) }),
    ...(userId && { userId: String(userId) }),
  });

  useEffect(() => {
    if (isError) {
      Toaster.showWarning('블로그를 불러오는 중 오류가 발생하였습니다.');
    }
  }, [isError]);

  const setPaging = (value: SetStateAction<number>) => {
    const nextPage = typeof value === 'function' ? value(paging) : value;
    const query = new URLSearchParams({ page: String(nextPage), ...(title && { title }) });
    router.push(`${basePath}?${query}`);
    scrollTo(0, 0);
  };

  const onSearch = (value?: string) => {
    const query = new URLSearchParams({ page: '1', ...(value && { title: value }) });
    router.push(`${basePath}?${query}`);
  };

  return {
    title,
    paging,
    setPaging,
    onSearch,
    isLoading,
    blogs: blogList?.data ?? [],
    page: blogList?.page,
  };
};
