import React, { HTMLAttributes } from 'react';
import { observer } from 'mobx-react';
import useStores from '@/hooks/use-stores';
import styled, { css } from 'styled-components';
import { Blog } from '@/interfaces/models/blog';
import { Link, Text, Button, Flex } from '@/components/Atom';
import { ArticleOptionBox } from '@/components/Molecules';
import TextTruncate from 'react-text-truncate'; // recommend
import { useRouter } from 'next/router';
import moment from 'moment';
import { Toaster } from '@/utils/common';

interface Props extends HTMLAttributes<HTMLDivElement> {
  abled?: boolean; // 글쓴이를 클릭 했을 때 메뉴 활성화 여부
  blog: Blog;
  doneCallback?: () => Promise<void>;
}

const PostArticle = observer((props: Props) => {
  const { blog, doneCallback } = props;
  const { blogStore } = useStores();
  const router = useRouter();

  const hideBlog = async (blog_id: number, status: boolean): Promise<void> => {
    try {
      const params = {
        blog_id: blog_id,
        hideStatus: status,
      };
      const res = await blogStore.hideBlog(params);
      if (res.status) {
        if (doneCallback) {
          doneCallback();
        }
        Toaster.showSuccess(res?.msg || '상태가 변경되었습니다.');
      }
    } catch (err) {
      console.log(err);
    }
  };

  const deleteBlog = async (): Promise<void> => {
    if (window.confirm('블로그를 삭제하시겠습니까?')) {
      try {
        const res = await blogStore.deleteBlog(blog.blog_id);
        if (res?.status) {
          if (doneCallback) {
            doneCallback();
          }
          Toaster.showSuccess(res?.msg || '게시글이 삭제되었습니다.');
        }
      } catch (err) {
        console.log(err);
        Toaster.showWarning('블로그를 삭제하는 중 오류가 발생하였습니다.');
      }
    }
  };

  return (
    <StyledArticle key={blog.blog_id}>
      <Link href="/blog/[userId]/[id]" as={`/blog/${blog?.user_id}/${blog?.blog_id}`} hover={{ color: '#0085a1' }}>
        {/* title */}
        <Text size={22} fontWeight={400} margin={{ top: '10px', bottom: '10px' }} screen={{ width: 690, size: 18 }}>
          {blog?.show_status && blog?.show_status === 'HIDE_STATUS' && (
            <span style={{ fontSize: '14px', fontWeight: 'bold', color: 'rgb(18,184,134)' }}>{'[숨김] '}</span>
          )}
          {blog?.title}
        </Text>
        {/* summary */}
        <Text margin={{ bottom: '10px' }} size={18} lineHeight={30} screen={{ width: 690, size: 16 }}>
          <TextTruncate line={2} element="span" truncateText="…" text={blog?.summary} />
        </Text>
      </Link>
      <Button disabled={true} radius={10} className="-btn_post_article">
        # {blog?.blog_type}
      </Button>
      <Flex justify="space-between" margin={{ top: '15px' }}>
        <Text size={14}>{moment(blog?.created_at).format('YYYY-MM-DD')}</Text>
        <StyledArticleNameBox {...props}>
          <Text className="article-user-name" size={14}>
            {blog?.name}
          </Text>
          <ArticleOptionBox
            className="article-option-box"
            routeBlog={(): void => {
              router.push({
                pathname: `/blog/${blog?.user_id}`,
                query: {
                  page: 1,
                },
              });
            }}
            routeContact={(): void => {
              router.push({
                pathname: '/contact',
                query: {
                  receiver: blog.user_id,
                },
              });
            }}
            show_status={blog?.show_status}
            hide={(status: boolean): void => {
              hideBlog(blog.blog_id, status);
            }}
            deleteBlog={() => deleteBlog()}
          />
        </StyledArticleNameBox>
      </Flex>
    </StyledArticle>
  );
});

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
