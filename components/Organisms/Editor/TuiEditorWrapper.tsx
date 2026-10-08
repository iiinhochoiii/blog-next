import { MutableRefObject, useEffect, useRef } from 'react';
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
  const { forwardedRef, initialValue } = props;
  const localRef = useRef<Editor>(null);
  const editorRef = forwardedRef ?? localRef;

  // @toast-ui/react-editor v2 는 언마운트 시 에디터 인스턴스를 정리하지 않는다.
  // 정리하지 않으면 리소스가 남고, StrictMode 재마운트 시 새 에디터가 남아 있는 이전 에디터 DOM 을
  // 초기 본문(innerHTML)으로 읽어 툴바/팝업 마크업이 본문에 들어가므로 언마운트 시 직접 정리한다.
  useEffect(() => {
    const editor = editorRef.current;
    return () => {
      editor?.getInstance()?.remove();
      const rootElement = editor?.getRootElement();
      if (rootElement) {
        rootElement.innerHTML = '';
      }
    };
  }, []);

  return (
    <Editor
      {...props}
      ref={editorRef}
      initialValue={initialValue || ''}
      previewStyle="vertical"
      height="600px"
      initialEditType="markdown"
      useCommandShortcut={true}
      // TUI Editor 타입 정의에 [plugin, options] 튜플 형태가 누락되어 있어 plugins 타입으로 맞춤 (런타임은 지원)
      plugins={[[codeSyntaxHighlightPlugin, { hljs }]] as unknown as EditorProps['plugins']}
    />
  );
};
export default TUIEditorWrapper;
