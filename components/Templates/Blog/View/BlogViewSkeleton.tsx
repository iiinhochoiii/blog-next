import styled from 'styled-components';
import { Box, Background, Skeleton } from '@/components/Atom';

// 본문 문단 자리 (줄 길이를 다르게 해 문단처럼 보이게 함)
const PARAGRAPHS = [
  ['100%', '96%', '88%', '60%'],
  ['100%', '92%', '97%', '72%'],
  ['100%', '85%', '40%'],
];

// 블로그 상세 로딩 중 표시: 배너(제목/작성자/날짜)와 본문 문단 자리
const BlogViewSkeleton = () => {
  return (
    <Box role="status" aria-label="게시글을 불러오는 중">
      <Background url={'/images/blog_background.jpg'} background="no-repeat center" position="relative">
        <Box
          position="absolute"
          backgroundColor="rgba(0, 0, 0, 0.3)"
          textAlign="center"
          padding={{ top: '80px' }}
          style={{ top: 0, bottom: 0, left: 0, right: 0 }}
        >
          <StyledBanner aria-hidden="true">
            {/* title (26px) */}
            <Skeleton tone="light" width="50%" height={30} margin="4px 0 0" />
            {/* name (12px) */}
            <Skeleton tone="light" width={60} height={12} margin="55px 0 0" />
            {/* date (18px) */}
            <Skeleton tone="light" width={100} height={18} margin="17px 0 0" />
          </StyledBanner>
        </Box>
      </Background>
      <Box width={980} margin={{ left: 'auto', right: 'auto' }} screen={{ size: 1010, calc: '30px' }}>
        <StyledContent aria-hidden="true">
          {PARAGRAPHS.map((lines, paragraphIndex) => (
            <StyledParagraph key={paragraphIndex}>
              {lines.map((width, lineIndex) => (
                <Skeleton key={lineIndex} width={width} height={16} />
              ))}
            </StyledParagraph>
          ))}
        </StyledContent>
      </Box>
    </Box>
  );
};

// 실제 배너 텍스트와 같이 980px 영역 기준 좌측 정렬
const StyledBanner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 980px;
  margin: 0 auto;
`;

// PostContent 의 margin(50px 0 30px)과 맞춤
const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin: 50px 0px 30px 0px;
  min-height: 60vh;
`;

const StyledParagraph = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export default BlogViewSkeleton;
