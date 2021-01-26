import React from 'react';
import {useState} from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import {checkIdStatus} from '../../../stores/users/types';

interface Props{
    checkId:(email:string)=>void;
    checkIdStatus?:checkIdStatus;
    createUser:(email:string, password:string, name:string, phone:string)=>void;
}
const JoinComponent: React.FC<Props> = ({checkId, checkIdStatus, createUser}) =>{

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordConfirm, setPasswordConfirm] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [phone, setPhone] = useState<string>('');

    const isEmail:any = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    const isPassword:any = /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!%*#?&]).{7,}.$/;
    const onChangeHandler = (e:any) =>{
        const {id, value} = e.target;
        switch(id){
            case 'email' :
                return setEmail(value);
            case 'password' :
                return setPassword(value);
            case 'passwordConfirm' :
                return setPasswordConfirm(value);
            case 'name' :
                return setName(value);
            case 'phone' :
                return setPhone(value);
        }
    }

    const emailCheckHandler = () =>{
        if(!isEmail.test(email)){
            alert('이메일을 정확히 입력해주세요.');
        }
        else{
            checkId(email);
        }
    }

    const joinHandler = () =>{
        if(!checkIdStatus?.status){
            alert('중복확인을 하지 않았습니다.');
            document.getElementById('email')?.focus();
        }
        else if(!isPassword.test(password)){
            alert('영문, 숫자, 특수문자를 포함한 8자리 이상을 입력해주세요.');
            document.getElementById('password')?.focus();
        }
        else if (password !== passwordConfirm){
            alert('패스워드가 일치하지 않습니다.');
            document.getElementById('passwordConfirm')?.focus();
        }
        else if(name===''){
            alert('이름을 입력해주세요.');
            document.getElementById('name')?.focus();
        }
        else if(phone===''){
            alert('핸드폰번호를 입력해주세요.')
            document.getElementById('phone')?.focus();
        }
        else{
            createUser(email, password, name, phone);
        }
    }

    return(
        <JoinWrap>
            <JoinContainer>
                <JoinHeader>
                    <Link href="/">
                        <a>Choi Tech</a>
                    </Link>
                </JoinHeader>
                <JoinContent>
                    <h1>회원 정보를 입력해주세요.</h1>
                    <p>email</p>
                    <div>
                        <input type="text" placeholder="E-mail을 입력해주세요." value={email} id="email" onChange={onChangeHandler} readOnly={checkIdStatus?.status&&true} />
                        <button onClick={emailCheckHandler}>중복확인</button>
                    </div>
                    <span style={checkIdStatus?.status?{color:"#333333"}:{color:"red"}}>{checkIdStatus?.massage}</span>
                    <p>password</p>
                    <input type="password" placeholder="비밀번호를 입력해 주세요." value={password} id="password" onChange={onChangeHandler}/>
                    <p>password Confirm</p>
                    <input type="password" placeholder="비밀번호 확인" value={passwordConfirm} id="passwordConfirm" onChange={onChangeHandler}/>
                    <span style={{color:"red"}}>{passwordConfirm.length>0&&password!==passwordConfirm?"비밀번호가 일치하지 않습니다.":""}</span>
                    <p>name</p>
                    <input type="text" placeholder="이름을 입력해 주세요." value={name} id="name" onChange={onChangeHandler}/>
                    <p>핸드폰번호</p>
                    <input type="text" placeholder="-를 제외한 핸드폰 번호를 입력해주세요." value={phone} id="phone" onChange={onChangeHandler}/>
                    <div className="user_join">
                        <button onClick={joinHandler}>Sign Up</button>
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
const JoinHeader = styled.div`
    text-align:center;
    &>a{
        font-family: 'Audiowide',cursive;
        text-decoration:none;
        color:#333333;
        font-size:32px;
    }
`;

const JoinContent = styled.div`
    margin-top:30px;
    &>h1{
        font-size:16px;
        font-weight:400;
        text-align:center;
    }
    &>p{
        margin:10px 0px 5px 0px;
        font-size:10px;
    }
    &>span{
        font-size:12px;
    }
    &>div{
        display:flex;
        justify-content:space-between;
        margin-bottom:10px;
        &>input{
            padding:0 10px;
            width:calc(70% - 25px);
            height:45px;
            outline:none;
            font-size:12px;
            background:none;
            border-radius:5px;
            border:1px solid #333333;
        }
        &>button{
            width:25%;
            height:45px;
            cursor: pointer;
            outline:none;
            background-color:rgb(18, 184, 134);
            color:#fff;
            font-size:16px;
            font-weight:bold;
            border:none;
            border-radius:5px;
        }
    }
    &>input{
        width:calc(100% - 25px);
            height:50px;
            outline:none;
            padding:0 10px;
            margin-bottom:10px;
            font-size:12px;
            background:none;
            border-radius:5px;
            border:1px solid #333333;
    }
    &>.user_join{
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
export default JoinComponent;