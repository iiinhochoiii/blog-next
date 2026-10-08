import { useCallback, useEffect, useRef, useState } from 'react';
import { Editor } from '@toast-ui/react-editor';
import { useCategoriesQuery } from '@/queries/categories';
import { getErrorMessage, Toaster } from '@/utils/common';

// 블로그 작성/수정 화면 공통: TUI 에디터의 내용(HTML/Markdown)을 상태로 관리한다.
// enabled 가 false 인 동안에는 에디터 변경을 무시한다. (수정 화면에서 게시글 데이터로 초기화되기 전)
export const useBlogEditor = (options?: { enabled?: boolean }) => {
  const enabled = options?.enabled ?? true;
  const editorRef = useRef<Editor>();
  const [content, setContent] = useState('');
  const [markdown, setMarkdown] = useState('');

  const handleEditorChange = useCallback(() => {
    if (!enabled || !editorRef.current) {
      return;
    }

    const instance = editorRef.current.getInstance();

    // 기존 이미지 업로드 기능 제거
    instance.removeHook('addImageBlobHook');

    // 이미지 파일 첨부 대신 URL 입력만 허용
    instance.addHook('addImageBlobHook', (blob) => {
      if (blob) {
        alert('이미지 첨부는 URL 입력만 가능합니다.');
        return;
      }
    });

    setContent(instance.getHtml());
    setMarkdown(instance.getMarkdown());
  }, [enabled]);

  const setEditorValue = useCallback((value: { content: string; markdown: string }) => {
    setContent(value.content);
    setMarkdown(value.markdown);
  }, []);

  return { editorRef, content, markdown, handleEditorChange, setEditorValue };
};

// 블로그 작성/수정 화면 공통: 카테고리 선택 옵션
export const useCategoryOptions = () => {
  const { data: categories, error } = useCategoriesQuery();

  useEffect(() => {
    if (error) {
      console.log(error);
      Toaster.showError(getErrorMessage(error) || '오류가 발생하였습니다.');
    }
  }, [error]);

  return categories?.status ? categories.data : [];
};
