import React from 'react';
import {useState} from 'react';
import styled from 'styled-components';
import dynamic from 'next/dynamic';
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import codeSyntaxHighlightPlugin from '@toast-ui/editor-plugin-code-syntax-highlight';
import hljs from 'highlight.js';
import "highlight.js/styles/github.css";

import {Editor as EditorType, EditorProps} from '@toast-ui/react-editor';
import {TuiEditorWithForwardedProps} from './tuiEditorWrapper';

const Editor = dynamic<TuiEditorWithForwardedProps>(() => import('./tuiEditorWrapper'), { ssr: false });
const EditorWithForwardedRef = React.forwardRef<EditorType | undefined, any>((props, ref) => (
    <Editor {...props} forwardedRef={ref as React.MutableRefObject<EditorType>} />
  ));


interface asdProps extends EditorProps{
    valueType?: "markdown" | "html";
}
const BlogCreateComponent: React.FC<asdProps> = (props) =>{
    const [data, setData] = useState<any>('');
    const { initialValue, previewStyle, height, initialEditType, useCommandShortcut } = props;

   const editorRef = React.useRef<EditorType>();

   const handleChange = React.useCallback(()=>{
    if(!editorRef.current){
        return;
    }
        const instance = editorRef.current.getInstance();
        // const valueType = props.valueType || 'markdown';
        setData(instance.getHtml());
   },[props, editorRef]);

    return(
        <BlogCreateWrap>
           <EditorWithForwardedRef
                {...props}
                initialValue={initialValue}
                previewStyle={previewStyle || "vertical"}
                height={height || "600px"}
                initialEditType={initialEditType || "markdown"}
                useCommandShortcut={useCommandShortcut || true}
                ref={editorRef}
                onChange={handleChange}
                plugins={[[codeSyntaxHighlightPlugin,{hljs}]]}
                />
            <div>
                {/* {Parser(data)} */}
                {data}
            </div>
        </BlogCreateWrap>
    );
}

const BlogCreateWrap = styled.div`
    height:100%;
    width:100%;
`;
export default BlogCreateComponent;