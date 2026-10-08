'use client';

import { Box, Background, HeaderText, Text, Flex } from '@/components/Atom';
import { Pagination } from '@/components/Organisms';
import { EmptyDataBox, SearchForm } from '@/components/Molecules';
import { PostArticle } from '@/components/Organisms';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useBlogList } from './blog.hook';

const BlogComponent = (): JSX.Element => {
  const { title, paging, setPaging, onSearch, isLoading, blogs, page } = useBlogList();

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
          <SearchForm onSubmit={onSearch} />
        </Flex>

        <Box margin={{ top: '10px', bottom: '30px' }} style={{ minHeight: '60vh' }}>
          {isLoading ? (
            <CircularProgress />
          ) : blogs.length > 0 ? (
            <Box>
              {blogs.map((item) => (
                <PostArticle key={item?.blog_id} blog={item} abled={true} />
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

export default BlogComponent;
