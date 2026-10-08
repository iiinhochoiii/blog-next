import type { Metadata } from 'next';
import { MypageContactComponent } from '@/components/Templates';

export const metadata: Metadata = {
  title: 'mypage-contact',
};

const MypageContactPage = () => {
  return <MypageContactComponent />;
};

export default MypageContactPage;
