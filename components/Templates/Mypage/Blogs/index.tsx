'use client';

import { Pagination, PostArticle } from '@/components/Organisms';
import { EmptyDataBox } from '@/components/Molecules';
import { Box, HeaderText } from '@/components/Atom';
import { useMypageBlogs } from './blogs.hook';

const MypageBlogComponent = () => {
  const { blogs, page, paging, setPaging } = useMypageBlogs();

  return (
    <Box style={{ minHeight: '100vh' }} width={'70%'} screen={{ size: 1010, calc: '0px' }}>
      <HeaderText size={22} fontWeight={400} color="rgb(18, 184, 134)">
        내가 쓴 글 보기
      </HeaderText>
      {blogs.length > 0 ? (
        <Box>
          {blogs.map((item) => (
            <PostArticle key={item?.blog_id} blog={item} abled={true} />
          ))}
          <Box margin={{ top: '20px' }}>
            <Pagination page={page} pageNum={paging} setPaging={setPaging} />
          </Box>
        </Box>
      ) : (
        <EmptyDataBox>작성된 게시글이 없습니다.</EmptyDataBox>
      )}
    </Box>
  );
};

export default MypageBlogComponent;
