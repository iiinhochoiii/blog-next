import React from 'react';
import styled from 'styled-components';
import Truncate from 'react-truncate';
import myData from './data.json';

const ProjectComponent: React.FC = () =>{
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
                </div>
                <ProjectContent>
                    {myData.map((item)=>
                    <article key={item.id}>
                        <div className="content_wrap">
                            <div className="image" style={{backgroundImage:`url(${item.image})`}}>
                            </div>
                            <div className="info">
                                <p><Truncate>{item.summary}</Truncate></p>
                                <p>
                                    {item.dev.map((dev, index)=>
                                    <span key={index}>{dev}</span>
                                    )}
                                </p>
                                <p>{item.date}</p>
                                <div>
                                    <div><p>인호</p></div>
                                    <p>최인호</p>
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
        width:1080px;
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
    width:1080px;
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
        border:1px solid #b4b2b2;
        width:30%;
        margin-bottom:20px;
        border-radius:10px;
        cursor: pointer;
        &>.content_wrap{
            position: relative;
            padding-bottom:100%;
            &>.image{
                position:absolute;
                top:0;
                left:0;
                right:0;
                bottom:50%;
                background-color:#e5e5e5;
                border-radius:10px 10px 0px 0px;
                background-size:100% !important;
            }
            &>.info{
                padding:20px;
                position:absolute;
                top:50%;
                left:0;
                right:0;
                bottom:0;
                &>p{
                    margin:0px 0px 10px 0px;
                    font-size:12px;
                    &>span{
                        margin-right:5px;
                    }
                }
                &>div{
                    display:flex;
                    &>div{
                        border-radius:50%;
                        background-color:#3C5087;
                        width:35px;
                        height:35px;
                        display:flex;
                        &>p{
                            margin:auto;
                            font-size:12px;
                            color:white;
                            font-weight:bold;
                        }
                    }
                    &>p{
                        margin:auto 0px auto 5px;
                    }
                }
            }
        }
    }
`;
export default ProjectComponent;