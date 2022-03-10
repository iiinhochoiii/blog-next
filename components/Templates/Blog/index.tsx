import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react';
import useStores from '@/hooks/use-stores';
import { Toaster } from '@/utils/common';
import { Box, Background, HeaderText, Text, Flex } from '@/components/Atom';
import { Pagination } from '@/components/Organisms';
import { useRouter } from 'next/router';
import { EmptyDataBox, SearchForm } from '@/components/Molecules';
import { PostArticle } from '@/components/Organisms';
import CircularProgress from '@material-ui/core/CircularProgress';

const BlogComponent = observer((): JSX.Element => {
  const router = useRouter();
  const { title, page, isMyBlog } = router.query;
  const { blogStore } = useStores();
  const [loading, setLoading] = useState(false);
  const [paging, setPaging] = useState(Number(page) || 1);
  const [isBlogState, setIsBlogState] = useState(false); // 내가 쓴 글 보기

  useEffect(() => {
    initBlog();
  }, [title, page, isMyBlog]);

  useEffect(() => {
    router.push({
      pathname: '/blog',
      query: {
        page: paging,
        ...(title && { title: title }),
        ...(isMyBlog && { isMyBlog: isMyBlog }),
      },
    });
    scrollTo(0, 0);
  }, [paging]);

  const initBlog = async () => {
    try {
      setLoading(true);

      const params = {
        page: String(page),
        ...(title && { title: String(title) }),
        ...(isMyBlog && { isMyBlog: Boolean(isMyBlog) }),
      };
      const res = await blogStore.getSearchBlogList(params);
      blogStore.setBlogs(res.data);
      blogStore.setPage(res.page);

      setLoading(false);
    } catch (err) {
      Toaster.showWarning('블로그를 불러오는 중 오류가 발생하였습니다.');
    }
  };

  const search = (value?: string) => {
    setPaging(1);
    router.push({
      pathname: '/blog',
      query: {
        page: 1,
        ...(value && { title: value }),
        ...(isBlogState && { isMyBlog: isBlogState }),
      },
    });
  };

  return (
    <Box>
      <Background url={'./images/blog_background.jpg'} background="no-repeat center" position="relative">
        <Box
          position="absolute"
          backgroundColor="rgba(0, 0, 0, 0.3)"
          textAlign="center"
          padding={{ top: '100px' }}
          style={{ top: 0, bottom: 0, left: 0, right: 0 }}
        >
          <HeaderText textAlign="center" size={42}>
            Blog
          </HeaderText>
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
          <HeaderText size={26} fontWeight={400} color="rgb(18, 184, 134)">
            Related Posts
          </HeaderText>
          <SearchForm onSubmit={(value?: string) => search(value)} />
        </Flex>
        <input type="checkbox" onChange={() => setIsBlogState(!isBlogState)} />
        <label>내가 쓴 글 보기</label>

        <Box margin={{ top: '10px', bottom: '30px' }} style={{ minHeight: '60vh' }}>
          {loading ? (
            <CircularProgress />
          ) : blogStore.blogs?.length > 0 ? (
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
                />
              ))}
            </Box>
          ) : (
            <EmptyDataBox>작성된 게시글이 없습니다.</EmptyDataBox>
          )}
        </Box>
        <Pagination page={blogStore.page} pageNum={paging} setPaging={setPaging} />
      </Box>
    </Box>
  );
});

export default BlogComponent;
