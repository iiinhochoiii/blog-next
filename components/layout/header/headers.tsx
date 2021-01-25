import React from 'react';
import {useState, useEffect} from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Headers:React.FC = () =>{
    const [height, setHeight] = useState<number>(0);

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
                            <a>blog</a>
                        </Link>
                        <Link href="/project">
                            <a>project</a>
                        </Link>
                        <Link href="/about">
                            <a>about</a>
                        </Link>
                    </div>
                    <div className="auth">
                        <Link href="/login">
                            <a>로그인</a>
                        </Link>
                        <Link href="/join">
                            <a>회원가입</a>
                        </Link>
                    </div>
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
    width:1180px;
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
`;
export default Headers;