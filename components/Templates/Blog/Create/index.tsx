import React, { useEffect, useState, useRef } from 'react';
import { observer } from 'mobx-react';
import { useRouter } from 'next/router';
import useStores from '@/hooks/use-stores';
import { Toaster } from '@/utils/common';
import { Editor } from '@toast-ui/react-editor';

import { Box, Text, FormInput, Form, FormSubmit, FormTextArea } from '@/components/Atom';
import { PostSelectBox } from '@/components/Molecules';
import { TUIEditor } from '@/components/Organisms';
import { useForm } from 'react-hook-form';
import { replacePostContent } from '@/utils/post';
import { BlogForm } from '@/interfaces/models/blog';

const CreateBlogComponent = observer((): JSX.Element => {
  const router = useRouter();
  const { blogStore, categoriesStore } = useStores();
  const [content, setContent] = useState<any>('');
  const [markDown, setMarkDown] = useState<string>('');

  const editorRef = useRef<Editor>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BlogForm>();

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async (): Promise<void> => {
    try {
      const res = await categoriesStore.getCategoriesList();
      if (res?.status) {
        categoriesStore.setCategories(res.data);
      }
    } catch (err: any) {
      console.log(err);
      Toaster.showError(err?.response?.data?.message || '오류가 발생하였습니다.');
    }
  };

  const handleChange = React.useCallback(() => {
    if (!editorRef.current) {
      return;
    }

    const instance = editorRef.current.getInstance();

    // 기존 이미지 업로드 기능 제거
    editorRef.current.getInstance().removeHook('addImageBlobHook');

    // 이미지 서버로 데이터를 전달하는 기능 추가
    editorRef.current.getInstance().addHook('addImageBlobHook', (blob) => {
      if (blob) {
        alert('이미지 첨부는 URL 입력만 가능합니다.');
        return;
      }
    });

    setContent(instance.getHtml());
    setMarkDown(instance.getMarkdown());
  }, [editorRef]);

  const create = async (data: BlogForm): Promise<void> => {
    const { title, summary, category_id } = data;
    if (!content || !markDown) {
      Toaster.showWarning('콘텐트를 입력해주세요.');
      return;
    }
    try {
      const res = await blogStore.createBlog(title, summary, replacePostContent(content), category_id || 0, replacePostContent(markDown));

      if (res.status) {
        router.push('/blog');
        Toaster.showSuccess(res?.massage || '게시물이 등록 되었습니다.');
      }
    } catch (err) {
      Toaster.showError('블로그 생성 중 오류가 발생하였습니다.');
    }
  };

  return (
    <Box width="980px" margin={{ left: 'auto', right: 'auto' }} screen={{ size: 1010, calc: '30px' }}>
      <Form margin={{ top: '40px', bottom: '200px' }} onSubmit={handleSubmit(create)}>
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
          <TUIEditor ref={editorRef} onChange={handleChange} />
        </Box>
        <Box>
          <Text margin={{ top: '10px', bottom: '5px' }} size={12}>
            타입
          </Text>
          <PostSelectBox {...register('category_id')} options={categoriesStore.categories} />
        </Box>
        <Box margin={{ top: '30px' }}>
          <FormSubmit type="submit" width="150px" radius={10} value="저장" />
        </Box>
      </Form>
    </Box>
  );
});

export default CreateBlogComponent;
