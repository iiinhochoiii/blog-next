import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { useRouter } from 'next/router';
import useStores from '@/hooks/use-stores';
import { Toaster } from '@/utils/common';
import { getToken } from '@/utils/auth';
import { Editor } from '@toast-ui/react-editor';

import { Box, Button, Text, Input, TextArea } from '@/components/Atom';
import { PostSelectBox } from '@/components/Molecules';
import { TUIEditor } from '@/components/Organisms';

interface Props {
  query: any;
}

const UpdateBlogComponent = observer((props: Props): JSX.Element => {
  const router = useRouter();
  const { query } = props;
  const { blogStore, userStore } = useStores();
  const token = getToken();

  const editorRef = React.useRef<Editor>();

  const [title, setTitle] = useState<string>(blogStore.blogItem ? blogStore.blogItem.content : '');
  const [summary, setSummary] = useState<string>('');
  const [content, setContent] = useState<any>('');
  const [type, setType] = useState<string>('React');
  const [markDown, setMarkDown] = useState<string>('');

  useEffect(() => {
    if (process.browser) {
      if (userStore?.userInfo?.user_id !== 1) {
        router.push('/');
      }
    }
    if (query.blog_id) {
      getBlogItem(query.blog_id);
    }
  }, []);

  useEffect(() => {
    const item = blogStore.blogItem;
    if (item) {
      setTitle(item.title);
      setSummary(item.summary);
      setType(item.blog_type);
      setContent(item.content);
      setMarkDown(item.markdown);
    }
  }, [blogStore.blogItem]);

  const getBlogItem = async (blog_id: string) => {
    try {
      const res = await blogStore.getBlogItem(Number(blog_id));
      blogStore.setBlogItem(res.data);
    } catch (err) {
      Toaster.showError('데이터를 불러오는 중 에러가 발생하였습니다.');
    }
  };

  const updateBlog = async (blog_id: number, title: string, summary: string, content: string, blog_type: string, markdown: string) => {
    if (window.confirm('게시글을 수정 하시겠습니까?')) {
      try {
        const res = await blogStore.updateBlog(blog_id, title, summary, content, blog_type, markdown, token);
        if (res?.status) {
          Toaster.showSuccess(res?.msg || '게시글이 변경되었습니다.');
          router.back();
        } else {
          Toaster.showWarning(res?.msg);
        }
      } catch (err) {
        Toaster.showError('데이터를 변경 중 에러가 발생하였습니다.');
      }
    }
  };

  const handleChange = React.useCallback(() => {
    if (!editorRef.current) {
      return;
    }
    const instance = editorRef.current.getInstance();
    // const valueType = props.valueType || 'markdown';
    setContent(instance.getHtml());
    setMarkDown(instance.getMarkdown());
  }, [editorRef]);

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
      updateBlog(Number(blogStore.blogItem?.blog_id), title, summary, content, type, markDown);
    }
  };

  return (
    <>
      {blogStore.blogItem && (
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
});

export default UpdateBlogComponent;
