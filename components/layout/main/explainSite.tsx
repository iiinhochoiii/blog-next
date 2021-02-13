import React from 'react';
import styled from 'styled-components';
// import Link from 'next/link';

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
                    {/* <Link href="/blog">
                        <a style={{backgroundColor:"#99FFFF"}}># blog</a>
                    </Link> */}
                </div>
            </ExplainContent>
            </ExplainContainer>
        </ExplainWrap>
    );
}

const ExplainWrap = styled.div`
    width:980px;
    max-width:100%;
    margin:0 auto;

    @media screen and (max-width:1010px){
        width:calc(100% - 30px);
    }
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
        width:100%;
        &>h2{
            font-size:22px;
            margin:0px 0px 10px 0px;
            font-weight:400;
        }
        &>p{
            margin:15px 0px 15px 0px;
            font-size:16px;
            font-weight:300;
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