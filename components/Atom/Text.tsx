import React from 'react';
import styled from 'styled-components';

interface Props {
  children?: React.ReactNode;
  size?: number;
  margin?: string;
  style?: React.CSSProperties;
}
const Text = (props: Props) => {
  return <StyledText style={props.style}>{props.children}</StyledText>;
};

const StyledText = styled.p`
  font-size: 12px;
`;

export default Text;
