import React from 'react';
import BaseTemplates from '@/components/Layout/BaseTemplates';
import authorize from '@/hoc/authorize';
import { HomeComponent } from '@/components/Templates';

const Index = authorize(() => {
  return (
    <BaseTemplates title="">
      <HomeComponent />
    </BaseTemplates>
  );
});

export default Index;
