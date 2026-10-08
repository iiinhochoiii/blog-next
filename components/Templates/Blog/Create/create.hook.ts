import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { useCreateBlogMutation } from '@/queries/blog';
import { Toaster } from '@/utils/common';
import { replacePostContent } from '@/utils/post';
import { BlogForm } from '@/types/blog';
import { useBlogEditor, useCategoryOptions } from '../blog-form.hook';

export const useCreateBlog = () => {
  const router = useRouter();
  const { mutateAsync: createBlog } = useCreateBlogMutation();
  const categoryOptions = useCategoryOptions();
  const { editorRef, content, markdown, handleEditorChange } = useBlogEditor();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BlogForm>();

  const create = async (data: BlogForm): Promise<void> => {
    const { title, summary, category_id } = data;
    if (!content || !markdown) {
      Toaster.showWarning('콘텐트를 입력해주세요.');
      return;
    }
    try {
      const res = await createBlog({
        title,
        summary,
        content: replacePostContent(content),
        category_id: category_id || 0,
        markdown: replacePostContent(markdown),
      });

      if (res.status) {
        router.push('/blog');
        Toaster.showSuccess(res?.massage || '게시물이 등록 되었습니다.');
      }
    } catch (err) {
      Toaster.showError('블로그 생성 중 오류가 발생하였습니다.');
    }
  };

  return {
    register,
    errors,
    onSubmit: handleSubmit(create),
    editorRef,
    handleEditorChange,
    categoryOptions,
  };
};
