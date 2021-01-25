import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';

const AboutComponent: React.FC = () =>{
    return(
        <QuestionWrap>
            <QuestionBackground style={{backgroundImage:`url(${'./images/questionBackground.png'})`}}>
                <div>
                    <h1>질문과답변</h1>
                    <p>개발자들이 공유한 경험 및 기술 외 적으로, 질의 응답을 수행 합니다.</p>
                    <div>
                        <input type="text" placeholder="검색하실 제목 및 내용을 입력해주세요." />
                        <SearchIcon />
                    </div>
                </div>
            </QuestionBackground>
            

        </QuestionWrap>
    );
}

const QuestionWrap = styled.div``;

const QuestionBackground = styled.div`
    height:500px;
    background-size:100% 500px;
    &>div{
        width:1180px;
        margin:0 auto;
        position: relative;
        padding-top:150px;
        &>h1{
            margin:0;
            color:#ffffff;
            font-size:42px;
        }
        &>p{
            margin:20px 0px 0px 0px;
            color:#ffffff;
            font-size:18px;
        }
        &>div{
            margin:100px auto 0px auto;
            background-color:#ffffff;
            width:30%;
            height:45px;
            border:none;
            border-radius:10px;
            display:flex;
            padding:0 10px;
            &>input{
                margin:auto 0px auto 10px;
                height:80%;
                width:80%;
                outline:none;
                border:none;
            }
            &>svg{
                margin:auto 10px auto auto;
                cursor: pointer;
            }
        }
    }
`;

export default AboutComponent;