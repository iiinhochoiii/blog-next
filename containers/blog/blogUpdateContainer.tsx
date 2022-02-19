import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import BlogUpdateComponent from '@/components/blog/update';
import Router from 'next/router';
import useStores from '@/hooks/use-stores';
import { Toaster } from '@/utils/common';
import { getToken } from '@/utils/auth';

interface Props {
  query: any;
}

const BlogUpdateContainer = observer((props: Props) => {
  const { query } = props;
  const { blogStore, userStore } = useStores();
  const token = getToken();

  useEffect(() => {
    if (process.browser) {
      if (userStore?.userInfo?.user_id !== 1) {
        Router.push('/');
      }
    }
    if (query.blog_id) {
      getBlogItem(query.blog_id);
    }
  }, []);
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
          Router.back();
        } else {
          Toaster.showWarning(res?.msg);
        }
      } catch (err) {
        Toaster.showError('데이터를 변경 중 에러가 발생하였습니다.');
      }
    }
  };

  return <BlogUpdateComponent blogItem={blogStore.blogItem} updateBlog={updateBlog} />;
});

export default BlogUpdateContainer;
