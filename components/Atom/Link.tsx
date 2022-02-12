import React from 'react';
import styled, { css } from 'styled-components';
import Link from 'next/link';

interface Props {
  children?: React.ReactNode;
  href?: any;
  as?: string;
  margin?: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  fontFamily?: string;
  size?: number;
  hover?: {
    color?: string;
  };
}

const Links = (props: Props) => {
  return (
    <Link href={props.href} passHref as={props.as}>
      <StyledLink size={props.size} fontFamily={props.fontFamily} margin={props.margin} hover={props.hover}>
        {props.children}
      </StyledLink>
    </Link>
  );
};

const StyledLink = styled.a<Props>`
  color: #333333;
  text-decoration: none;
  ${(props) =>
    props.fontFamily &&
    css`
      font-family: ${props.fontFamily};
    `};

  margin-top: ${(props) => props.margin?.top || '0'};
  margin-bottom: ${(props) => props.margin?.bottom || '0'};
  margin-left: ${(props) => props.margin?.left || '0'};
  margin-right: ${(props) => props.margin?.right || '0'};

  font-size: ${(props) => `${props.size}px` || '12px'};

  ${(props) => {
    if (props?.hover) {
      return css`
        &:hover {
          & > p {
            color: ${props?.hover?.color};
          }
        }
      `;
    }
  }}
`;
export default Links;
