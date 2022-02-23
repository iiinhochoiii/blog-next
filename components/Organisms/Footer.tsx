import React from 'react';
import styled from 'styled-components';
import { Box, Text, Link } from '@/components/Atom';
import GitHubIcon from '@material-ui/icons/GitHub';

const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterContent>
        <Box className="footer">
          <Text size={12} lineHeight={20}>
            본 웹사이트는 개인 블로그 목적으로 제작되었습니다.
          </Text>
          <Text size={12} lineHeight={20}>
            문의 사항 및 건의 사항은 dlsgh120@gmail.com 으로 보내주시면 답변 드리겠습니다.
          </Text>
          <Text size={12} lineHeight={20} fontWeight={'bold'}>
            Copyright © 2021 by Choi Tech, Inc. All rights reserved
          </Text>
        </Box>
        <Box className="footer">
          <Link href="https://github.com/dlsgh120/blog-next">
            <GitHubIcon />
          </Link>
        </Box>
      </StyledFooterContent>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  width: 100%;
  border-top: 1px solid rgb(229, 229, 229);
`;

const StyledFooterContent = styled.div`
  width: 980px;
  margin: 0 auto;
  max-width: 100%;
  padding: 25px 0px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1010px) {
    width: calc(100% - 30px);
  }

  @media screen and (max-width: 690px) {
    flex-wrap: wrap;
  }
`;
export default Footer;
