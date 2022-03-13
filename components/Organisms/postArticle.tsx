import React from 'react';
import styled from 'styled-components';
import { Blog } from '@/interfaces/models/blog';
import { Link, Text, Button, Flex } from '@/components/Atom';
import TextTruncate from 'react-text-truncate'; // recommend
import { useRouter } from 'next/router';
import moment from 'moment';

const PostArticle = (props: Blog) => {
  const { blog_id, title, summary, blog_type, created_at, name, user_id } = props;
  const router = useRouter();

  const moveBlogTypeHandler = (type?: string) => {
    router.push({
      pathname: router.pathname === '/blog/[userId]' ? `blog/@${user_id}` : '/blog',
      query: {
        title: type,
        page: 1,
      },
    });
  };

  return (
    <StyledArticle key={blog_id}>
      <Link href="/blog/[userId]/[id]" as={`/blog/@${user_id}/${blog_id}`} hover={{ color: '#0085a1' }}>
        {/* title */}
        <Text size={22} fontWeight={400} margin={{ top: '10px', bottom: '10px' }} screen={{ width: 690, size: 18 }}>
          {title}
        </Text>
        {/* summary */}
        <Text margin={{ bottom: '10px' }} size={18} lineHeight={30} screen={{ width: 690, size: 16 }}>
          <TextTruncate line={2} element="span" truncateText="…" text={summary} />
        </Text>
      </Link>
      <Button onClick={() => moveBlogTypeHandler(blog_type)} radius={10} className="-btn_post_article">
        # {blog_type}
      </Button>
      <Flex justify="space-between" margin={{ top: '15px' }}>
        <Text size={14}>{moment(created_at).format('YYYY-MM-DD')}</Text>
        <Text
          size={14}
          style={{
            cursor: 'pointer',
          }}
          onClick={() =>
            router.push({
              pathname: `/blog/@${user_id}`,
              query: {
                page: 1,
              },
            })
          }
        >
          {name}
        </Text>
      </Flex>
    </StyledArticle>
  );
};

const StyledArticle = styled.article`
  border-bottom: 1px solid #b4b2b2;
  padding: 15px 0px;
`;
export default PostArticle;
