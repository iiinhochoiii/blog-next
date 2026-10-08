import type { Metadata } from 'next';
import { BlogComponent } from '@/components/Templates';

export const metadata: Metadata = {
  title: 'blog',
};

const BlogPage = () => {
  return <BlogComponent />;
};

export default BlogPage;
