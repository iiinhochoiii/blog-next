import React, { useState, useEffect } from 'react';
import { blogs, pageType } from '@/interfaces/models/blog';
import BlogHeader from './blogHeader';
import BlogContent from './blogContent';
import { Box, Background, HeaderText, Text } from '@/components/Atom';
import { Pagination } from '@/components/Organisms';
import { useRouter } from 'next/router';

interface Props {
  blogs: blogs[];
  title: any;
  loading: boolean;
  page?: pageType;
  pageNum?: number;
}

const BlogComponent: React.FC<Props> = (props: Props) => {
  const router = useRouter();
  const { blogs, page, title, loading, pageNum } = props;
  const [paging, setPaging] = useState(pageNum || 1);

  useEffect(() => {
    router.push({
      pathname: '/blog',
      query: {
        page: paging,
      },
    });
    scrollTo(0, 0);
  }, [paging]);

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
        <BlogHeader />
        <BlogContent blogs={blogs} loading={loading} />
        {!title && <Pagination page={page} pageNum={paging} setPaging={setPaging} />}
      </Box>
    </Box>
  );
};

export default BlogComponent;
