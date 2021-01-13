import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const BlogComponent: React.FC = () =>{
    const data = Array.from({length:15},(v,i)=>i);

    return(
        <BlogWrap>
            <BlogBackground style={{backgroundImage:`url(${'./images/blogBackground.png'})`}}>
                <div>
                    <h1>Blog</h1>
                    <p>Front-end 프레임워크인 React에 관련된 기술 및 경험을 공유 합니다.</p>
                </div>
            </BlogBackground>
            <BlogContainer>
                <div className="content_header">
                    <h1>Related Posts</h1>
                    <p>새 글 작성</p>
                </div>
                <BlogContent>
                    <div className="blog_content">
                        {data.map((item:any)=>
                        <article key={item}>
                            <h2>this is title wrap</h2>
                            <span>{moment().format("YYYY.MM.DD")}</span>
                            <p>
                                this is description wrap<br />
                                this is description wrap<br />
                                this is description wrap
                            </p>
                            <div>
                                user info wrap
                            </div>
                        </article>
                        )}
                    </div>
                </BlogContent>
            </BlogContainer>
        </BlogWrap>
    );
}

const BlogWrap = styled.div`

`;

const BlogBackground = styled.div`
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

const BlogContainer = styled.div`
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
        &>p{
            margin:auto 0px 0px 0px;
            cursor: pointer;
            font-size:14px;
            &:hover{
                font-weight:bold;
            }
        }
    }
`;  
const BlogContent = styled.div`
    margin:30px 0px 100px 0px;
    &>.blog_content{
        width:100%;
        &>article{
            background-color:#ffffff;
            padding:20px;
            margin-top:20px;
            cursor: pointer;
        }
    }

`;
export default BlogComponent;