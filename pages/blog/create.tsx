import React from 'react';
import BaseTemplate from '@/components/template/base';
import BlogCreateContainer from '@/containers/blog/blogCreateContainer';
import authorize from '@/hoc/authorize';

const BlogCreate = authorize(() => {
  return (
    <BaseTemplate title="blog">
      <BlogCreateContainer />
    </BaseTemplate>
  );
});

export default BlogCreate;
