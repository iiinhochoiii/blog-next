import React from 'react';
import styled from 'styled-components';
import { Blog } from '@/interfaces/models/blog';
import { Link, Text, Button, Flex } from '@/components/Atom';
import TextTruncate from 'react-text-truncate'; // recommend
import Router from 'next/router';
import moment from 'moment';

const PostArticle = (props: Blog) => {
  const { blog_id, title, summary, blog_type, created_at, name } = props;

  const moveBlogTypeHandler = (type?: string) => {
    Router.push({
      pathname: '/blog',
      query: {
        title: type,
      },
    });
  };

  return (
    <StyledArticle key={blog_id}>
      <Link href="/blog/[id]" as={`/blog/${blog_id}`} hover={{ color: '#0085a1' }}>
        {/* title */}
        <Text size={22} fontWeight={400} margin={{ top: '10px', bottom: '10px' }} screen={{ width: 690, size: 18 }}>
          {title}
        </Text>
        {/* summary */}
        <Text margin={{ bottom: '10px' }} size={18} lineHeight={30} screen={{ width: 690, size: 16 }}>
          <TextTruncate line={2} element="span" truncateText="…" text={summary} />
        </Text>
      </Link>
      <Button
        onClick={() => moveBlogTypeHandler(blog_type)}
        height={25}
        size={12}
        backgroundColor={'rgb(229, 229, 229)'}
        color={'#333'}
        fontWeight={200}
        radius={10}
        padding={{
          top: '5px',
          bottom: '5px',
          left: '10px',
          right: '10px',
        }}
      >
        # {blog_type}
      </Button>
      <Flex justify="space-between" margin={{ top: '15px' }}>
        <Text size={14}>{moment(created_at).format('YYYY-MM-DD')}</Text>
        <Text size={14}>{name}</Text>
      </Flex>
    </StyledArticle>
  );
};

const StyledArticle = styled.article`
  border-bottom: 1px solid #b4b2b2;
  padding: 15px 0px;
`;
export default PostArticle;
