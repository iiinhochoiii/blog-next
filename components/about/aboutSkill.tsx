import React from 'react';
import styled from 'styled-components';

const AboutSkill: React.FC = () =>{
    return(
        <AboutSkillContainer>
            <h1>Skill</h1>
            <h4>Back-End</h4>
            <ul>
                <li>Express(node.js with javascript or typescript)</li>
                <li>Laravel(php)</li>
            </ul>
            <h4>Front-End</h4>
            <ul>
                <li>React(javascript or typescript)</li>
                <li>Next(for server side rendering)</li>
                <li>Mobx</li>
                <li>Redux(Redux-thunk for middleware)</li>
                <li>Styled-component</li>
                <li>Webpack</li>
                <li>Babel</li>
                <li>Prettier, EsLint</li>
            </ul>
            <h4>Database</h4>
            <ul>
                <li>Mysql</li>
                <li>Mongodb</li>
            </ul>
            <h4>etc</h4>
            <ul>
                <li>Git, Github</li>
                <li>Notion</li>
                <li>Zeplin</li>
            </ul>
        </AboutSkillContainer>
    );
}

const AboutSkillContainer = styled.div`
    border-bottom:1px solid #b4b2b2;
    padding-bottom:20px;
    &>h1{
        font-size:26px;
        color:rgb(18, 184, 134);
        margin:30px 0px 20px 0px;
        font-weight:500;
    }
    &>h4{
        font-weight:400;
    }
    &>ul{
        &>li{
            line-height:35px;
        }
    }

    @media screen and (max-width: 690px){
        &>h1{
            font-size:22px;
        }
        &>h4{
            font-size:18px;
        }
        &>ul{
            &>li{
                font-size:14px;
            }
        }
    }
`;
export default AboutSkill;