import React from 'react';
import BaseTemplate from '@/components/template/base';
import MainContainer from '@/containers/main/mainContainer';
import authorize from '@/hoc/authorize';

const Index = authorize(() => {
  return (
    <BaseTemplate title="">
      <MainContainer />
    </BaseTemplate>
  );
});

export default Index;
