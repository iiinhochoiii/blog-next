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

interface Props {
  blogItem?: blogs;
  deleteBlog: (blog_id: number) => void;
}
const BlogReadComponent: React.FC<Props> = (props: Props) => {
  const { blogItem, deleteBlog } = props;
  const { userStore } = useStores();
  const [updateState, setUpdateState] = useState<boolean>(false);
  const [settingState, setSettingState] = useState<boolean>(false);

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
            {updateState && (
              <div className="blog_update_container">
                <p onClick={() => setSettingState(!settingState)}>설정</p>
                {settingState && (
                  <div>
                    <p onClick={updateHandler}>수정</p>
                    <p onClick={deleteHandler}>삭제</p>
                  </div>
                )}
              </div>
            )}
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

// const BlogBackground = styled.div`
//   height: 300px;
//   background-size: 100% 300px;
//   background: no-repeat center;
//   position: relative;
//   background-image: url(${blog_background});
//   & > div {
//     background: rgba(0, 0, 0, 0.3);
//     position: absolute;
//     top: 0;
//     bottom: 0;
//     left: 0;
//     right: 0;

//     & > div {
//       width: 980px;
//       max-width: 100%;
//       margin: 0 auto;
//       & > h1 {
//         font-size: 26px;
//         padding-top: 80px;
//         margin: 0;
//         color: #fff;
//       }
//       & > p {
//         margin: 0px 0px 10px 0px;
//         padding-top: 50px;
//         font-size: 16px;
//         font-weight: bold;
//         color: #fff;
//       }
//       & > span {
//         font-size: 18px;
//         font-weight: bold;
//         color: #fff;
//       }
//       & > .blog_update_container {
//         padding-top: 30px;
//         position: relative;
//         & > p {
//           border: 1px solid #fff;
//           color: #fff;
//           font-weight: bold;
//           padding: 5px 0px;
//           width: 100px;
//           margin: 0;
//           border-radius: 10px;
//           font-size: 14px;
//           cursor: pointer;
//           text-align: center;
//         }
//         & > div {
//           position: absolute;
//           margin-top: 10px;
//           width: 100px;
//           background-color: #fff;
//           border: 1px solid rgb(214, 214, 214);
//           padding: 5px;
//           & > p {
//             font-size: 12px;
//             text-align: center;
//             cursor: pointer;
//             padding: 10px 0px;
//             margin: 0;
//             &:hover {
//               background-color: rgb(248, 248, 248);
//             }
//           }
//         }
//       }
//     }
//   }
//   @media screen and (max-width: 1010px) {
//     & > div {
//       & > div {
//         width: calc(100% - 30px);
//       }
//     }
//   }

//   @media screen and (max-width: 690px) {
//     & > div {
//       & > div {
//         & > h1 {
//           font-size: 22px;
//         }
//         & > p,
//         span {
//           font-size: 14px;
//         }
//       }
//     }
//   }
// `;

export default BlogReadComponent;
