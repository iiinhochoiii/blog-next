import React, { MutableRefObject } from 'react';
import { Editor, EditorProps } from '@toast-ui/react-editor';
import codeSyntaxHighlightPlugin from '@toast-ui/editor-plugin-code-syntax-highlight';
import '@toast-ui/editor/dist/toastui-editor.css';
import 'codemirror/lib/codemirror.css';
import 'highlight.js/styles/github.css';
import hljs from 'highlight.js';

export interface TuiEditorWithForwardedProps extends EditorProps {
  forwardedRef?: MutableRefObject<Editor>;
}

const TUIEditorWrapper = (props: TuiEditorWithForwardedProps) => {
  const { forwardedRef } = props;
  return (
    <Editor
      {...props}
      ref={forwardedRef}
      initialValue=""
      previewStyle="vertical"
      height="600px"
      initialEditType="markdown"
      useCommandShortcut={true}
      plugins={[[codeSyntaxHighlightPlugin, { hljs }]] as Array<any>}
    />
  );
};
export default TUIEditorWrapper;
