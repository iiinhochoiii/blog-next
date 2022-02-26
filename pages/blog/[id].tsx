import React from 'react';
import BaseTemplates from '@/components/Layout/BaseTemplates';
import BlogReadContainer from '@/containers/blog/blogReadContainer';
import authorize from '@/hoc/authorize';

const BlogDetail = authorize(() => {
  return (
    <BaseTemplates title="blog">
      <BlogReadContainer />
    </BaseTemplates>
  );
});

export default BlogDetail;
