import React from 'react';
import styled from 'styled-components';

interface Props {
  children?: React.ReactNode;
}

const PostContent = (props: Props) => {
  const { children } = props;
  return <StyledPostContent>{children}</StyledPostContent>;
};

const StyledPostContent = styled.div`
  height: 100%;
  margin: 50px 0px 30px 0px;
  max-width: 100%;
  img {
    width: 100%;
  }
  blockquote {
    border-left: 4px solid #e5e5e5;
    margin-block-start: 0px;
    margin-inline-start: 0px;
    padding: 5px 0px;
    & > p {
      margin: 0px 0px 0px 20px;
    }
  }
  a {
    color: rgb(65, 131, 196);
    text-decoration: none;
  }
`;
export default PostContent;
