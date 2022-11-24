import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react';
import useStores from '@/hooks/use-stores';
import { Toaster } from '@/utils/common';
import { Box, HeaderText, Flex, Text, Background, Button } from '@/components/Atom';
import { PostArticle } from '@/components/Organisms';
import { CircularProgress } from '@material-ui/core';
import { useRouter } from 'next/router';

const HomeComponent = observer((): JSX.Element => {
  const router = useRouter();
  const { blogStore } = useStores();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getBlogList();
  }, []);

  const getBlogList = async (): Promise<void> => {
    try {
      setLoading(true);
      const res = await blogStore.getSearchBlogList({
        page: 1,
      });
      blogStore.setBlogs(res.data);
      setLoading(false);
    } catch (err) {
      Toaster.showError('정보를 불러오는중 에러가 발생하였습니다.');
    }
  };

  return (
    <Box>
      <Background url={'./images/main_background.jpg'}>
        <HeaderText position="relative" textAlign="center">
          최인호의 Dev Blog 입니다.
        </HeaderText>
      </Background>

      <Box screen={{ size: 1010, calc: '30px' }} margin={{ left: 'auto', right: 'auto' }} width="980px">
        <Box margin={{ top: '100px' }}>
          <HeaderText color="#333" fontWeight={400} size={28}>
            Try the various services provided by Choi Tech.
          </HeaderText>
          <Flex margin={{ top: '50px' }}>
            <Box>
              <Text size={22} margin={{ bottom: '10px' }} fontWeight={400} screen={{ width: 690, size: 18 }}>
                지식 공유
              </Text>
              <Text margin={{ top: '15px', bottom: '15px' }} size={16} fontWeight={300} lineHeight={28} screen={{ width: 690, size: 14 }}>
                Front-end 프레임워크인 React에 관련된 기술 및 경험을 공유 합니다. 주로 개발 환경 구성 및, 이슈 대응, 문제 해결 등 다양한 주제를 다루고 있습니다.
                또한, 공유한 지식에 대하여, 질의 응답 등을 이용 할 수 있습니다.
              </Text>
            </Box>
          </Flex>
        </Box>
      </Box>

      <Box margin={{ top: '100px' }} backgroundColor="rgb(248, 248, 248)">
        <Box padding={{ top: '50px', bottom: '100px' }} width={980} margin={{ left: 'auto', right: 'auto' }} screen={{ size: 1010, calc: '30px' }}>
          <Box>
            <HeaderText size={26} fontWeight={400} color="rgb(18, 184, 134)">
              Recently Posts
            </HeaderText>
          </Box>
          {loading ? (
            <CircularProgress />
          ) : (
            <Box margin={{ top: '20px' }}>{blogStore?.blogs?.map((item, index) => index < 3 && <PostArticle key={item?.blog_id} blog={item} />)}</Box>
          )}
          <Flex margin={{ top: '30px' }}>
            <Button onClick={() => router.push('/blog')} width={150} margin={{ left: 'auto' }}>
              더보기
            </Button>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
});

export default HomeComponent;
