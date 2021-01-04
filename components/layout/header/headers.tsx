import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
const Headers:React.FC = () =>{
    return(
        <HeaderWrap>
            <HeaderContainer>
                <HeaderContent>
                    <div className="logo">
                        <Link href="/">
                            <a>LOGO</a>
                        </Link>
                    </div>
                    <div className="menu">
                        <Link href="/blog">
                            <a>블로그</a>
                        </Link>
                        <Link href="/project">
                            <a>프로젝트</a>
                        </Link>
                        <Link href="/qna">
                            <a>{`QnA`}</a>
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
    background-color:#33FF99;
    padding:20px 0px;
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
    
    }
    &>.menu{
        display:flex;
        &>a{
            margin:0px 10px;
        }
    }
    &>.auth{
        display:flex;
        &>a{
            margin-left:10px;
        }
    }
`;
export default Headers;