'use client';

import React, { useEffect, useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Toast from '@choi-ui/react-toast';
import { UserStoreProvider } from '@/stores/user-store-provider';
import { UserInfo } from '@/types/user';
import 'prismjs';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
	height:100%;
	margin:0;
	padding:0;
	width:100%;
    background-color: rgb(242, 242, 242);
    color:#333333;
	font-family: 'Noto Sans KR', sans-serif;
	font-weight:300;
  }
`;

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

// @choi-ui/react-toast 의 <Toast /> 는 렌더링 시 document.body 로 portal 을 생성하므로
// 서버 렌더링(document 없음)을 피하기 위해 클라이언트 마운트 이후에만 렌더링한다.
const ClientToast = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? <Toast /> : null;
};

interface Props {
  children: React.ReactNode;
  initialUserInfo?: UserInfo;
}

const Providers = ({ children, initialUserInfo }: Props) => {
  // 요청(앱 인스턴스)마다 QueryClient 를 생성해 SSR 시 요청 간 캐시가 공유되지 않도록 한다.
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // 1분 동안은 캐시된 데이터를 fresh 로 취급해 화면 재진입 시 재요청하지 않는다.
            // 데이터 변경은 각 mutation 의 invalidateQueries 로 즉시 반영된다.
            staleTime: 60 * 1000,
            refetchOnWindowFocus: false,
            retry: false,
          },
        },
      }),
  );

  useEffect(() => {
    const style = [
      'padding : 30px 20px',
      'margin : 20px 0',
      'background : rgb(18,184,134)',
      'font-size : 25px',
      'font-weight : bold',
      'text-align : center',
      'color : #ffffff',
    ].join(';');
    if (process.env.NODE_ENV === 'production') {
      console.log('%c 안녕하세요. 최인호의 DEV BLOG 입니다!', style);
      console.log('>> https://c-tech.vercel.app');
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      {/* root layout 에서 서버 쿠키로 조회한 사용자 정보로 초기화 */}
      <UserStoreProvider initialUserInfo={initialUserInfo}>
        <GlobalStyle />
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
        <ClientToast />
      </UserStoreProvider>
    </QueryClientProvider>
  );
};

export default Providers;
