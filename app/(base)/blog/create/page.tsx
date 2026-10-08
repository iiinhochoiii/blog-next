import type { Metadata } from 'next';
import { CreateBlogComponent } from '@/components/Templates';

export const metadata: Metadata = {
  title: 'blog',
};

const BlogCreatePage = () => {
  return <CreateBlogComponent />;
};

export default BlogCreatePage;
