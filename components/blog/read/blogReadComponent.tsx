import React, { useEffect, useState } from 'react';
import Parser from 'html-react-parser';
import { blogs } from '@/interfaces/models/blog';
import Prism from 'prismjs';
import { DiscussionEmbed } from 'disqus-react';
import moment from 'moment';
import Router from 'next/router';
import Head from 'next/head';
import useStores from '@/hooks/use-stores';
import { Box, Background, HeaderText, Text, PostContent } from '@/components/Atom';
import { PostSettingBox } from '@/components/Molecules';

interface Props {
  blogItem?: blogs;
  deleteBlog: (blog_id: number) => void;
}
const BlogReadComponent: React.FC<Props> = (props: Props) => {
  const { blogItem, deleteBlog } = props;
  const { userStore } = useStores();
  const [updateState, setUpdateState] = useState<boolean>(false);

  useEffect(() => {
    if (process.browser) {
      if (blogItem?.user_id === userStore?.userInfo?.user_id) {
        setUpdateState(true);
      } else {
        setUpdateState(false);
      }
    }
  }, [blogItem]);

  useEffect(() => {
    Prism.highlightAll();
  });

  const deleteHandler = () => {
    if (window.confirm('삭제하시겠습니까?')) {
      deleteBlog(Number(blogItem?.blog_id));
    }
  };

  const updateHandler = () => {
    Router.push({
      pathname: '/blog/update',
      query: {
        blog_id: blogItem?.blog_id,
      },
    });
  };
  return (
    <Box>
      <Head>
        <title>{blogItem?.title}</title>
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
              {blogItem?.title}
            </HeaderText>
            <Text margin={{ bottom: '10px' }} padding={{ top: '50px' }} color="#fff" fontWeight="bold">
              {blogItem?.name}
            </Text>
            <Text size={18} fontWeight="bold" color="#fff">
              {blogItem?.created_at && moment(blogItem.created_at).format('YYYY-MM-DD')}
            </Text>
            {updateState && <PostSettingBox updateHandler={updateHandler} deleteHandler={deleteHandler} />}
          </Box>
        </Box>
      </Background>
      <Box width={980} margin={{ left: 'auto', right: 'auto' }} screen={1010}>
        <PostContent>{blogItem && Parser(blogItem.content)}</PostContent>
        <Box>
          <DiscussionEmbed
            shortname={'choitech-1'}
            config={{
              url: `https://c-tech.vercel.app/blog/${blogItem?.blog_id}`,
              identifier: '',
              title: 'this page title',
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default BlogReadComponent;
