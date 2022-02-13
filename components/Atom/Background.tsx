import React from 'react';
import styled, { css } from 'styled-components';

interface Props {
  children?: React.ReactNode;
  url?: string;
  position?: string;
  background?: string;
}

const Background = (props: Props) => {
  const { children, url, position, background } = props;
  return (
    <BackgroundWrap url={url} position={position} background={background}>
      {children}
    </BackgroundWrap>
  );
};

const BackgroundWrap = styled.div<Props>`
  height: 300px;
  background-size: cover !important;
  background-image: url(${(props) => props.url}) !important;
  ${(props) =>
    props.position &&
    css`
      position: ${props.position};
    `};

  ${(props) =>
    props.background &&
    css`
      background: ${props.background};
    `}
`;
export default Background;
