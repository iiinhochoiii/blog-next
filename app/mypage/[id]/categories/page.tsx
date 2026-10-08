import type { Metadata } from 'next';
import { MypageCategoriesComponent } from '@/components/Templates';

export const metadata: Metadata = {
  title: 'mypage-contact',
};

const MypageCategoriesPage = () => {
  return <MypageCategoriesComponent />;
};

export default MypageCategoriesPage;
