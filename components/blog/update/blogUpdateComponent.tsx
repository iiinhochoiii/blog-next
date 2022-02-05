import React, {useState, useEffect} from 'react';
import {blogs} from '@/interfaces/models/blog';
import {BlogCreateWrap, BlogContainer, BlogMainContent, BlogButton} from '../create/blogCreateComponent';
import dynamic from 'next/dynamic';
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import codeSyntaxHighlightPlugin from '@toast-ui/editor-plugin-code-syntax-highlight';
import hljs from 'highlight.js';
import "highlight.js/styles/github.css";
import {Editor as EditorType, EditorProps} from '@toast-ui/react-editor';
import {TuiEditorWithForwardedProps} from '../create/tuiEditorWrapper';
import {Toaster} from '@/utils/common';

const Editor = dynamic<TuiEditorWithForwardedProps>(() => import('../create/tuiEditorWrapper'), { ssr: false });
const EditorWithForwardedRef = React.forwardRef<EditorType | undefined, any>((props, ref) => (
    <Editor {...props} forwardedRef={ref as React.MutableRefObject<EditorType>} />
  ));


interface Props extends EditorProps{
    blogItem?:blogs;
    updateBlog:(blog_id:number, title:string, summary:string, content:string, blog_type:string, markdown:string)=>void;
    valueType?: "markdown" | "html";
}
const BlogUpdateComponent: React.FC<Props> = (props) =>{
    const [title, setTitle] = useState<string>(props.blogItem?props.blogItem.content:"");
    const [summary, setSummary] = useState<string>('');
    const [content, setContent] = useState<any>('');
    const [type, setType] = useState<string>('React');
    const [markDown, setMarkDown] = useState<string>('')

    useEffect(()=>{
        const item = props.blogItem;
        if(item){
            setTitle(item.title);
            setSummary(item.summary);
            setType(item.blog_type);
            setContent(item.content);
            setMarkDown(item.markdown);
        }
    },[props.blogItem]);

    const { previewStyle, height, initialEditType, useCommandShortcut } = props;
    const editorRef = React.useRef<EditorType>();
    
    const handleChange = React.useCallback(()=>{
        if(!editorRef.current){
            return;
        }
            const instance = editorRef.current.getInstance();
            // const valueType = props.valueType || 'markdown';
            setContent(instance.getHtml());
            setMarkDown(instance.getMarkdown());
       },[props, editorRef]);

    const changeHandler = (e:React.ChangeEvent<HTMLInputElement> | any) =>{
    const {id, value} = e.target;
    switch(id){
        case 'title':
            return setTitle(value);
        case 'type':
            return setType(value);
        case 'summary':
            return setSummary(value);
            }
    }
    const blogChangeHandler = () =>{
        if(title===''){
            Toaster.showWarning('제목을 입력해주세요.');
        } else if(content ===''){
            Toaster.showWarning('콘텐트를 입력해주세요.');
        } else if(summary===''){
            Toaster.showWarning('요약을 입력해주세요.');
        } else{
            props.updateBlog(Number(props.blogItem?.blog_id), title, summary, content, type, markDown);
        }
    }
      
    return(
        <>
        {props.blogItem&&
            <BlogCreateWrap>
                    <BlogContainer>
                        <div>
                            <p>제목</p>
                            <input type="text" id="title" value={title} onChange={changeHandler} />
                        </div>
                        <div>
                            <p>요약</p>
                            <textarea value={summary} onChange={changeHandler} id="summary" />
                        </div>
                        <BlogMainContent>
                            <EditorWithForwardedRef
                            {...props}
                            initialValue={markDown}
                            previewStyle={previewStyle || "vertical"}
                            height={height || "600px"}
                            initialEditType={initialEditType || "markdown"}
                            useCommandShortcut={useCommandShortcut || true}
                            ref={editorRef}
                            onChange={handleChange}
                            plugins={[[codeSyntaxHighlightPlugin,{hljs}]]}
                            />
                        </BlogMainContent>
                        <div>
                            <p>타입</p>
                            <select value={type} id="type" onChange={changeHandler}>
                                <option value="React">React</option>
                                <option value="Express">Node</option>
                                <option value="Javascript">Javascript</option>
                                <option value="html/css">Html/Css</option>
                                <option value="Database">Database</option>
                                <option value="Git">Git</option>
                                <option value="etc">etc</option>
                            </select>
                        </div>
                    <BlogButton>
                        <button onClick={blogChangeHandler}>변경</button>
                    </BlogButton>
                </BlogContainer>
            </BlogCreateWrap>}
        </>
    );
}
export default BlogUpdateComponent;