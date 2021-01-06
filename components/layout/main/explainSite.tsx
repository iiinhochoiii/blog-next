import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const ExplainSite: React.FC = () =>{
    return(
        <ExplainWrap>
            <ExplainContainer>
            <h1>Try the various services provided by Choi Tech.</h1>
            <ExplainContent>
                <div>
                    <h2>지식 공유</h2>
                    <p>Front-end 프레임워크인 React에 관련된 기술 및 경험을 공유 합니다. 주로 개발 환경 구성 및, 이슈 대응, 문제 해결 등 다양한 주제를 다루고 있습니다.
                        또한, 공유한 지식에 대하여, 질의 응답 등을 이용 할 수 있습니다.
                    </p>
                    <Link href="/blog">
                        <a style={{backgroundColor:"#99FFFF"}}># blog</a>
                    </Link>
                </div>
                <div>
                    <h2>기술 분석</h2>
                    <p>
                        자신이 개발한 프로젝트를 다른 개발자가 볼 수 있도록 공유를 합니다. 이는, 기술 분석을 할 수 있도록 경험 및 기회를 제공하기도 하며,
                        다른 개발자로 부터 피드백을 받을 수 있기도 합니다. 모든 개발자들이 조금 더 나은 개발을 하도록 기대합니다.
                    </p>
                    <Link href="/project">
                        <a style={{backgroundColor:"#99FF99"}}># project</a>
                    </Link>
                </div>
                <div>
                    <h2>실시간 질의응답</h2>
                    <p>
                        개발자들이 공유한 경험 및 기술 외 적으로, 질의 응답을 수행 합니다. 주로 프론트엔드로 구성 되어있지만, React 외 프론트 엔드 기술,
                        또는 서버 사이드 언어 등 기술에 관련하여, 질문하고 답할 수 있습니다.
                    </p>
                    <Link href="/qna">
                        <a style={{backgroundColor:"#CCFF33"}}># {`Q&A`}</a>
                    </Link>
                </div>
            </ExplainContent>
            </ExplainContainer>
        </ExplainWrap>
    );
}

const ExplainWrap = styled.div`
    width:1180px;
    max-width:100%;
    margin:0 auto;
`;

const ExplainContainer = styled.div`
    margin:100px 0px 0px 0px;
    &>h1{
        font-size:28px;
        font-weight:400;
    }
`;

const ExplainContent = styled.div`
    margin:50px 0px 0px 0px;
    display:flex;
    &>div{
        width:25%;
        margin-right:100px;
        &>h2{
            font-size:22px;
            margin:0px 0px 10px 0px;
            font-weight:400;
        }
        &>p{
            margin:15px 0px 15px 0px;
            font-size:16px;
            font-weight:100;
            line-height:28px;
        }
        &>a{
            text-decoration:none;
            color:#333333;
            cursor: pointer;
            padding:5px 10px;
            font-size:14px;
        }
    }
`;  
export default ExplainSite;