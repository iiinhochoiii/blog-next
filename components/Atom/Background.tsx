import React from 'react';
import styled from 'styled-components';

interface Props {
  children?: React.ReactNode;
  url?: string;
}

const Background = (props: Props) => {
  const { children, url } = props;
  return <BackgroundWrap url={url}>{children}</BackgroundWrap>;
};

const BackgroundWrap = styled.div<Props>`
  height: 300px;
  background-size: cover;
  background-image: url(${(props) => props.url});
`;
export default Background;
