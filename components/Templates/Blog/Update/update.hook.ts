import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { useBlogItemQuery, useUpdateBlogMutation } from '@/queries/blog';
import { getErrorMessage, Toaster } from '@/utils/common';
import { replacePostContent } from '@/utils/post';
import { BlogForm } from '@/types/blog';
import { useBlogEditor, useCategoryOptions } from '../blog-form.hook';

export const useUpdateBlog = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const blog_id = Number(searchParams.get('blog_id'));
  const { data: blogData, isError: isBlogError } = useBlogItemQuery(blog_id, { enabled: !!blog_id });
  const { mutateAsync: updateBlog } = useUpdateBlogMutation();
  const categoryOptions = useCategoryOptions();
  const blogItem = blogData?.data;

  const [initialized, setInitialized] = useState(false);
  const { editorRef, content, markdown, handleEditorChange, setEditorValue } = useBlogEditor({ enabled: initialized });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BlogForm>();

  useEffect(() => {
    if (isBlogError) {
      Toaster.showError('데이터를 불러오는 중 에러가 발생하였습니다.');
    }
  }, [isBlogError]);

  // 게시글 데이터로 폼을 한 번만 초기화 (refetch 시 작성 중인 내용이 덮어써지지 않도록)
  useEffect(() => {
    if (blogItem && !initialized) {
      setEditorValue({ content: blogItem.content, markdown: blogItem.markdown });
      reset({
        title: blogItem.title,
        summary: blogItem.summary,
        category_id: blogItem.category_id || 0,
      });

      setInitialized(true);
    }
  }, [blogItem]);

  const update = async (data: BlogForm): Promise<void> => {
    const { title, summary, category_id } = data;

    if (!content || !markdown) {
      Toaster.showWarning('콘텐트를 입력해주세요.');
      return;
    }

    if (window.confirm('게시글을 수정 하시겠습니까?')) {
      try {
        const res = await updateBlog({
          blog_id,
          title,
          summary,
          content: replacePostContent(content),
          category_id: category_id || 0,
          markdown: replacePostContent(markdown),
        });
        if (res?.status) {
          Toaster.showSuccess(res?.msg || '게시글이 변경되었습니다.');
          router.back();
        } else {
          Toaster.showWarning(res?.message || res?.msg);
        }
      } catch (err) {
        console.log(err);
        Toaster.showError(getErrorMessage(err) || '데이터를 변경 중 에러가 발생하였습니다.');
      }
    }
  };

  return {
    initialized,
    register,
    errors,
    onSubmit: handleSubmit(update),
    editorRef,
    handleEditorChange,
    // 에디터 초기값: 게시글 데이터로 초기화된 markdown
    initialMarkdown: markdown,
    categoryOptions,
  };
};
