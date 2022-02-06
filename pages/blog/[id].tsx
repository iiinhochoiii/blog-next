import React from 'react';
import BaseTemplate from '@/components/template/base';
import BlogReadContainer from '@/containers/blog/blogReadContainer';
import authorize from '@/hoc/authorize';

const BlogDetail = authorize(() => {
  return (
    <BaseTemplate title="blog">
      <BlogReadContainer />
    </BaseTemplate>
  );
});

export default BlogDetail;
