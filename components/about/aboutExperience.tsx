import React from 'react';
import styled from 'styled-components';

const AboutExperience: React.FC = () =>{
    return(
        <AboutExperienceContainer>
            <WorkContent>
                <h1>Work Experience</h1>
                <div>
                    <h3 className="project_name">Berry store</h3>
                    <div>
                        <a href="https://berrystore.co.kr">[Site]</a>
                    </div>                   
                    <p>2020.06 - 2021.02</p>
                    <p>
                        연예인, 유튜버 등 셀럽의 애장품을 구매할 수 있는, 기부 경매 플랫폼 (주)베리스토어 에서 프론트앤드를 담당하였습니다.
                        초기단계 세팅 부터 배포까지, 단독으로 개발이 진행 되었으며, 개발 뿐만 아니라, 기획 및 사용자 경험쪽도 같이 참여 하였습니다.
                        경매에 입찰 할 수 있는 포인트는 Luniverse 측의 Block-chain 기반의 Token 형식으로 관리되고 있습니다.
                        현재, 포인트는 다양한 이벤트 및 다양한 활동 참여를 통해 얻을 수 있으며, 추후에 결제 시스템을 도입할 예정입니다.
                    </p>
                    <ul>
                        <li>React, Next, Typescript, Mobx, Styled-Component 등으로 초기환경 셋팅 및 개발</li>
                        <li>Zeplin을 이용하여 디자이너와 협업을 진행하며, Layout 구성</li>
                        <li>정규식, 유효성 검사를 통한 회원가입 및 로그인 기능 적용</li>
                        <li>서버와의 REST 통신 과정에서 유저 정보에 대한 암호화 (bcrypt, sha256) 적용</li>
                        <li>쿠키 및 스토리지를 이용하여 유저 정보를 브라우저에 저장</li>
                        <li>외부 api 연동(Smtp, 카카오 로그인, 채널, 메세지, Daum Postcode 등)</li>
                        <li>babel을 이용한 크로스 브라우징</li>
                        <li>화면 크기에 따른 Responsive 대응</li>
                    </ul>
                </div>
                <div>
                    <h3 className="project_name">Berry Admin</h3>
                    <p>2020.06 - 2021.02</p>
                    <p>
                        (주)베리스토어 관리자 사이트의 프론트앤드를 담당 하였습니다. 메인 웹사이트와 마찬가지로 세팅 및 개발을 단독으로 진행 하였습니다.
                        웹사이트 및 앱에 제공되는 다양한 기능 및 컨텐츠를 관리 하고 있으며, 서버와 REST 통신기능이 주를 이루고 있습니다.
                    </p>
                    <ul>
                        <li>React(Create-React-App), typescript, mobx, Styled-component 등으로 환경 셋팅 및 개발</li>
                        <li>REST API 통신을 하며 CRUD 기능이 주로 이룸</li>
                        <li>웹 또는 앱에 보여지는 기능 및 컨텐츠 등을 모두 관리</li>
                        <li>검색 및 페이징 구현</li>
                        <li>Chart 를 이용한 데이터 시각화 구현</li>
                    </ul>
                </div>
            </WorkContent>
            <PersonalContent>
                <h1>Personal Experiences</h1>
                <div>
                    <h3>Choi-Tech</h3>
                    <div>
                        <a href="https://c-tech.gq">[Site]</a>
                        <a href="https://github.com/dlsgh120">[Github]</a>
                    </div>
                    <p>2021.1 - 2021.2</p>
                    <p>
                        다양한 방법으로 얻은 개발 지식들을, 꾸준히 기록하기 위해 만들어진 개인 블로그 입니다. 단순히 지식들을 기억으로 남기는 것이 아닌, 기록을 함으로써
                        진짜 나의 것으로 만들기 위함 입니다. 현재 블로그 기능을 편하게 이용할 수 있는 사이트 들이 많이 존재 하지만, 블로그를 직접 만들어 이용하고자 하는 개인적인 욕심이 있었기에,
                        직접 만들게 되었습니다. 또한, 다른 블로그와 비교하면, 제공하는 기능들이 많이 미흡하지만, 꾸준히 변경을 시키며, 더 좋은 블로그를 만들고자 합니다.
                    </p>
                    <ul>
                        <li>Back-End Tech Stack은 Express(node.js), typescript, Mysql 로 구성.</li>
                        <li>Front-End Tech Stack은 React, Next, typescript, mobx, styled-component등 으로 구성</li>
                        <li>Server와 Client는 REST API 통신으로 진행</li>
                        <li>정규식, 유효성 검사를 통한 회원가입 및 로그인 기능 적용</li>
                        <li>JWT(json web token) 인증 방식으로 로그인 구현</li>
                        <li>Blog는 CRUD를 이용하여 Dynamic page로 구현 되었으며, 그 외는 Static page로 구현</li>
                        <li>Toast ui(Text-Editor Library) 및 Code-Mirror로 블로그 작성 및 변경 기능 제공</li>
                        <li>Prism.js로 Code Highlight 구현</li>
                        <li>Discus Api를 이용한 댓글 기능 구현</li>
                        <li>Express는 Heroku, Next는 Vercel에 배포</li>
                    </ul>
                </div>
            </PersonalContent>
        </AboutExperienceContainer>
    );
}

const AboutExperienceContainer = styled.div`
    border-bottom:1px solid #b4b2b2;
    padding-bottom:20px;
    &>.content_header{
        margin-top:20px;
        display:flex;
        justify-content:space-between;
        &>h1{
            margin:0;
        }
        &>a{
            color:#333333;
            text-decoration:none;
            margin:auto 0px 0px 0px;
            cursor: pointer;
            font-size:14px;
            &:hover{
                font-weight:bold;
            }
        }
    }
`;

const WorkContent = styled.div`
    &>h1{
        color:rgb(18, 184, 134);
        font-size:26px;
        font-weight:500;
    }
    &>div{
        &>h3{
            margin:0px 10px 0px 0px;
            font-weight:400;
        }
        &>div{
            &>a{
                color:#333333;
                text-decoration:none;
                &:hover{
                    font-weight:bold;
                }
            }
        }
        &>p{
            line-height:25px;
        }
        &>ul{
            &>li{
                line-height:35px;
            }
        }
    }
`;

const PersonalContent = styled.div`
    &>h1{
        color:rgb(18, 184, 134);
        font-size:26px;
        font-weight:500;
    }
    &>div{
        &>h3{
            margin:0px 10px 0px 0px;
            font-weight:400;
        }
        &>div{
            &>a{
                color:#333333;
                text-decoration:none;
                margin-right:5px;
                &:hover{
                    font-weight:bold;
                }
            }
        }
        &>p{
            line-height:25px;
        }
        &>ul{
            &>li{
                line-height:35px;
            }
        }
    }
`;

export default AboutExperience;