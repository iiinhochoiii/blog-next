import React from 'react';
import BaseTemplates from '@/components/Layout/BaseTemplates';
import authorize from '@/hoc/authorize';
import { CreateBlogComponent } from '@/components/Templates';

const BlogCreate = authorize(() => {
  return (
    <BaseTemplates title="blog">
      <CreateBlogComponent />
    </BaseTemplates>
  );
});

export default BlogCreate;
