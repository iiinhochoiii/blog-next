import React from 'react';
import styled from 'styled-components';
import AboutExperience from './aboutExperience';
import AboutSkill from './aboutSkill';

const AboutComponent: React.FC = () =>{ 
    
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
                    <h1>introduce</h1>
                    <p>배운것들을 꾸준히 기록하고자 노력하며, 실행하는 프론트앤드 주니어 개발자 입니다.</p>
                    <p>현재 기부 경매 플래폼 스타트업에서 재직 중이며, 메인 web site 및 관리자 backoffice 개발을 담당하고 있습니다.</p>
                </AboutTitle>
                <AboutExperience />
                <AboutSkill />
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
    margin:0px auto 100px auto;

    @media screen and (max-width:1010px){
        width:calc(100% - 30px);
    }
`;

const AboutTitle = styled.div`
    padding-bottom:20px;
    border-bottom:1px solid #b4b2b2;
    &>h1{
        font-size:26px;
        margin:30px 0px 20px 0px;
        color:rgb(18, 184, 134);
        font-weight:500;
    }
    &>p{
        margin:10px 0px;
    }
`;

export default AboutComponent;