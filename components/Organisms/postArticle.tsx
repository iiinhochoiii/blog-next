import React from 'react';
import styled, { css } from 'styled-components';
import { Blog } from '@/interfaces/models/blog';
import { Link, Text, Button, Flex } from '@/components/Atom';
import { ArticleOptionBox } from '@/components/Molecules';
import TextTruncate from 'react-text-truncate'; // recommend
import { useRouter } from 'next/router';
import moment from 'moment';

interface Props extends Blog {
  abled?: boolean; // 글쓴이를 클릭 했을 때 메뉴 활성화 여부
  hideAction?: boolean; // 게시글 숨기기 및 활성화에 대한 여부
}

const PostArticle = (props: Props) => {
  const { blog_id, title, summary, blog_type, created_at, name, user_id, show_status, abled = false, hideAction = false } = props;
  const router = useRouter();

  const moveBlogTypeHandler = (type?: string) => {
    const { userId } = router.query;

    router.push({
      pathname: userId ? `/blog/${userId}` : '/blog',
      query: {
        title: type,
        page: 1,
      },
    });
  };

  return (
    <StyledArticle key={blog_id}>
      <Link href="/blog/[userId]/[id]" as={`/blog/${user_id}/${blog_id}`} hover={{ color: '#0085a1' }}>
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
        <StyledArticleNameBox abled={abled}>
          <Text className="article-user-name" size={14}>
            {name}
          </Text>
          <ArticleOptionBox
            className="article-option-box"
            routeBlog={(): void => {
              router.push({
                pathname: `/blog/${user_id}`,
                query: {
                  page: 1,
                },
              });
            }}
            routeContact={(): void => {
              router.push({
                pathname: '/contact',
                query: {
                  receiver: user_id,
                },
              });
            }}
            hideAction={hideAction}
            show_status={show_status}
          />
        </StyledArticleNameBox>
      </Flex>
    </StyledArticle>
  );
};

const StyledArticle = styled.article`
  position: relative;
  border-bottom: 1px solid #b4b2b2;
  padding: 15px 0px;
`;

const StyledArticleNameBox = styled.div<Props>`
  .article-option-box {
    display: none;
  }

  ${(props) => {
    if (props.abled) {
      return css`
        cursor: pointer;
        &:hover {
          & > .article-option-box {
            display: block;
          }
        }
      `;
    }
  }}
`;

export default PostArticle;
