import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { Toaster } from '@/utils/common';
import { TUIEditor } from '@/components/Organisms';
import { Editor } from '@toast-ui/react-editor';

interface Props {
  createBlog: (title: string, summary: string, content: string, type: string, markdown: string) => void;
}
const BlogCreateComponent = (props: Props) => {
  const { createBlog } = props;
  const [title, setTitle] = useState<string>('');
  const [summary, setSummary] = useState<string>('');
  const [content, setContent] = useState<any>('');
  const [type, setType] = useState<string>('React');
  const [markDown, setMarkDown] = useState<string>('');

  const editorRef = useRef<Editor>();

  const handleChange = React.useCallback(() => {
    if (!editorRef.current) {
      return;
    }
    const instance = editorRef.current.getInstance();
    setContent(instance.getHtml());
    setMarkDown(instance.getMarkdown());
  }, [props, editorRef]);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    switch (id) {
      case 'title':
        return setTitle(value);
      case 'type':
        return setType(value);
      case 'summary':
        return setSummary(value);
    }
  };

  const saveHandler = () => {
    if (title === '') {
      Toaster.showWarning('제목을 입력해주세요.');
    } else if (content === '') {
      Toaster.showWarning('콘텐트를 입력해주세요.');
    } else if (summary === '') {
      Toaster.showWarning('요약을 입력해주세요.');
    } else {
      createBlog(title, summary, content, type, markDown);
    }
  };

  return (
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
          <TUIEditor ref={editorRef} onChange={handleChange} />
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
          <button onClick={saveHandler}>저장</button>
        </BlogButton>
      </BlogContainer>
    </BlogCreateWrap>
  );
};

export const BlogCreateWrap = styled.div`
  height: 100%;
  width: 980px;
  max-width: 100%;
  margin: 0 auto;

  @media screen and (max-width: 1010px) {
    width: calc(100% - 30px);
  }
`;

export const BlogContainer = styled.div`
  margin: 40px 0px 200px 0px;
  & > div {
    & > p {
      margin: 10px 0px 5px 0px;
      font-size: 12px;
    }
    & > input {
      width: 50%;
      height: 45px;
      border: 1px solid #b4b2b2;
      border-radius: 10px;
      outline: none;
      padding: 0 10px;
    }
    & > textarea {
      width: 50%;
      height: 100px;
      border: 1px solid #b4b2b2;
      border-radius: 10px;
      outline: none;
      padding: 10px;
      resize: none;
    }
    & > select {
      width: 200px;
      height: 45px;
      border: 1px solid #b4b2b2;
      border-radius: 10px;
      outline: none;
      padding: 0 10px;
    }
  }

  @media screen and (max-width: 1010px) {
    & > div {
      & > input,
      textarea {
        width: calc(100% - 20px);
      }
    }
  }
`;

export const BlogMainContent = styled.div`
  margin: 20px 0px 50px 0px;
  width: 100%;
`;

export const BlogButton = styled.div`
  margin-top: 30px;
  & > button {
    outline: none;
    cursor: pointer;
    width: 150px;
    height: 45px;
    border: none;
    background-color: rgb(18, 184, 134);
    color: #ffffff;
    font-weight: bold;
    font-size: 14px;
    border-radius: 10px;
  }
`;
export default BlogCreateComponent;
