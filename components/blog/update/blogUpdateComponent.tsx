import React, { useState, useEffect } from 'react';
import { blogs } from '@/interfaces/models/blog';
import { Toaster } from '@/utils/common';
import { Editor } from '@toast-ui/react-editor';
import { Box, Button, Text, Input, TextArea } from '@/components/Atom';
import { PostSelectBox } from '@/components/Molecules';
import { TUIEditor } from '@/components/Organisms';

interface Props {
  blogItem?: blogs;
  updateBlog: (blog_id: number, title: string, summary: string, content: string, blog_type: string, markdown: string) => void;
}
const BlogUpdateComponent: React.FC<Props> = (props) => {
  const [title, setTitle] = useState<string>(props.blogItem ? props.blogItem.content : '');
  const [summary, setSummary] = useState<string>('');
  const [content, setContent] = useState<any>('');
  const [type, setType] = useState<string>('React');
  const [markDown, setMarkDown] = useState<string>('');

  const editorRef = React.useRef<Editor>();
  useEffect(() => {
    const item = props.blogItem;
    if (item) {
      setTitle(item.title);
      setSummary(item.summary);
      setType(item.blog_type);
      setContent(item.content);
      setMarkDown(item.markdown);
    }
  }, [props.blogItem]);

  const handleChange = React.useCallback(() => {
    if (!editorRef.current) {
      return;
    }
    const instance = editorRef.current.getInstance();
    // const valueType = props.valueType || 'markdown';
    setContent(instance.getHtml());
    setMarkDown(instance.getMarkdown());
  }, [props, editorRef]);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    switch (id) {
      case 'title':
        return setTitle(value);
      case 'summary':
        return setSummary(value);
    }
  };
  const blogChangeHandler = () => {
    if (title === '') {
      Toaster.showWarning('제목을 입력해주세요.');
    } else if (content === '') {
      Toaster.showWarning('콘텐트를 입력해주세요.');
    } else if (summary === '') {
      Toaster.showWarning('요약을 입력해주세요.');
    } else {
      props.updateBlog(Number(props.blogItem?.blog_id), title, summary, content, type, markDown);
    }
  };

  return (
    <>
      {props.blogItem && (
        <Box width="980px" margin={{ left: 'auto', right: 'auto' }} screen={{ size: 1010, calc: '30px' }}>
          <Box margin={{ top: '40px', bottom: '200px' }}>
            <Box>
              <Text margin={{ top: '10px', bottom: '5px' }} size={12}>
                제목
              </Text>
              <Input
                width="50%"
                height="45px"
                type="text"
                id="title"
                border="1px solid #b4b2b2"
                padding={{ left: '10px', right: '10px' }}
                screen={1010}
                value={title}
                onChange={changeHandler}
              />
            </Box>
            <Box>
              <Text margin={{ top: '10px', bottom: '5px' }} size={12}>
                요약
              </Text>
              <TextArea width="50%" height={100} value={summary} screen={1010} onChange={changeHandler} id="summary" />
            </Box>
            <Box margin={{ top: '20px', bottom: '50px' }}>
              <TUIEditor ref={editorRef} onChange={handleChange} initialValue={markDown} />
            </Box>
            <Box>
              <Text margin={{ top: '10px', bottom: '5px' }} size={12}>
                타입
              </Text>
              <PostSelectBox type={type} setType={setType} />
            </Box>
            <Box margin={{ top: '30px' }}>
              <Button width={150} radius={10} onClick={blogChangeHandler}>
                변경
              </Button>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};
export default BlogUpdateComponent;
