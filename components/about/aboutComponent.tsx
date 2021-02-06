import React from 'react';
import {useState} from 'react';
import styled from 'styled-components';

type form ={
    name:string;
    email:string;
    phone:string;
    message:string;
}
const AboutComponent: React.FC = () =>{ 
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
            alert("보내시는 분 성함을 입력해주세요.");
            document.getElementById('name')?.focus();
        } else if(!regExpEmail.test(form.email)){
            alert("이메일을 정확히 입력해주세요.");
            document.getElementById('email')?.focus();
        } else if(!regExpPhone.test(form.phone)){
            alert("연락처를 정확히 입력해주세요.");
            document.getElementById('phone')?.focus();
        } else if(form.message===''){
            alert("보내실 내용을 입력해주세요.");
            document.getElementById('message')?.focus();
        } else{
            console.log(form)
        }
    }
    return(
        <AboutWrap>
            <Background style={{backgroundImage:`url(${"./images/about_background.jpg"})`}}>
                <div>
                    <h1>About Me</h1>
                    <p>최인호, Inho Choi</p>
                    <p>Front-End Developer</p>
                </div>
            </Background>
            <AboutContainer>
                <AboutTitle>
                    <h3>introduce</h3>
                    <p>배운것들을 꾸준히 기록하고자 노력하며, 실행하는 프론트앤드 주니어 개발자 입니다.</p>
                    <p>현재 기부 경매 플래폼 스타트업에서 재직 중이며, 메인 web site 및 관리자 backoffice 개발을 담당하고 있습니다.</p>
                </AboutTitle>
                <AboutSkill>
                    <h3>Skill</h3>
                    <h4>Back-End</h4>
                    <ul>
                        <li><p>Express(node.js with javascript or typescript)</p></li>
                        <li><p>Laravel(php)</p></li>
                    </ul>
                    <h4>Front-End</h4>
                    <ul>
                        <li><p>React(javascript or typescript)</p></li>
                        <li><p>Next(for server side rendering)</p></li>
                        <li><p>Mobx</p></li>
                        <li><p>Redux(Redux-thunk for middleware)</p></li>
                        <li><p>Styled-component</p></li>
                        <li><p>Webpack</p></li>
                        <li><p>Babel</p></li>
                        <li><p>Prettier, EsLint</p></li>
                    </ul>
                    <h4>Database</h4>
                    <ul>
                        <li><p>Mysql</p></li>
                        <li><p>Mongodb</p></li>
                    </ul>
                    <h4>etc</h4>
                    <ul>
                        <li><p>Git, Github</p></li>
                        <li><p>Notion</p></li>
                        <li><p>Zeplin</p></li>
                    </ul>
                </AboutSkill>
                <AboutContact>
                    <h3>Contact</h3>
                    <ul>
                        <li><a href="mailto:dlsgh120@gmail.com">email</a></li>
                        <li><a href="https://github.com/dlsgh120">github</a></li>
                    </ul>
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
            </AboutContainer>
        </AboutWrap>
    );
}

const AboutWrap = styled.div`
    
`;

const Background = styled.div`
    height:300px;
    background-size:100% 600px;
    background: no-repeat center;
    position: relative;
    &>div{
        background:rgba(0,0,0,0.3);
        position: absolute;
        top:0;
        bottom:0;
        left:0;
        right:0;
        text-align:center;
        padding-top:100px;
        &>h1{
            margin:0;
            color:#ffffff;
            font-size:42px;
        }
        &>p{
            margin:20px 0px 0px 0px;
            color:#ffffff;
            font-size:18px;
            font-weight:bold;
        }
    }
`;
const AboutContainer = styled.div`
    width:980px;
    max-width:100%;
    margin:0 auto;
`;

const AboutTitle = styled.div`
    padding-bottom:20px;
    border-bottom:1px solid #b4b2b2;
    &>h3{
        font-size:26px;
        margin:30px 0px 20px 0px;
    }
    &>p{
        margin:10px 0px;
    }
`;

const AboutSkill = styled.div`
    padding-bottom:20px;
    border-bottom:1px solid #b4b2b2;
    &>h3{
        font-size:26px;
        margin:30px 0px 20px 0px;
    }
`;

const AboutContact = styled.div`
    padding-bottom:20px;
    &>h3{
        margin:30px 0px 0px 0px;;
        font-size:26px;
    }
    &>ul{
        &>li{
            &>a{
                color:#4183C4;
                text-decoration:none;
                line-height:25px;
            }
        }
    }
`;

const AboutMassage = styled.div`
    &>div{
        margin-bottom:10px;
        &>small{
            margin:0px 0px 5px 0px;
        }
        &>input{
            height:45px;
            width:50%;
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
            width:50%;
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
`;

export default AboutComponent;