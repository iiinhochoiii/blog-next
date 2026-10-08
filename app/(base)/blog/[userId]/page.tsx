import type { Metadata } from 'next';
import { BlogComponent } from '@/components/Templates';
import { getUser } from '@/apis/user';

interface Props {
  params: { userId: string };
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const userId = Number(params.userId);
  if (Number.isNaN(userId)) {
    return { title: 'blog' };
  }

  try {
    const user = await getUser(userId);
    if (user?.name) {
      return { title: `${user.name}(${user.email?.split('@')[0]})` };
    }
  } catch (err) {
    console.log(err);
  }
  return { title: 'blog' };
};

const UserBlogPage = () => {
  return <BlogComponent />;
};

export default UserBlogPage;
