import { useState, useEffect } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import styled from 'styled-components';
import { useUserStore } from '@/stores/user-store-provider';
import { removeToken } from '@/utils/auth';
import { Box, Flex, Link, Text } from '@/components/Atom';
import MenuIcon from '@material-ui/icons/Menu';

const Header = (): JSX.Element => {
  const userInfo = useUserStore((state) => state.userInfo);
  const setUserInfo = useUserStore((state) => state.setUserInfo);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
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
    setUserInfo(undefined);
    window.location.href = '/';
  };

  const login = () => {
    const query = searchParams.toString();
    const currentPath = query ? `${pathname}?${query}` : pathname;
    if (currentPath === '/') {
      router.push('/login');
    } else {
      router.push(`/login?redirect=${encodeURIComponent(currentPath)}`);
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
              style={pathname.split('/')[1] === 'blog' ? { color: 'rgb(18,184,134)' } : {}}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              margin={{ left: '10px', right: '10px' }}
              size={16}
              fontWeight={'bold'}
              hover={{ color: 'rgb(18, 184, 134)' }}
              style={pathname.split('/')[1] === 'contact' ? { color: 'rgb(18,184,134)' } : {}}
            >
              Contact
            </Link>
          </Flex>
          {userInfo ? (
            <Box position="relative" className="header-after-login">
              <Text onClick={() => setUserMenu(!userMenu)} size={16} style={{ cursor: 'pointer' }}>
                {userInfo?.name}
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
                  <Text onClick={() => router.push(`/mypage/${userInfo?.user_id}/blogs`)}>마이페이지</Text>
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
                    style={pathname.split('/')[1] === 'blog' ? { color: 'rgb(18,184,134)' } : {}}
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
                    style={pathname.split('/')[1] === 'contact' ? { color: 'rgb(18,184,134)' } : {}}
                    size={16}
                    hover={{ color: 'rgb(18, 184, 134)' }}
                    fontWeight={400}
                  >
                    Contact
                  </Link>
                </Text>
              </Box>
              <Box margin={{ left: '15px', right: '15px' }}>
                {userInfo ? (
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
                      onClick={() => router.push(`/mypage/${userInfo?.user_id}/blogs`)}
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
};

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
