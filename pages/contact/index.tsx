import React from 'react';
import BaseTemplates from '@/components/Layout/BaseTemplates';
import authorize from '@/hoc/authorize';
import { ContactComponent } from '@/components/Templates';

const Contact = authorize(() => {
  return (
    <BaseTemplates title="contact">
      <ContactComponent />
    </BaseTemplates>
  );
});

export default Contact;
