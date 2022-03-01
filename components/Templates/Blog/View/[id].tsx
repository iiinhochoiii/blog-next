import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import useStores from '@/hooks/use-stores';
import { Toaster } from '@/utils/common';
import { useRouter } from 'next/router';
import Parser from 'html-react-parser';
import Prism from 'prismjs';
import { DiscussionEmbed } from 'disqus-react';
import moment from 'moment';
import Head from 'next/head';
import { Box, Background, HeaderText, Text, PostContent } from '@/components/Atom';
import { PostSettingBox } from '@/components/Molecules';

const ViewBlogComponent = observer((): JSX.Element => {
  const router = useRouter();
  const blog_id = router.query.id;
  const { blogStore, userStore } = useStores();
  const [updateState, setUpdateState] = useState<boolean>(false);

  useEffect(() => {
    getBlogItem();
  }, []);

  useEffect(() => {
    if (process.browser) {
      if (blogStore.blogItem?.user_id === userStore?.userInfo?.user_id) {
        setUpdateState(true);
      } else {
        setUpdateState(false);
      }
    }
  }, [blogStore.blogItem]);

  useEffect(() => {
    Prism.highlightAll();
  });

  const deleteHandler = () => {
    if (window.confirm('삭제하시겠습니까?')) {
      deleteBlog(Number(blogStore.blogItem?.blog_id));
    }
  };

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

  const updateHandler = () => {
    router.push({
      pathname: '/blog/update',
      query: {
        blog_id: blogStore.blogItem?.blog_id,
      },
    });
  };

  return (
    <Box>
      <Head>
        <title>{blogStore.blogItem?.title}</title>
      </Head>
      <Background url={'/images/blog_background.jpg'} background="no-repeat center" position="relative">
        <Box
          position="absolute"
          backgroundColor="rgba(0, 0, 0, 0.3)"
          textAlign="center"
          padding={{ top: '80px' }}
          style={{ top: 0, bottom: 0, left: 0, right: 0 }}
        >
          <Box width={980} margin={{ left: 'auto', right: 'auto' }}>
            <HeaderText size={26} color="#fff">
              {blogStore.blogItem?.title}
            </HeaderText>
            <Text margin={{ bottom: '10px' }} padding={{ top: '50px' }} color="#fff" fontWeight="bold">
              {blogStore.blogItem?.name}
            </Text>
            <Text size={18} fontWeight="bold" color="#fff">
              {blogStore.blogItem?.created_at && moment(blogStore.blogItem.created_at).format('YYYY-MM-DD')}
            </Text>
            {updateState && <PostSettingBox updateHandler={updateHandler} deleteHandler={deleteHandler} />}
          </Box>
        </Box>
      </Background>
      <Box width={980} margin={{ left: 'auto', right: 'auto' }} screen={{ size: 1010, calc: '30px' }}>
        <PostContent>{blogStore.blogItem && Parser(blogStore.blogItem.content)}</PostContent>
        <Box>
          <DiscussionEmbed
            shortname={'choitech-1'}
            config={{
              url: `https://c-tech.vercel.app/blog/${blogStore.blogItem?.blog_id}`,
              identifier: '',
              title: 'this page title',
            }}
          />
        </Box>
      </Box>
    </Box>
  );
});

export default ViewBlogComponent;