'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { ServerStyleSheets } from '@material-ui/core/styles';

const SSR_STYLE_ATTRIBUTE = 'data-mui-ssr';

// Material-UI v4(JSS) 스타일을 SSR 시 수집해 <head> 에 주입한다.
// 수집하지 않으면 서버 HTML 에 스타일이 없어, 하이드레이션 전까지 아이콘(svg) 등이 크기 지정 없이 크게 그려진다.
const MuiStylesRegistry = ({ children }: { children: React.ReactNode }) => {
  const [sheets] = useState(() => new ServerStyleSheets());
  const insertedCssRef = useRef('');

  useServerInsertedHTML(() => {
    const css = sheets.toString();
    if (!css || css === insertedCssRef.current) {
      return null;
    }
    insertedCssRef.current = css;
    return <style {...{ [SSR_STYLE_ATTRIBUTE]: '' }} dangerouslySetInnerHTML={{ __html: css }} />;
  });

  // 클라이언트에서 MUI 가 스타일을 다시 주입한 뒤에는 서버에서 넣은 스타일을 제거 (Material-UI v4 SSR 가이드)
  useEffect(() => {
    document.querySelectorAll(`style[${SSR_STYLE_ATTRIBUTE}]`).forEach((style) => style.remove());
  }, []);

  if (typeof window !== 'undefined') {
    return <>{children}</>;
  }

  return sheets.collect(children);
};

export default MuiStylesRegistry;
