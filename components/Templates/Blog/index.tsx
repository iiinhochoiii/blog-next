'use client';

import styled from 'styled-components';
import { Box, Background, HeaderText, Text, Flex, Button, Skeleton } from '@/components/Atom';
import { Pagination } from '@/components/Organisms';
import { EmptyDataBox, SearchForm } from '@/components/Molecules';
import { PostArticle, PostArticleSkeleton } from '@/components/Organisms';
import { useBlogList } from './blog.hook';

const BlogComponent = (): JSX.Element => {
  const {
    isUserBlog,
    bannerTitle,
    isBannerTitleLoading,
    canSendMessage,
    onSendMessage,
    title,
    paging,
    setPaging,
    onSearch,
    isLoading,
    skeletonCount,
    blogs,
    page,
  } = useBlogList();

  return (
    <Box>
      <Background url={'/images/blog_background.jpg'} background="no-repeat center" position="relative">
        <Box
          position="absolute"
          backgroundColor="rgba(0, 0, 0, 0.3)"
          textAlign="center"
          padding={{ top: '100px' }}
          style={{ top: 0, bottom: 0, left: 0, right: 0 }}
        >
          {isBannerTitleLoading ? (
            <StyledTitleSkeletonBox role="status" aria-label="작성자 정보를 불러오는 중">
              <Skeleton tone="light" width={280} height={44} />
            </StyledTitleSkeletonBox>
          ) : (
            <HeaderText textAlign="center" size={42}>
              {bannerTitle}
            </HeaderText>
          )}
          <Text margin={{ top: '20px' }} size={18} color={'#ffffff'} fontWeight={'bold'} textAlign="center" screen={{ width: 690, size: 16 }}>
            This is a personal blog created to document your development knowledge.
          </Text>
          {title && (
            <Text margin={{ top: '20px' }} size={18} color={'#ffffff'} fontWeight={'bold'} textAlign="center" screen={{ width: 690, size: 16 }}>
              keyword: {title}
            </Text>
          )}
        </Box>
      </Background>
      <Box width={980} margin={{ left: 'auto', right: 'auto' }} screen={{ size: 1010, calc: '30px' }}>
        <Flex justify="space-between" margin={{ top: '20px' }} screen={{ width: 690, flexWrap: 'wrap' }}>
          <Box style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <HeaderText size={26} fontWeight={400} color="rgb(18, 184, 134)">
              Related Posts
            </HeaderText>
            {canSendMessage && (
              <Button onClick={onSendMessage} width={110} height={34} size={14} radius={5}>
                메세지 보내기
              </Button>
            )}
          </Box>
          <SearchForm onSubmit={onSearch} />
        </Flex>

        <Box margin={{ top: '10px', bottom: '30px' }} style={{ minHeight: '60vh' }}>
          {isLoading ? (
            <Box role="status" aria-label="게시글을 불러오는 중">
              {Array.from({ length: skeletonCount }, (_, index) => (
                <PostArticleSkeleton key={index} />
              ))}
            </Box>
          ) : blogs.length > 0 ? (
            <Box>
              {blogs.map((item) => (
                <PostArticle key={item?.blog_id} blog={item} authorAction={isUserBlog ? 'none' : 'link'} />
              ))}
            </Box>
          ) : (
            <EmptyDataBox>작성된 게시글이 없습니다.</EmptyDataBox>
          )}
        </Box>
        <Pagination page={page} pageNum={paging} setPaging={setPaging} />
      </Box>
    </Box>
  );
};

// 배너 제목(HeaderText 42px / 690px 이하 24px)과 같은 높이(61px / 35px)를 차지해 이름 로딩 후 레이아웃이 흔들리지 않게 함
// (margin 대신 고정 높이 + 가운데 정렬로 다음 요소와의 margin collapse 를 피함)
const StyledTitleSkeletonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 61px;

  @media screen and (max-width: 690px) {
    height: 35px;

    & > div {
      width: 180px;
      height: 26px;
    }
  }
`;

export default BlogComponent;
