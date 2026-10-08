import type { Metadata } from 'next';
import { ViewBlogComponent } from '@/components/Templates';
import { getBlogItem } from '@/apis/blog';

interface Props {
  params: { userId: string; id: string };
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const blogId = Number(params.id);
  if (Number.isNaN(blogId)) {
    return { title: 'blog' };
  }

  try {
    const res = await getBlogItem(blogId);
    if (res?.status && res.data?.title) {
      return { title: { absolute: res.data.title } };
    }
  } catch (err) {
    console.log(err);
  }
  return { title: 'blog' };
};

const BlogDetailPage = () => {
  return <ViewBlogComponent />;
};

export default BlogDetailPage;
