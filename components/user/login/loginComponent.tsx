import React, {useState} from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import {Toaster} from '@/utils/common';

interface Props{
    login:(email:string, password:string)=>void;
}
const LoginComponent: React.FC<Props> = ({login}) =>{
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const inputChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) =>{
        const {id, value} = e.target;
        switch(id){
            case "email":
                return setEmail(value);
            case "password":
                return setPassword(value);
        }
    }
    const LoginHandler = (e:any) =>{
        e.preventDefault();
        if(email===''){
            Toaster.showWarning('email을 입력해주세요.');
            document.getElementById('email')?.focus();
        } else if(password===''){
            Toaster.showWarning('password를 입력해주세요.');
            document.getElementById('password')?.focus();
        } else{
            login(email, password);
        }
    }

    return(
        <LoginWrap>
            <LoginContainer>
                <LoginHeader>
                    <Link href="/">
                        <a>Choi Tech</a>
                    </Link>
                </LoginHeader>
                <LoginContent onSubmit={LoginHandler}>
                    <div className="user-info-wrap">
                        <p>Email or Id</p>
                        <input type="text"  value={email} id="email" onChange={inputChangeHandler}/>
                        <p>Password</p>
                        <input type="password" value={password} id="password" onChange={inputChangeHandler}/>
                    </div>
                    <div className="user-info-forgot">
                        <Link href="/join">
                            <a>Sign up</a>
                        </Link>
                        {/* <Link href="/">
                            <a>Forgot Your Password?</a>
                        </Link> */}
                    </div>
                    <div className="user-info-login">
                        <button type="submit">LOGIN</button>
                    </div>
                </LoginContent>
                <LoginFooter>
                    <p>
                    Copyright © 2021 by Choi Tech, Inc. All rights reserved
                    </p>
                </LoginFooter>
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
`;

const LoginContent = styled.form`
    margin:30px 0px 0px 0px;
    &>.user-info-wrap{
        &>p{
            margin:0px 0px 5px 0px;
            font-size:10px;
        }
        &>input{
            width:calc(100% - 25px);
            height:50px;
            outline:none;
            padding:0 10px;
            margin-bottom:10px;
            font-size:12px;
            border-radius:5px;
            background:none;
            border:1px solid #333333;
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
            background-color:rgb(18, 184, 134);
            color:#ffffff;
            font-size:16px;
            font-weight:bold;
            border:none;
            border-radius:5px;
        }
    }
`;

const LoginFooter = styled.div`
margin-top:30px;
    &>p{
        font-size:10px;
    }
`;
export default LoginComponent;