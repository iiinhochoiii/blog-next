import React from 'react';
import BaseTemplates from '@/components/Layout/BaseTemplates';
import { useRouter } from 'next/router';
import authorize from '@/hoc/authorize';
import { BlogComponent } from '@/components/Templates';

const Blog = authorize(() => {
  const router = useRouter();
  const query = router.query;
  return (
    <BaseTemplates title="blog">
      <BlogComponent title={query.title} page={query.page} />
    </BaseTemplates>
  );
});

export default Blog;
