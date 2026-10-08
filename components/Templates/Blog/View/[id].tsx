'use client';

import Parser from 'html-react-parser';
import { DiscussionEmbed } from 'disqus-react';
import moment from 'moment';
import { Box, Background, HeaderText, Text, PostContent } from '@/components/Atom';
import { PostSettingBox } from '@/components/Molecules';
import { useBlogView } from './view.hook';

const ViewBlogComponent = (): JSX.Element => {
  const { blogItem, isOwner, onHide, onUpdate } = useBlogView();

  return blogItem ? (
    <Box>
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
              {blogItem?.created_at && moment(blogItem?.created_at).format('YYYY-MM-DD')}
            </Text>
            {isOwner && <PostSettingBox updateHandler={onUpdate} hideHandler={onHide} />}
          </Box>
        </Box>
      </Background>
      <Box width={980} margin={{ left: 'auto', right: 'auto' }} screen={{ size: 1010, calc: '30px' }}>
        <PostContent>{Parser(blogItem?.content)}</PostContent>
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
  ) : (
    <Box style={{ minHeight: '100vh' }}></Box>
  );
};

export default ViewBlogComponent;
