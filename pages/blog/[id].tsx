import React from 'react';
import BaseTemplates from '@/components/Layout/BaseTemplates';
import authorize from '@/hoc/authorize';
import { ViewBlogComponent } from '@/components/Templates';

const BlogDetail = authorize(() => {
  return (
    <BaseTemplates title="blog">
      <ViewBlogComponent />
    </BaseTemplates>
  );
});

export default BlogDetail;
