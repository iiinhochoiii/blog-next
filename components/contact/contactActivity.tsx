import React, {useState} from 'react';
import styled from 'styled-components';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import GitHubIcon from '@material-ui/icons/GitHub';
import {Toaster} from '@/utils/common';

type form ={
    name:string;
    email:string;
    phone:string;
    message:string;
}

interface Props{
    createContact:(contact:form)=>void;
}
const ContactActivity: React.FC<Props> = ({createContact}) =>{
    const regExpEmail = /^[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i; // email 유효성검사
    const regExpPhone = /(01[016789])?[-](\d{4}|\d{3})?[-]\d{4}$/i;

    const [form, setForm] = useState<form>({
        name:'',
        email:'',
        phone:'',
        message:''
    });

    const textChangeHandler = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
        const {id, value} = e.target;
        setForm({...form, [id]:value});
        if(form.phone.length===2 || form.phone.length===7){
            setForm({...form, [id]:value+"-"});
        }
    }

    const sendHandler = () =>{
        if(form.name===''){
            Toaster.showWarning("보내시는 분 성함을 입력해주세요.");
            document.getElementById('name')?.focus();
        } else if(!regExpEmail.test(form.email)){
            Toaster.showWarning("이메일을 정확히 입력해주세요.");
            document.getElementById('email')?.focus();
        } else if(!regExpPhone.test(form.phone)){
            Toaster.showWarning("연락처를 정확히 입력해주세요.");
            document.getElementById('phone')?.focus();
        } else if(form.message===''){
            Toaster.showWarning("보내실 내용을 입력해주세요.");
            document.getElementById('message')?.focus();
        } else{
            createContact(form);
            setForm({
                name:'',
                email:'',
                phone:'',
                message:''
            });
        }
    }
    return(
            <AboutContact>
                <h3>Contact</h3>
                <div className="contact_text_item">
                    <a href="mailto:dlsgh120@gmail.com"><MailOutlineIcon />email</a>
                </div>
                <div className="contact_text_item">
                    <a href="https://github.com/dlsgh120"><GitHubIcon />github</a>
                </div>
                <p>OR</p>
                <AboutMassage>
                    <div>
                        {/* <small>보내는분 성함</small><br /> */}
                        <input type="text" id="name" value={form.name} onChange={textChangeHandler} placeholder="보내는 분의 성함을 입력해주세요."/>
                    </div>
                    <div>
                        {/* <small>이메일</small><br /> */}
                        <input type="text" id="email" value={form.email} onChange={textChangeHandler} placeholder="이메일을 입력해주세요."/>
                    </div>
                    <div>
                        {/* <small>휴대폰번호</small><br /> */}
                        <input type="text" id="phone" value={form.phone} onChange={textChangeHandler} placeholder='보내시는 분의 연락처("-" 포함)를 입력해주세요.' maxLength={13}/>
                    </div>
                    <div>
                        <small>Meassage</small><br />
                        <textarea id="message" value={form.message} onChange={textChangeHandler} placeholder="보내실 내용을 입력해주세요." />
                    </div>
                    <button onClick={sendHandler}>보내기</button>
                </AboutMassage>
        </AboutContact>
    );
}

const AboutContact = styled.div`
    padding-bottom:20px;
    &>h3{
        margin:30px 0px 20px 0px;;
        font-size:26px;
    }
    &>.contact_text_item{
        margin-bottom:10px;
        &>a{
            margin:auto 0;
            color:#4183C4;
            text-decoration:none;
            line-height:25px;
            display:flex;
            font-size:18px;
            font-weight:bold;
            &>svg{
                margin:auto 5px 0px 0px;
            
            }
        }
    }

    @media screen and (max-width: 690px){
        &>h3{
            font-size:22px;
        }
        &>.contact_text_item{
            &>a{
                font-size:16px;
            }
        }
    }
`;

const AboutMassage = styled.div`
    width:50%;
    &>div{
        margin-bottom:10px;
        &>small{
            margin:0px 0px 5px 0px;
        }
        &>input{
            height:45px;
            width:100%;
            background:none;
            outline:none;
            border:none;
            border-bottom:1px solid #b4b2b2;
            padding:5px;
            font-size:18px;
            font-weight:bold;
        }
        &>textarea{
            margin-top:5px;
            width:100%;
            height:300px;
            background:none;
            border:1px solid #b2b2b2;
            resize:none;
            outline:none;
            padding:5px;
            font-size:18px;
            font-weight:bold;
        }
    }
    &>button{
        background-color: rgb(18,184,134);
        border:none;
        padding:10px 30px;
        font-size:16px;
        font-weight:bold;
        color:#fff;
        border-radius:10px;
        cursor: pointer;
        outline:none;
    }

    @media screen and (max-width: 1010px){
        width:calc(100% - 15px);
    }

    @media screen and (max-width: 690px){
        &>div{
            &>input, textarea{
                font-size:14px;
            }
        }
    }
`;

export default ContactActivity;