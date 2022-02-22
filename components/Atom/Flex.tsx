import React, { InputHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

interface Props extends InputHTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  margin?: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  justify?: string;
  screen?: {
    width?: number;
    flexWrap?: string;
  };
}
const Flex = (props: Props) => {
  const { children } = props;

  return <StyledFlex {...props}>{children}</StyledFlex>;
};

const StyledFlex = styled.div<Props>`
  margin-top: ${(props) => props.margin?.top || '0'};
  margin-bottom: ${(props) => props.margin?.bottom || '0'};
  margin-left: ${(props) => props.margin?.left || '0'};
  margin-right: ${(props) => props.margin?.right || '0'};

  display: flex;
  justify-content: ${(props) => props.justify};

  ${(props) => {
    if (props?.screen) {
      if (props?.screen?.flexWrap) {
        return css`
          @media screen and (max-width: ${`${props?.screen?.width}px` || '690px'}) {
            flex-wrap: ${props?.screen?.flexWrap};
          } ;
        `;
      }
    }
  }}

  &.modal_header {
    border-bottom: 2px solid #e5e5e5;
    padding-bottom: 20px;
  }
`;
export default Flex;
