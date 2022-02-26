import React from 'react';
import BaseTemplates from '@/components/Layout/BaseTemplates';
import BlogContainer from '@/containers/blog/blogContainer';
import { useRouter } from 'next/router';
import authorize from '@/hoc/authorize';

const Blog = authorize(() => {
  const router = useRouter();
  const query = router.query;
  return (
    <BaseTemplates title="blog">
      <BlogContainer title={query.title} page={query.page} />
    </BaseTemplates>
  );
});

export default Blog;
