import { useEffect, SetStateAction } from 'react';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { useBlogListQuery } from '@/queries/blog';
import { useUserQuery } from '@/queries/user';
import { useUserStore } from '@/stores/user-store-provider';
import { Toaster } from '@/utils/common';
import { BLOG_PAGE_SIZE } from '@/apis/blog';

export const useBlogList = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { userId } = useParams<{ userId?: string }>() ?? {};
  const title = searchParams.get('title') ?? undefined;
  // 현재 페이지는 URL(?page=) 을 단일 기준으로 사용 (Blog 메뉴 재클릭, 뒤로가기 시에도 URL 과 일치)
  const paging = Number(searchParams.get('page')) || 1;
  const basePath = userId ? `/blog/${userId}` : '/blog';
  const loginUserId = useUserStore((state) => state.userInfo?.user_id);
  // 작성자별 목록이면 배너 제목에 쓸 작성자 정보 조회
  const { data: author, isLoading: isAuthorLoading } = useUserQuery(Number(userId), { enabled: !!userId });

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
    // 작성자별 목록(/blog/{userId}) 여부
    isUserBlog: !!userId,
    // 배너 제목: 전체 목록은 'Blog', 작성자별 목록은 '{작성자}'s Blog' (조회 실패 시 'Blog')
    bannerTitle: author?.name ? `${author.name}'s Blog` : 'Blog',
    isBannerTitleLoading: !!userId && isAuthorLoading,
    // 작성자별 목록에서, 본인 목록이 아닐 때만 작성자에게 메세지 보내기 노출
    canSendMessage: !!userId && String(loginUserId) !== String(userId),
    onSendMessage: () => router.push(`/contact?receiver=${userId}`),
    title,
    paging,
    setPaging,
    onSearch,
    isLoading,
    skeletonCount: BLOG_PAGE_SIZE,
    blogs: blogList?.data ?? [],
    page: blogList?.page,
  };
};
