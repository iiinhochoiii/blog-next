import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import router from 'next/router';
import MenuIcon from '@material-ui/icons/Menu';
import { Toaster } from '@/utils/common';
import { UserInfo } from '@/interfaces/models/user';
import { toJS } from 'mobx';

interface Props {
  userInfo?: UserInfo;
  logout: () => void;
}
const Headers: React.FC<Props> = (props: Props) => {
  const { userInfo, logout } = props;
  console.log(toJS(userInfo));
  const [height, setHeight] = useState<number>(0);
  const [userMenu, setUserMenu] = useState<boolean>(false);
  const [path, setPath] = useState<string | undefined>(undefined);
  const [menuState, setMenuState] = useState<boolean>(false);
  useEffect(() => {
    setPath(router.router?.pathname);
  }, [router]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setHeight(window.scrollY);
      };
      window.addEventListener('scroll', handleResize);
      return () => window.removeEventListener('scroll', handleResize);
    }
  }, [height]);

  const userHandler = (type: string) => {
    router.push(`/${type}`);
  };

  const blogWriteHandler = () => {
    if (userInfo?.user_id === 1) {
      router.push('/blog/create');
    } else {
      Toaster.showWarning('현재 관리자만 글 작성이 가능합니다.');
    }
  };

  return (
    <HeaderWrap style={height > 0 ? { position: 'fixed', top: '0' } : {}}>
      <HeaderContainer>
        <HeaderContent>
          <div className="logo">
            <Link href="/">
              <a>Choi Tech</a>
            </Link>
          </div>
          <div className="menu">
            <Link href="/blog">
              <a style={path && path?.indexOf('/blog') > -1 ? { color: 'rgb(18,184,134)' } : {}}>Blog</a>
            </Link>
            {/* <Link href="/about">
                            <a style={path&&path?.indexOf("/about")>-1?{color:"rgb(18,184,134)"}:{}}>About</a>
                        </Link> */}
            <Link href="/contact">
              <a style={path && path?.indexOf('/contact') > -1 ? { color: 'rgb(18,184,134)' } : {}}>Contact</a>
            </Link>
          </div>
          {userInfo ? (
            <div className="after_login">
              <p onClick={() => setUserMenu(!userMenu)}>{userInfo?.name}</p>
              {userMenu && (
                <div>
                  <p onClick={blogWriteHandler}>글쓰기</p>
                  {userInfo?.user_id === 1 && <p onClick={() => router.push('/mypage')}>마이페이지</p>}
                  <p onClick={logout}>로그아웃</p>
                </div>
              )}
            </div>
          ) : (
            <div className="before_login">
              {/* <p onClick={()=>userHandler("join")}>회원가입</p> */}
              <p onClick={() => userHandler('login')}>로그인</p>
            </div>
          )}
          <MenuIcon onClick={() => setMenuState(!menuState)} />
        </HeaderContent>
        <MenuState>
          {menuState && (
            <div>
              <div className="menu_info">
                <p>
                  <Link href="/blog">
                    <a style={path && path?.indexOf('/blog') > -1 ? { color: 'rgb(18,184,134)' } : {}}>Blog</a>
                  </Link>
                </p>
                <p>
                  <Link href="/about">
                    <a style={path && path?.indexOf('/about') > -1 ? { color: 'rgb(18,184,134)' } : {}}>About</a>
                  </Link>
                </p>
                <p>
                  <Link href="/contact">
                    <a style={path && path?.indexOf('/contact') > -1 ? { color: 'rgb(18,184,134)' } : {}}>Contact</a>
                  </Link>
                </p>
              </div>
              <div className="user_info">
                {userInfo ? (
                  <>
                    <p onClick={blogWriteHandler}>글쓰기</p>
                    <p onClick={logout}>로그아웃</p>
                  </>
                ) : (
                  <>
                    <p>
                      <Link href="/login">
                        <a>login</a>
                      </Link>
                    </p>
                  </>
                )}
              </div>
            </div>
          )}
        </MenuState>
      </HeaderContainer>
    </HeaderWrap>
  );
};

const HeaderWrap = styled.div`
  background: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 5px 10px -5px;
  padding: 20px 0px;
  width: 100%;
  z-index: 10;
`;

const HeaderContainer = styled.div`
  width: 980px;
  max-width: 100%;
  margin: 0 auto;

  @media screen and (max-width: 1010px) {
    width: calc(100% - 30px);
  }
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  & > div {
    & > p {
      margin: 0;
    }
    & > a {
      color: #333333;
      text-decoration: none;
      cursor: pointer;
    }
  }
  & > .logo {
    font-family: 'Audiowide', cursive;
    & > a {
      font-size: 22px;
    }
  }
  & > .menu {
    display: flex;
    & > a {
      margin: 0px 10px;
      font-weight: bold;
      &:hover {
        color: rgb(18, 184, 134);
      }
    }
  }
  & > .after_login {
    position: relative;
    & > p {
      cursor: pointer;
    }
    & > div {
      position: absolute;
      z-index: 100;
      margin-top: 10px;
      right: 0;
      width: 100px;
      border: 1px solid rgb(214, 214, 214);
      background-color: #ffffff;
      padding: 5px;
      & > p {
        text-align: center;
        padding: 10px 0px;
        margin: 0;
        font-size: 12px;
        cursor: pointer;
        &:hover {
          background-color: rgb(248, 248, 248);
        }
      }
    }
  }
  & > .before_login {
    display: flex;
    & > p {
      cursor: pointer;
      margin: 0px 0px 0px 10px;
    }
  }
  & > svg {
    display: none;
  }
  @media screen and (max-width: 690px) {
    & > .menu {
      display: none;
    }
    & > .after_login,
    .before_login {
      display: none;
    }
    & > svg {
      display: block;
      cursor: pointer;
    }
  }
`;

const MenuState = styled.div`
  display: none;
  margin-left: -15px;
  width: 100%;
  position: absolute;
  z-index: 100;
  background-color: #fff;
  padding: 15px 0px;
  & > div {
    & > .menu_info {
      margin: 0 15px;
      border-bottom: 1px solid;
      & > p {
        margin: 10px 0px;
        & > a {
          width: 100%;
          color: #333;
          text-decoration: none;
          font-size: 16px;
          font-weight: 400;
          &:hover {
            color: rgb(18, 184, 134);
          }
        }
      }
    }
    & > .user_info {
      margin: 0 15px;
      & > p {
        margin: 10px 0px;
        width: 100%;
        color: #333;
        font-size: 16px;
        font-weight: 400;
        cursor: pointer;
        &:hover {
          color: rgb(18, 184, 134);
        }
        & > a {
          text-decoration: none;
          color: #333;
          &:hover {
            color: rgb(18, 184, 134);
          }
        }
      }
    }
  }

  @media screen and (max-width: 690px) {
    display: block;
  }
`;

export default Headers;
