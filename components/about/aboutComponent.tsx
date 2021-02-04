import React from 'react';
import styled from 'styled-components';
// import about_image from '../../public/images/about_image.jpg';
const AboutComponent: React.FC = () =>{

    // console.log(about_image);
    return(
        <AboutWrap>
            <AboutContainer>
                <AboutTitle>
                    <h1>최인호, Inho Choi</h1>
                    <h3>introduce</h3>
                    {/* <p>편안함보다는 항상 배우며, 효율적인 기능을 중요시 생각합니다. 또한, 배움에 있어는 겉핥기식이 아닌, 근본적인 문제를 이해하는 것이 중요하다고 생각합니다.</p> */}
                    <p>배운것들을 꾸준히 기록하고자 노력하며, 실행하는 프론트앤드 주니어 개발자 입니다.</p>
                    <p>현재 기부 경매 플래폼 스타트업에서 재직 중이며, 메인 web site 및 관리자 backoffice 개발을 담당하고 있습니다.</p>
                    <p>관심서비스 분야는 e-commerce, O2O등 입니다.</p>
                    <img src={"./images/about_image.jpg"} alt="" />
                </AboutTitle>
                <AboutContact>
                    <h3>Contact</h3>
                    <a href="mailto:dlsgh120@gmail.com">email</a><br />
                    <a href="https://github.com/dlsgh120">github</a>
                </AboutContact>
                <AboutSkill>
                    <h3>Skill</h3>
                    <h4>backend</h4>
                    <p>express(node.js with javascript or typescript)</p>
                    <p>laravel(php)</p>
                    <h4>frontend</h4>
                    <p>React(javascript or typescript)</p>
                    <p>Next(for server side rendering)</p>
                    <p>Mobx</p>
                    <p>Redux(Redux-thunk for middleware)</p>
                    <p>styled-component</p>
                    <p>webpack</p>
                    <p>babel</p>
                    <h4>database</h4>
                    <p>mysql</p>
                    <p>mongodb</p>
                    <h4>etc</h4>
                    <p>git / github</p>
                    <p>notion</p>
                    <p>zeplin</p>
                </AboutSkill>
            </AboutContainer>
        </AboutWrap>
    );
}

const AboutWrap = styled.div`
    width:980px;
    max-width:100%;
    margin:0 auto;
`;

const AboutContainer = styled.div`

`;

const AboutTitle = styled.div`
    &>img{
        width:340px;
        height:300px;
    }
`;

const AboutContact = styled.div`
    &>a{
        color:#4183C4;
        text-decoration:none;
        line-height:25px;
    }
`;

const AboutSkill = styled.div``;
export default AboutComponent;