import type { Metadata } from 'next';
import { MypageSettingsComponent } from '@/components/Templates';

export const metadata: Metadata = {
  title: 'mypage-settings',
};

const MypageSettingsPage = () => {
  return <MypageSettingsComponent />;
};

export default MypageSettingsPage;
