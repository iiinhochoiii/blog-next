'use client';

import React, { useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { ServerStyleSheet, StyleSheetManager as BaseStyleSheetManager, StyleSheetManagerProps } from 'styled-components';

// @types/styled-components v5 의 StyleSheetManager 타입에 children 이 누락되어 있어 보완
const StyleSheetManager = BaseStyleSheetManager as unknown as React.ComponentType<StyleSheetManagerProps & { children?: React.ReactNode }>;

// App Router 에서 styled-components 스타일을 SSR 시 수집해 <head> 에 주입한다. (기존 pages/_document 의 역할)
const StyledComponentsRegistry = ({ children }: { children: React.ReactNode }) => {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (styledComponentsStyleSheet.instance as any).clearTag();
    return <>{styles}</>;
  });

  if (typeof window !== 'undefined') {
    return <>{children}</>;
  }

  return <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>{children}</StyleSheetManager>;
};

export default StyledComponentsRegistry;
