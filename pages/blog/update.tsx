import React from 'react';
import BaseTemplates from '@/components/Layout/BaseTemplates';
import { useRouter } from 'next/router';
import authorize from '@/hoc/authorize';
import { UpdateBlogComponent } from '@/components/Templates';

const BlogCreate = authorize(() => {
  const router = useRouter();
  return (
    <BaseTemplates title="blog">
      <UpdateBlogComponent query={router.query} />
    </BaseTemplates>
  );
});

export default BlogCreate;
