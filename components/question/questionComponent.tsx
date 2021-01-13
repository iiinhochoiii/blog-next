import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';

const QuestionComponent: React.FC = () =>{
    const data = Array.from({length:10},(v,i)=>i);

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
            <QuestionContainer>
                <div className="content_header">
                    <p>새 글 작성</p>
                </div>
                <QuestionContent>
                    {data.map((item)=>
                    <article key={item}>
                        <div className="content">
                            <p>title</p>
                            <p>content</p>
                            <div>
                                <p>작성자</p>
                                <p>작성일</p>
                                <p>댓글수</p>
                            </div>
                        </div>
                        <div className="image">

                        </div>
                    </article>
                    )}
                </QuestionContent>
                <QuestionPage>
                        <p>이전</p>
                        {data.map((item)=>
                        <p key={item}>
                            {item+1}
                        </p>
                        )}
                        <p>다음</p>
                </QuestionPage>
            </QuestionContainer>

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

const QuestionContainer = styled.div`
    width:1180px;
    margin:0 auto;
    max-width:100%;

    &>.content_header{
        margin-top:20px;
        display:flex;
        &>p{
            margin:auto 0px 0px auto;
            cursor: pointer;
            font-size:14px;
            &:hover{
                font-weight:bold;
            }
        }
    }
`;  
const QuestionContent = styled.div`
    margin:50px 0px 50px 0px;
    border-top:1px solid #e5e5e5;
    &>article{
        cursor: pointer;
        width:100%;
        height:100px;
        padding:25px 0px;
        border-bottom:1px solid #e5e5e5;
        display:flex;
        justify-content:space-between;
        &>.content{
            width:70%;
            &>p{
                margin:0;
            }
            &>div{
                display:flex;
                &>p{
                    margin:0;
                }
            }
        }
        &>.image{
            width:100px;
            background-color:gray;
        }
    }
`;

const QuestionPage = styled.div`
margin-bottom:50px;
    display:flex;
    justify-content:center;
    &>p{
        margin:0px 10px;
        cursor: pointer;
    }
`;
export default QuestionComponent;