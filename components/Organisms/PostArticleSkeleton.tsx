import styled from 'styled-components';
import { Skeleton } from '@/components/Atom';

// PostArticle 과 같은 배치(제목 1줄, 요약 2줄, 카테고리 태그, 날짜/작성자)로 로딩 자리를 잡아
// 데이터가 들어왔을 때 레이아웃이 흔들리지 않도록 한다.
const PostArticleSkeleton = () => {
  return (
    <StyledArticle aria-hidden="true">
      {/* title: 제목 영역(위아래 margin 10px + 높이 32px) 가운데 */}
      <StyledTitleBar width="55%" height={24} margin="14px 0" />
      {/* summary: line-height 30px 2줄 + 태그까지 간격 */}
      <Skeleton width="100%" height={16} margin="7px 0" />
      <Skeleton width="75%" height={16} margin="7px 0 20px" />
      {/* category tag */}
      <Skeleton width={72} height={25} radius={10} />
      {/* date / name */}
      <StyledRow>
        <Skeleton width={84} height={14} />
        <Skeleton width={56} height={14} />
      </StyledRow>
    </StyledArticle>
  );
};

// flex column 으로 막대 사이 margin 이 겹치지(collapse) 않게 해서 실제 카드 높이와 맞춘다.
const StyledArticle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-bottom: 1px solid #b4b2b2;
  padding: 15px 0px;
`;

const StyledRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  height: 20px;
  margin-top: 15px;
`;

// PostArticle 제목은 690px 이하에서 22px → 18px 로 작아지므로 제목 영역 높이도 맞춘다.
const StyledTitleBar = styled(Skeleton)`
  @media screen and (max-width: 690px) {
    height: 20px;
    margin: 13px 0;
  }
`;

export default PostArticleSkeleton;
