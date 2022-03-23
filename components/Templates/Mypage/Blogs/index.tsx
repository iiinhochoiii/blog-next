import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react';
import useStores from '@/hooks/use-stores';
import { Pagination, PostArticle } from '@/components/Organisms';
import { EmptyDataBox } from '@/components/Molecules';
import { Box, HeaderText } from '@/components/Atom';
import { Toaster } from '@/utils/common';

const MypageBlogComponent = observer(() => {
  const { blogStore, userStore } = useStores();
  const [paging, setPaging] = useState(1);

  useEffect(() => {
    blogStore.setBlogs([]);
    if (userStore.userInfo?.user_id) {
      initBlog();
    }
  }, [userStore.userInfo, paging]);

  const initBlog = async () => {
    try {
      const params = {
        page: paging,
        userId: String(userStore.userInfo?.user_id),
      };

      const res = await blogStore.getSearchBlogList(params);
      blogStore.setBlogs(res.data);
      blogStore.setPage(res.page);
    } catch (err) {
      Toaster.showWarning('블로그를 불러오는 중 오류가 발생하였습니다.');
    }
  };
  return (
    <Box style={{ minHeight: '100vh' }} width={'70%'} screen={{ size: 1010, calc: '0px' }}>
      <HeaderText size={22} fontWeight={400} color="rgb(18, 184, 134)">
        내가 쓴 글 보기
      </HeaderText>
      {blogStore.blogs?.length > 0 ? (
        <Box>
          {blogStore.blogs.map((item) => (
            <PostArticle
              key={item?.blog_id}
              blog_id={item?.blog_id}
              title={item?.title}
              summary={item?.summary}
              blog_type={item?.blog_type}
              created_at={item.created_at}
              name={item?.name}
              user_id={item?.user_id}
            />
          ))}
          <Box margin={{ top: '20px' }}>
            <Pagination page={blogStore.page} pageNum={paging} setPaging={setPaging} />
          </Box>
        </Box>
      ) : (
        <EmptyDataBox>작성된 게시글이 없습니다.</EmptyDataBox>
      )}
    </Box>
  );
});

export default MypageBlogComponent;
