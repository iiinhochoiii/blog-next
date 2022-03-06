import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { useRouter } from 'next/router';
import useStores from '@/hooks/use-stores';
import { Toaster } from '@/utils/common';
import { Editor } from '@toast-ui/react-editor';

import { Box, Text, Form, FormInput, FormSubmit, FormTextArea } from '@/components/Atom';
import { PostSelectBox } from '@/components/Molecules';
import { TUIEditor } from '@/components/Organisms';
import { useForm } from 'react-hook-form';
import { BlogForm } from '@/interfaces/models/blog';
import { postType, replacePostContent } from '@/utils/post';

const UpdateBlogComponent = observer((): JSX.Element => {
  const router = useRouter();
  const { blogStore, userStore } = useStores();

  const editorRef = React.useRef<Editor>();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BlogForm>();

  const [content, setContent] = useState<string>('');
  const [markDown, setMarkDown] = useState<string>('');

  useEffect(() => {
    if (process.browser) {
      if (userStore?.userInfo?.user_id !== 1) {
        router.push('/');
      }
    }
    if (router.query.blog_id) {
      getBlogItem(Number(router.query.blog_id));
    }
  }, []);

  useEffect(() => {
    const item = blogStore.blogItem;
    if (item) {
      setContent(item.content);
      setMarkDown(item.markdown);
      reset({
        title: item.title,
        summary: item.summary,
        type: item.blog_type,
      });
    }
  }, [blogStore.blogItem]);

  const getBlogItem = async (blog_id: number) => {
    try {
      const res = await blogStore.getBlogItem(blog_id);
      blogStore.setBlogItem(res.data);
    } catch (err) {
      Toaster.showError('데이터를 불러오는 중 에러가 발생하였습니다.');
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

  const update = async (data: BlogForm): Promise<void> => {
    const { title, summary, type } = data;

    if (!content || !markDown) {
      Toaster.showWarning('콘텐트를 입력해주세요.');
      return;
    }

    if (window.confirm('게시글을 수정 하시겠습니까?')) {
      try {
        const res = await blogStore.updateBlog(Number(router.query.blog_id), title, summary, replacePostContent(content), type, replacePostContent(markDown));
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

  return blogStore?.blogItem ? (
    <Box width="980px" margin={{ left: 'auto', right: 'auto' }} screen={{ size: 1010, calc: '30px' }}>
      <Form margin={{ top: '40px', bottom: '200px' }} onSubmit={handleSubmit(update)}>
        <Box>
          <Text margin={{ top: '10px', bottom: '5px' }} size={12}>
            제목
          </Text>
          <FormInput
            width="50%"
            height="45px"
            type="text"
            border="1px solid #b4b2b2"
            padding={{ left: '10px', right: '10px' }}
            screen={1010}
            {...register('title', { required: true })}
            error={errors.title}
          />
        </Box>
        <Box>
          <Text margin={{ top: '10px', bottom: '5px' }} size={12}>
            요약
          </Text>
          <FormTextArea width="50%" height={100} screen={1010} {...register('summary', { required: true })} error={errors.summary} />
        </Box>
        <Box margin={{ top: '20px', bottom: '50px' }}>
          <TUIEditor ref={editorRef} onChange={handleChange} initialValue={markDown} />
        </Box>
        <Box>
          <Text margin={{ top: '10px', bottom: '5px' }} size={12}>
            타입
          </Text>
          <PostSelectBox {...register('type')} options={postType} />
        </Box>
        <Box margin={{ top: '30px' }}>
          <FormSubmit type="submit" width="150px" radius={10} value="변경" />
        </Box>
      </Form>
    </Box>
  ) : (
    <></>
  );
});

export default UpdateBlogComponent;
