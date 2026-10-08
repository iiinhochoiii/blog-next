import type { Metadata } from 'next';
import { MypageBlogComponent } from '@/components/Templates';

export const metadata: Metadata = {
  title: 'mypage-contact',
};

const MypageBlogsPage = () => {
  return <MypageBlogComponent />;
};

export default MypageBlogsPage;
