import React from 'react';
import MypageTemplates from '@/components/Layout/MypageTemplates';
import { MypageCategoryComponent } from '@/components/Templates';
import authorize from '@/hoc/authorize';

const MypageCategory = authorize(() => {
  return (
    <MypageTemplates title="mypage-contact">
      <MypageCategoryComponent />
    </MypageTemplates>
  );
});

export default MypageCategory;
