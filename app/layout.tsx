import React from 'react';
import type { Metadata } from 'next';
import StyledComponentsRegistry from './styled-components-registry';
import Providers from './providers';
import { getServerUserInfo } from '@/utils/server-auth';
import 'prismjs/themes/prism-tomorrow.css';

export const metadata: Metadata = {
  title: {
    template: '%s - Choi Tech Blog',
    default: 'Choi Tech Blog',
  },
  icons: '/favicon.ico',
};

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const userInfo = await getServerUserInfo();

  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <StyledComponentsRegistry>
          <Providers initialUserInfo={userInfo}>{children}</Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
