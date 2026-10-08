import type { Metadata } from 'next';
import { UpdateBlogComponent } from '@/components/Templates';

export const metadata: Metadata = {
  title: 'blog',
};

const BlogUpdatePage = () => {
  return <UpdateBlogComponent />;
};

export default BlogUpdatePage;
