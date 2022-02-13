import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { blogs } from '@/interfaces/models/blog';
import { Box } from '@/components/Atom';
import { PostArticle } from '@/components/Organisms';
import { EmptyDataBox } from '@/components/Molecules';

interface Props {
  blogs: blogs[];
  loading: boolean;
}
const BlogContent: React.FC<Props> = ({ blogs, loading }) => {
  return (
    <Box margin={{ top: '10px', bottom: '30px' }} style={{ minHeight: '60vh' }}>
      {loading ? (
        <CircularProgress />
      ) : blogs.length > 0 ? (
        <Box>
          {blogs.map((item) => (
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
  );
};

export default BlogContent;
