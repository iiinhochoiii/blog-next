import React from 'react';
import BaseTemplates from '@/components/Layout/BaseTemplates';
import MypageContainer from '@/containers/mypage/mypageContainer';
import authorize from '@/hoc/authorize';

const Mypage = authorize(() => {
  return (
    <BaseTemplates title="mypage">
      <MypageContainer />
    </BaseTemplates>
  );
});

export default Mypage;
