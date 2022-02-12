import React from 'react';
import { blogs } from '@/interfaces/models/blog';
import { CircularProgress } from '@material-ui/core';
import Router from 'next/router';
import { Box, HeaderText, Button, Flex } from '@/components/Atom';
import { PostArticle } from '@/components/Organisms';

interface Props {
  blogs: blogs[];
  loading: boolean;
}
const LatestPosts: React.FC<Props> = ({ blogs, loading }) => {
  return (
    <Box margin={{ top: '100px' }} backgroundColor="rgb(248, 248, 248)">
      <Box padding={{ top: '50px', bottom: '100px' }} width={980} margin={{ left: 'auto', right: 'auto' }} screen={1010}>
        <Box>
          <HeaderText size={26} fontWeight={400} color="rgb(18, 184, 134)">
            Recently Posts
          </HeaderText>
        </Box>
        {loading ? (
          <CircularProgress />
        ) : (
          <Box margin={{ top: '20px' }}>
            {blogs.map(
              (item, index) =>
                index < 3 && (
                  <PostArticle
                    blog_id={item.blog_id}
                    title={item?.title}
                    summary={item?.summary}
                    blog_type={item?.blog_type}
                    created_at={item.created_at}
                    name={item?.name}
                  />
                ),
            )}
          </Box>
        )}
        <Flex margin={{ top: '30px' }}>
          <Button onClick={() => Router.push('/blog')} width={150} margin={{ left: 'auto' }}>
            더보기
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default LatestPosts;
