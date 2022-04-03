import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { observer } from 'mobx-react';
import useStores from '@/hooks/use-stores';
import { removeToken } from '@/utils/auth';
import { Toaster } from '@/utils/common';
import { Box, Flex, Link, Text } from '@/components/Atom';
import MenuIcon from '@material-ui/icons/Menu';

const Header = observer((): JSX.Element => {
  const { userStore } = useStores();
  const router = useRouter();
  const [height, setHeight] = useState<number>(0);
  const [userMenu, setUserMenu] = useState<boolean>(false);
  const [menuState, setMenuState] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setHeight(window.scrollY);
      };
      window.addEventListener('scroll', handleResize);
      return () => window.removeEventListener('scroll', handleResize);
    }
  }, [height]);

  const logout = () => {
    removeToken();
    userStore.setUserInfo(undefined);
    window.location.href = '/';
  };

  const login = () => {
    if (router.asPath === '/') {
      router.push('/login');
    } else {
      router.push(`/login?redirect=${encodeURIComponent(router.asPath)}`);
    }
  };

  return (
    <StyledHeader style={height > 0 ? { position: 'fixed', top: '0' } : {}}>
      <Box width={980} margin={{ left: 'auto', right: 'auto' }} screen={{ size: 1010, calc: '30px' }}>
        <Flex className="header" justify="space-between">
          <Box>
            <Link href="/" fontFamily={`'Audiowide', cursive`} size={22}>
              Choi Tech
            </Link>
          </Box>
          <Flex className="header-menu">
            <Link
              href="/blog"
              margin={{ left: '10px', right: '10px' }}
              size={16}
              fontWeight={'bold'}
              hover={{ color: 'rgb(18, 184, 134)' }}
              style={router.pathname.split('/')[1] === 'blog' ? { color: 'rgb(18,184,134)' } : {}}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              margin={{ left: '10px', right: '10px' }}
              size={16}
              fontWeight={'bold'}
              hover={{ color: 'rgb(18, 184, 134)' }}
              style={router.pathname.split('/')[1] === 'contact' ? { color: 'rgb(18,184,134)' } : {}}
            >
              Contact
            </Link>
          </Flex>
          {userStore?.userInfo ? (
            <Box position="relative" className="header-after-login">
              <Text onClick={() => setUserMenu(!userMenu)} size={16} style={{ cursor: 'pointer' }}>
                {userStore?.userInfo?.name}
              </Text>
              {userMenu && (
                <Box className="header-after-login-menu">
                  <Text
                    onClick={() => {
                      router.push('/blog/create');
                    }}
                  >
                    글쓰기
                  </Text>
                  <Text onClick={() => router.push(`/mypage/${userStore?.userInfo?.user_id}/blogs`)}>마이페이지</Text>
                  <Text onClick={logout}>로그아웃</Text>
                </Box>
              )}
            </Box>
          ) : (
            <Flex className="header-before-login">
              <Text onClick={() => login()} margin={{ left: '10px' }} size={16} style={{ cursor: 'pointer' }}>
                로그인
              </Text>
            </Flex>
          )}
          <MenuIcon onClick={() => setMenuState(!menuState)} />
        </Flex>
        <StyledHeaderMenuResponsive>
          {menuState && (
            <Box>
              <Box margin={{ left: '15px', right: '15px' }} style={{ borderBottom: '1px solid' }}>
                <Text margin={{ top: '10px', bottom: '10px' }}>
                  <Link
                    href="/blog"
                    style={router.pathname.split('/')[1] === 'blog' ? { color: 'rgb(18,184,134)' } : {}}
                    size={16}
                    hover={{ color: 'rgb(18, 184, 134)' }}
                    fontWeight={400}
                  >
                    Blog
                  </Link>
                </Text>
                <Text margin={{ top: '10px', bottom: '10px' }}>
                  <Link
                    href="/contact"
                    style={router.pathname.split('/')[1] === 'contact' ? { color: 'rgb(18,184,134)' } : {}}
                    size={16}
                    hover={{ color: 'rgb(18, 184, 134)' }}
                    fontWeight={400}
                  >
                    Contact
                  </Link>
                </Text>
              </Box>
              <Box margin={{ left: '15px', right: '15px' }}>
                {userStore?.userInfo ? (
                  <>
                    <Text
                      size={16}
                      hover={{ color: 'rgb(18, 184, 134)' }}
                      margin={{ top: '10px', bottom: '10px' }}
                      fontWeight={400}
                      style={{ cursor: 'pointer' }}
                      onClick={() => {
                        router.push('/blog/create');
                      }}
                    >
                      글쓰기
                    </Text>
                    <Text
                      size={16}
                      hover={{ color: 'rgb(18, 184, 134)' }}
                      margin={{ top: '10px', bottom: '10px' }}
                      fontWeight={400}
                      style={{ cursor: 'pointer' }}
                      onClick={() => router.push(`/mypage/${userStore?.userInfo?.user_id}/blogs`)}
                    >
                      마이페이지
                    </Text>
                    <Text
                      size={16}
                      hover={{ color: 'rgb(18, 184, 134)' }}
                      margin={{ top: '10px', bottom: '10px' }}
                      fontWeight={400}
                      style={{ cursor: 'pointer' }}
                      onClick={logout}
                    >
                      로그아웃
                    </Text>
                  </>
                ) : (
                  <Text
                    onClick={() => login()}
                    size={16}
                    hover={{ color: 'rgb(18, 184, 134)' }}
                    margin={{ top: '10px', bottom: '10px' }}
                    fontWeight={400}
                    style={{ cursor: 'pointer' }}
                  >
                    로그인
                  </Text>
                )}
              </Box>
            </Box>
          )}
        </StyledHeaderMenuResponsive>
      </Box>
    </StyledHeader>
  );
});

const StyledHeader = styled.div`
  background: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 5px 10px -5px;
  padding: 20px 0px;
  width: 100%;
  z-index: 10;
`;

const StyledHeaderMenuResponsive = styled.div`
  display: none;
  margin-left: -15px;
  width: 100%;
  position: absolute;
  z-index: 100;
  background-color: #fff;
  padding: 15px 0px;

  @media screen and (max-width: 690px) {
    display: block;
  }
`;
export default Header;
