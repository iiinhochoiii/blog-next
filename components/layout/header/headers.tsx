import React from 'react';
import {useState, useEffect} from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import router from 'next/router';

interface Props{
    auth:boolean;
    userData:any;
    logout:()=>void;
}
const Headers:React.FC<Props> = ({auth, userData, logout}) =>{
    const [height, setHeight] = useState<number>(0);
    const [userMenu, setUserMenu] = useState<boolean>(false);
    const [path, setPath] = useState<string|undefined>(undefined);

    useEffect(()=>{
        setPath(router.router?.pathname);
    },[router]);

    useEffect(() => {
		if (typeof window !== 'undefined') {
			const handleResize = () => {
				setHeight(window.scrollY);
			};
			window.addEventListener('scroll', handleResize);
			return () => window.removeEventListener('scroll', handleResize);
		}
    }, [height]);

    return(
        <HeaderWrap style={height>0?{position:"fixed", top:"0"}:{}}>
            <HeaderContainer>
                <HeaderContent>
                    <div className="logo">
                        <Link href="/">
                            <a>Choi Tech</a>
                        </Link>
                    </div>
                    <div className="menu">
                        <Link href="/blog">
                            <a style={path&&path?.indexOf("/blog")>-1?{color:"rgb(18,184,134)"}:{}}>Blog</a>
                        </Link>
                        <Link href="/about">
                            <a style={path&&path?.indexOf("/about")>-1?{color:"rgb(18,184,134)"}:{}}>About</a>
                        </Link>
                        <Link href="/contact">
                            <a style={path&&path?.indexOf("/contact")>-1?{color:"rgb(18,184,134)"}:{}}>Contact</a>
                        </Link>
                    </div>
                    {
                        auth?
                        <div className="logined">
                            <p onClick={()=>setUserMenu(!userMenu)}>{userData.name}</p>
                            {userMenu&&
                            <div>
                                {userData.user_id===1&&<p onClick={()=>router.push('/blog/create')}>글쓰기</p>}
                                {userData.user_id===1&&<p onClick={()=>router.push('/mypage')}>마이페이지</p>}
                                <p onClick={logout}>로그아웃</p>
                            </div>
                            }
                        </div>
                        :
                        <div className="auth">
                           
                        </div>
                    }
                </HeaderContent>
                
            </HeaderContainer>
        </HeaderWrap>
    );
}

const HeaderWrap = styled.div`
    background:#ffffff;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 5px 10px -5px;
    padding:20px 0px;
    width:100%;
    z-index:10;
`;

const HeaderContainer = styled.div`
    width:980px;
    max-width:100%;
    margin:0 auto;
`;

const HeaderContent = styled.div`
    display:flex;
    justify-content:space-between;
    &>div{
        &>p{
            margin:0;
        }
        &>a{
            color:#333333;
            text-decoration:none;
            cursor: pointer;
        }
    }
    &>.logo{
        font-family: 'Audiowide', cursive;
        &>a{
            font-size:22px;
        }
    }
    &>.menu{
        display:flex;
        &>a{
            margin:0px 10px;
            font-weight:bold;
        }
    }
    &>.auth{
        display:flex;
        &>a{
            margin-left:10px;
            font-weight:bold;
            color:rgb(80,80,80);
        }
    }
    &>.logined{
        position:relative;
        &>p{
            cursor: pointer;
        }
        &>div{
            position:absolute;
            z-index:100;
            margin-top:10px;
            right:0;
            width:100px;
            border:1px solid rgb(214, 214, 214);
            background-color:#ffffff;
            padding:5px;
            &>p{
                text-align:center;
                padding:10px 0px;
                margin:0;
                font-size:12px;
                cursor: pointer;
                &:hover{
                    background-color:rgb(248, 248, 248);
                }
            }
        }
    }
`;
export default Headers;