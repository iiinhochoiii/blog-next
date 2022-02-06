import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import BlogReadComponent from '@/components/blog/read';
import useStores from '@/hooks/use-stores';
import { Toaster } from '@/utils/common';
import { useRouter } from 'next/router';

const BlogReadContainer = observer(() => {
  const router = useRouter();
  const blog_id = router.query.id;
  const { blogStore } = useStores();

  useEffect(() => {
    getBlogItem();
  }, []);

  const getBlogItem = async () => {
    try {
      const res = await blogStore.getBlogItem(Number(blog_id));
      blogStore.setBlogItem(res.data);
    } catch (err) {
      Toaster.showError('데이터를 불러오는 중 에러가 발생하였습니다.');
    }
  };

  const deleteBlog = async (blog_id: number) => {
    try {
      const res = await blogStore.deleteBlog(blog_id);
      if (res?.status) {
        Toaster.showSuccess('삭제되었습니다.');
        router.back();
      }
    } catch (err) {
      Toaster.showError('삭제 중 에러가 발생하였습니다.');
    }
  };

  return <BlogReadComponent blogItem={blogStore.blogItem} deleteBlog={deleteBlog} />;
});

export default BlogReadContainer;
