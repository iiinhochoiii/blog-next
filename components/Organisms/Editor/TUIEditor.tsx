import React, { MutableRefObject, forwardRef } from 'react';
import dynamic from 'next/dynamic';
import { Editor, EditorProps } from '@toast-ui/react-editor';
import { TuiEditorWithForwardedProps } from './TuiEditorWrapper';

interface EditorPropsWithHandlers extends EditorProps {
  onChange?: (value: string) => void;
}

const EditorWrapper = dynamic<TuiEditorWithForwardedProps>(() => import('./TuiEditorWrapper'), { ssr: false });

// eslint-disable-next-line react/display-name
const TUIEditor = forwardRef<Editor | undefined, EditorPropsWithHandlers>((props, ref) => {
  return <EditorWrapper {...props} forwardedRef={ref as MutableRefObject<Editor>} />;
});

export default TUIEditor;
