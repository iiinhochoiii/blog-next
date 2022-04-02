import React from 'react';
import MypageTemplates from '@/components/Layout/MypageTemplates';
import { MypageCategoriesComponent } from '@/components/Templates';
import authorize from '@/hoc/authorize';

const MypageCategory = authorize(() => {
  return (
    <MypageTemplates title="mypage-contact">
      <MypageCategoriesComponent />
    </MypageTemplates>
  );
});

export default MypageCategory;
