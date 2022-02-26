import React from 'react';
import BaseTemplates from '@/components/Layout/BaseTemplates';
import { MypageComponent } from '@/components/Templates';
import authorize from '@/hoc/authorize';

const Mypage = authorize(() => {
  return (
    <BaseTemplates title="mypage">
      <MypageComponent />
    </BaseTemplates>
  );
});

export default Mypage;
