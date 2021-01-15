import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const ProjectComponent: React.FC = () =>{
    const data = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14];

    return(
        <ProjectWrap>
            <ProjectBackground style={{backgroundImage:`url(${'./images/projectBackground.png'})`}}>
                <div>
                    <h1>Project</h1>
                    <p>자신이 개발한 프로젝트를 다른 개발자가 볼 수 있도록 공유를 합니다.</p>
                </div>
            </ProjectBackground>
            <ProjectContainer>
                <div className="content_header">
                    <h1>Related Projects</h1>
                    <Link href="/project/create">
                        <a>새 글 작성</a>
                    </Link>
                </div>
                <ProjectContent>
                    {data.map((item)=>
                    <article key={item}>
                        <div className="content_wrap">
                            <div className="image">

                            </div>
                            <div className="info">
                                <p>작성날짜</p>
                                <p>title</p>
                                <p>주요기능</p>
                                <div>
                                    <p>userInfo</p>
                                </div>
                            </div>
                        </div>
                    </article>
                    )}
                </ProjectContent>
            </ProjectContainer>
        </ProjectWrap>
    );
}

const ProjectWrap = styled.div`

`;

const ProjectBackground = styled.div`
    height:500px;
    background-size:100% 500px;
    &>div{
        width:1180px;
        margin:0 auto;
        position: relative;
        padding-top:250px;
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
    }
`;

const ProjectContainer = styled.div`
    width:1180px;
    margin:0 auto;
    max-width:100%;

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
const ProjectContent = styled.div`
    margin:30px 0px 100px 0px;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    &>article{
        width:45%;
        border:1px solid;
        margin-bottom:20px;
        border-radius:10px;
        cursor: pointer;
        &>.content_wrap{
            position: relative;
            padding-bottom:70%;
            &>.image{
                position:absolute;
                top:0;
                left:0;
                right:0;
                bottom:50%;
                background-color:#e5e5e5;
                border-radius:10px 10px 0px 0px;
            }
            &>.info{
                padding:20px;
                position:absolute;
                top:50%;
                left:0;
                right:0;
                bottom:0;
                &>p{
                    margin:0;
                }
            }
        }
    }
`;
export default ProjectComponent;