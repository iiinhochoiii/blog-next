import React from 'react';
import BaseTemplate from '@/components/template/base';
import authorize from '@/hoc/authorize';
import { HomeComponent } from '@/components/Templates';

const Index = authorize(() => {
  return (
    <BaseTemplate title="">
      <HomeComponent />
    </BaseTemplate>
  );
});

export default Index;
