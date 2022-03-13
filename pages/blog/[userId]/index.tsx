import React from 'react';
import BaseTemplates from '@/components/Layout/BaseTemplates';
import authorize from '@/hoc/authorize';
import { BlogComponent } from '@/components/Templates';

const Blog = authorize(() => {
  return (
    <BaseTemplates>
      <BlogComponent />
    </BaseTemplates>
  );
});

export default Blog;
