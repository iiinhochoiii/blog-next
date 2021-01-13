import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
const JoinComponent: React.FC = () =>{
    return(
        <JoinWrap>
            <JoinContainer>
                <LoginHeader>
                    <Link href="/">
                        <a>Choi Tech</a>
                    </Link>
                </LoginHeader>
                <JoinContent>
                    <h1>회원 정보를 입력해주세요.</h1>
                    <p>id or email</p>
                    <div>
                        <input type="text" />
                        <button>중복확인</button>
                    </div>
                    <p>password</p>
                    <input type="text" placeholder="비밀번호를 입력해 주세요."/>
                    <p>password Confirm</p>
                    <input type="text" placeholder="비밀번호 확인" />
                    <p>name</p>
                    <input type="text" placeholder="이름을 입력해 주세요." />
                    <p>핸드폰번호</p>
                    <input type="text" placeholder="-를 제외한 핸드폰 번호를 입력해주세요." />
                    <div className="user_join">
                        <button>LOGIN</button>
                    </div>
                </JoinContent>
                <LoginFooter>
                    <p>
                    Copyright © 2021 by Choi Tech, Inc. All rights reserved
                    </p>
                </LoginFooter>
            </JoinContainer>
        </JoinWrap>
    );
}

const JoinWrap = styled.div`
    
`;

const JoinContainer = styled.div`
    width:360px;
    margin: 150px auto;  
    &>h1{
        margin:0px 0px 20px 0px;
        font-size:26px;
    }
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

const JoinContent = styled.div`
    &>h1{
        font-size:16px;
        font-weight:400;
    }
    &>p{
        margin:10px 0px 5px 0px;
    }
    &>div{
        display:flex;
        justify-content:space-between;
        &>input{
            padding:0 10px;
            width:calc(70% - 25px);
            height:45px;
            outline:none;
        }
        &>button{
            width:25%;
        }
    }
    &>input{
        width:calc(100% - 25px);
            height:50px;
            outline:none;
            padding:0 10px;
            margin-bottom:10px;
    }
    &>.user_join{
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
const LoginFooter = styled.div`
margin-top:30px;
    &>p{
        font-size:10px;
    }
`;
export default JoinComponent;