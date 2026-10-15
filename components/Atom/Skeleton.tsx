import styled, { css, keyframes } from 'styled-components';

interface Props {
  width: string | number;
  height: number;
  margin?: string;
  radius?: number;
  // light: 어두운 배경(배너 이미지 등) 위에 표시할 때
  tone?: 'default' | 'light';
}

const shimmer = keyframes`
  0% {
    background-position: 100% 0;
  }
  100% {
    background-position: -100% 0;
  }
`;

const tones = {
  default: 'linear-gradient(90deg, #e6e6e6 25%, #f2f2f2 50%, #e6e6e6 75%)',
  light: 'linear-gradient(90deg, rgba(255, 255, 255, 0.25) 25%, rgba(255, 255, 255, 0.45) 50%, rgba(255, 255, 255, 0.25) 75%)',
};

// 로딩 중 콘텐츠 자리를 표시하는 막대
const Skeleton = styled.div<Props>`
  ${({ width, height, margin, radius, tone }) => css`
    width: ${typeof width === 'number' ? `${width}px` : width};
    height: ${height}px;
    margin: ${margin || '0'};
    border-radius: ${radius ?? 4}px;
    background: ${tones[tone ?? 'default']};
  `}
  background-size: 200% 100%;
  animation: ${shimmer} 1.4s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export default Skeleton;
