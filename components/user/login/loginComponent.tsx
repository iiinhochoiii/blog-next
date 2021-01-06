import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const LoginComponent: React.FC = () =>{
    return(
        <LoginWrap>
            <LoginContainer>
                <LoginHeader>
                    <Link href="/">
                        <a>Choi Tech</a>
                    </Link>
                </LoginHeader>
                <LoginContent>
                    <div className="user-info-wrap">
                        <p>Email or Id</p>
                        <input type="text" />
                        <p>Password</p>
                        <input type="text" />
                    </div>
                    <div className="user-info-forgot">
                        <Link href="/join">
                            <a>Sign up</a>
                        </Link>
                        <Link href="/">
                            <a>Forgot Your Password?</a>
                        </Link>
                    </div>
                    <div className="user-info-login">
                        <button>LOGIN</button>
                    </div>
                </LoginContent>
            </LoginContainer>
        </LoginWrap>
    );
}

const LoginWrap = styled.div`

`;

const LoginHeader = styled.div`
    text-align:center;
    &>a{
        font-family: 'Audiowide',cursive;
        text-decoration:none;
        color:#333333;
        font-size:32px;
    }
`;
const LoginContainer = styled.div`
    width:360px;
    margin: 150px auto;  
    &>h1{
        margin:0px 0px 20px 0px;
        font-size:26px;
    }
`;

const LoginContent = styled.div`
    margin:30px 0px 0px 0px;
    &>.user-info-wrap{
        &>p{
            margin:0px 0px 5px 0px;
            font-size:12px;
        }
        &>input{
            width:calc(100% - 25px);
            height:50px;
            outline:none;
            padding:0 10px;
            margin-bottom:10px;
        }
    }
    &>.user-info-forgot{
        text-align:right;
        margin-bottom:20px;
        &>a{
            margin:0px 0px 0px 20px;
            text-decoration:none;
            color:#333333;
            font-size:12px;
        }
    }
    &>.user-info-login{
        &>button{
            width:100%;
            height:45px;
            cursor: pointer;
            outline:none;
            background-color:#00FF99;
            color:#ffffff;
            font-size:16px;
            font-weight:bold;
            border:none;
        }
    }
`;
export default LoginComponent;