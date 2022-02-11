import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

interface Props extends InputHTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  margin?: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  justify?: string;
}
const Flex = (props: Props) => {
  const { children, margin, justify } = props;

  return (
    <StyledFlex {...props} margin={margin} justify={justify}>
      {children}
    </StyledFlex>
  );
};

const StyledFlex = styled.div<Props>`
  margin-top: ${(props) => props.margin?.top || '0'};
  margin-bottom: ${(props) => props.margin?.bottom || '0'};
  margin-left: ${(props) => props.margin?.left || '0'};
  margin-right: ${(props) => props.margin?.right || '0'};

  display: flex;
  justify-content: ${(props) => props.justify};
`;
export default Flex;
