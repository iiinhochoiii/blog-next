import React, { MutableRefObject } from 'react';
import { Editor, EditorProps } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import 'codemirror/lib/codemirror.css';
import 'highlight.js/styles/github.css';

export interface TuiEditorWithForwardedProps extends EditorProps {
  forwardedRef?: MutableRefObject<Editor>;
}

const TUIEditorWrapper = (props: TuiEditorWithForwardedProps) => {
  const { forwardedRef } = props;
  return (
    <Editor
      {...props}
      ref={forwardedRef}
      initialValue={'hello react editor world!'}
      previewStyle={'vertical'}
      height={'600px'}
      initialEditType={'markdown'}
      useCommandShortcut={true}
    />
  );
};
export default TUIEditorWrapper;
