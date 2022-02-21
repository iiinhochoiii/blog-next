import React from 'react';
import styled from 'styled-components';

interface Props {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
const Table = (props: Props) => {
  const { children } = props;
  return <StyledTable {...props}>{children}</StyledTable>;
};

const StyledTable = styled.table<Props>`
  margin-top: 30px;
  width: 100%;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
  border-spacing: 0px;
  & > thead {
    & > tr {
      height: 50px;
      text-align: center;
    }
  }
  & > tbody {
    & > tr {
      & > td {
        text-align: center;
        height: 50px;
        font-size: 14px;
        border-top: 1px solid gray;
      }
    }
  }
`;
export default Table;
