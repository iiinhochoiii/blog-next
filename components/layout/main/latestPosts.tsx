import React from 'react';
import {useState} from 'react';
import styled from 'styled-components';

const LatestPosts: React.FC = () =>{
    const [data] = useState<any>(Array.from({length:3},(i, v)=>v));
    console.log(data);
    return(
        <PostsWrap>
            <PostsContainer>
                <PostsHeader>
                    <h1>Lastst Posts</h1>
                </PostsHeader>
                <PostsContent>
                    {data.map((item:any)=>
                    <article key={item}>
                        <div className="posts_wrap">
                            <div className="posts_thumb">
                                <p>Thumb Image</p>
                            </div>
                            <div className="posts_content">
                                <h2>blog title</h2>
                                <p>blog content ...</p>
                                <div className="posts_writer">
                                    <div className="writer_image" />
                                    <p>writer_name</p>
                                </div>
                            </div>
                        </div>
                    </article>)}
                </PostsContent>
            </PostsContainer>
        </PostsWrap>
    );
}

const PostsWrap = styled.div`
    width:1180px;
    margin: 0 auto;
    max-width:100%;
`;

const PostsContainer = styled.div`
     margin: 50px 0px 0px 0px;
`;

const PostsHeader = styled.div`
    &>h1{
        font-size:28px;
        font-weight:400;
    }
`;

const PostsContent = styled.div`
    margin:20px 0px 0px 0px;
    display:flex;
    justify-content:space-between;
    &>article{
        width:30%;
        border:1px solid;
        cursor: pointer;
        &>.posts_wrap{
            width:100%;
            position: relative;
            padding-bottom:120%;
            &>.posts_thumb{
               position: absolute;
               top:0;
               left:0;
               right:0;
               height:30%;
               background-color:#333333;
               display:flex;
               &>p{
                margin:auto;
                font-size:20px;
                color:#ffffff;
               }
            }
            &>.posts_content{
                position: absolute;
                top:30%;
                left:0;
                right:0;
                bottom:0;
                padding:20px;
                &>h2{
                    margin:0;
                }
                &>p{
                    margin: 20px 0px 0px 0px;
                }
                &>.posts_writer{
                    display:flex;
                    position: absolute;
                    bottom:20px;
                    &>.writer_image{
                        width:30px;
                        height:30px;
                        border:1px solid #e5e5e5;
                        border-radius:50%;
                        background-color:#e5e5e5;
                        margin:auto 0;
                    }
                    &>p{
                        margin: auto 0px auto 20px;
                    }
                }
                
            }
        }
    }
`;
export default LatestPosts;