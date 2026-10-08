import type { Metadata } from 'next';
import { ContactComponent } from '@/components/Templates';

export const metadata: Metadata = {
  title: 'contact',
};

const ContactPage = () => {
  return <ContactComponent />;
};

export default ContactPage;
