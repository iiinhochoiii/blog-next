import React, { useEffect, useState, useRef } from 'react';
import { observer } from 'mobx-react';
import { useRouter } from 'next/router';
import useStores from '@/hooks/use-stores';
import { Toaster } from '@/utils/common';
import { Editor } from '@toast-ui/react-editor';

import { Box, Button, Text, Input, TextArea } from '@/components/Atom';
import { PostSelectBox } from '@/components/Molecules';
import { TUIEditor } from '@/components/Organisms';

const CreateBlogComponent = observer((): JSX.Element => {
  const router = useRouter();
  const { blogStore, userStore } = useStores();

  const editorRef = useRef<Editor>();

  const [title, setTitle] = useState<string>('');
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
  }, []);

  const createBlog = async (title: string, summary: string, content: string, type: string, markdown: string) => {
    try {
      const res = await blogStore.createBlog(title, summary, content, type, markdown);

      if (res.status) {
        router.push('/blog');
        Toaster.showSuccess(res?.massage || '게시물이 등록 되었습니다.');
      }
    } catch (err) {
      Toaster.showError('블로그 생성 중 오류가 발생하였습니다.');
    }
  };

  const handleChange = React.useCallback(() => {
    if (!editorRef.current) {
      return;
    }
    const instance = editorRef.current.getInstance();
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
          <TUIEditor ref={editorRef} onChange={handleChange} />
        </Box>
        <Box>
          <Text margin={{ top: '10px', bottom: '5px' }} size={12}>
            타입
          </Text>
          <PostSelectBox type={type} setType={setType} />
        </Box>
        <Box margin={{ top: '30px' }}>
          <Button width={150} radius={10} onClick={saveHandler}>
            저장
          </Button>
        </Box>
      </Box>
    </Box>
  );
});

export default CreateBlogComponent;
