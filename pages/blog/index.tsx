import React from 'react';
import BaseTemplate from '@/components/template/base';
import BlogContainer from '@/containers/blog/blogContainer';
import { useRouter } from 'next/router';
import authorize from '@/hoc/authorize';

const Blog = authorize(() => {
  const router = useRouter();
  const query = router.query;
  return (
    <BaseTemplate title="blog">
      <BlogContainer title={query.title} page={query.page} />
    </BaseTemplate>
  );
});

export default Blog;
