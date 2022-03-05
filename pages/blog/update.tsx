import React from 'react';
import BaseTemplates from '@/components/Layout/BaseTemplates';
import authorize from '@/hoc/authorize';
import { UpdateBlogComponent } from '@/components/Templates';

const BlogCreate = authorize(() => {
  return (
    <BaseTemplates title="blog">
      <UpdateBlogComponent />
    </BaseTemplates>
  );
});

export default BlogCreate;
