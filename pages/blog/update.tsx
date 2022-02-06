import React from 'react';
import BaseTemplate from '@/components/template/base';
import BlogUpdateContainer from '@/containers/blog/blogUpdateContainer';
import { useRouter } from 'next/router';
import authorize from '@/hoc/authorize';

const BlogCreate = authorize(() => {
  const router = useRouter();
  return (
    <BaseTemplate title="blog">
      <BlogUpdateContainer query={router.query} />
    </BaseTemplate>
  );
});

export default BlogCreate;
