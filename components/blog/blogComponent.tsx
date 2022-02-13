import React from 'react';
import { blogs, pageType } from '@/interfaces/models/blog';
import BlogHeader from './blogHeader';
import BlogContent from './blogContent';
import BlogPage from './blogPage';
import { Box, Background, HeaderText, Text } from '@/components/Atom';

interface Props {
  blogs: blogs[];
  title: any;
  loading: boolean;
  page?: pageType;
  pageNum?: string | string[];
}
const BlogComponent: React.FC<Props> = ({ blogs, page, title, loading, pageNum }) => {
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
      <Box width={980} margin={{ left: 'auto', right: 'auto' }} screen={1010}>
        <BlogHeader />
        <BlogContent blogs={blogs} loading={loading} />
        {!title && <BlogPage page={page} pageNum={pageNum} />}
      </Box>
    </Box>
  );
};

export default BlogComponent;
