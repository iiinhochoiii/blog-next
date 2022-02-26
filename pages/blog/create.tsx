import React from 'react';
import BaseTemplates from '@/components/Layout/BaseTemplates';
import BlogCreateContainer from '@/containers/blog/blogCreateContainer';
import authorize from '@/hoc/authorize';

const BlogCreate = authorize(() => {
  return (
    <BaseTemplates title="blog">
      <BlogCreateContainer />
    </BaseTemplates>
  );
});

export default BlogCreate;
