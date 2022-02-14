import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react';
import BlogComponent from '@/components/blog';
import useStores from '@/hooks/use-stores';
import { Toaster } from '@/utils/common';

interface Props {
  title?: string | string[];
  page?: string | string[];
}

const BlogContainer = observer((props: Props): JSX.Element => {
  const { title, page } = props;
  const { blogStore } = useStores();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    initBlog();
  }, [title, page]);

  const initBlog = async () => {
    try {
      setLoading(true);

      if (title) {
        const res = await blogStore.getSearchBlogList(String(title));
        blogStore.setBlogs(res.data);
      } else {
        const res = await blogStore.getBlogList(String(page || 1));
        blogStore.setBlogs(res.data);
        blogStore.setPage(res.page);
      }
      setLoading(false);
    } catch (err) {
      Toaster.showWarning('블로그를 불러오는 중 오류가 발생하였습니다.');
    }
  };

  return <BlogComponent blogs={blogStore.blogs} page={blogStore.page} pageNum={Number(page)} title={title} loading={loading} />;
});

export default BlogContainer;
