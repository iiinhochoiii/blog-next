import React from 'react';
import BaseTemplate from '@/components/template/base';
import MypageContainer from '@/containers/mypage/mypageContainer';
import authorize from '@/hoc/authorize';

const Mypage = authorize(() => {
  return (
    <BaseTemplate title="mypage">
      <MypageContainer />
    </BaseTemplate>
  );
});

export default Mypage;
