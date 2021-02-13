import React from 'react';
import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextTruncate from 'react-text-truncate';
import moment from 'moment';
import Link from 'next/link';
import router from 'next/router';
import {blogs} from '../../stores/blog/types';

interface Props{
    blogs:blogs[];
    loading:boolean;
}
const BlogContent: React.FC<Props> = ({blogs, loading}) =>{
    const moveBlogTypeHandler = (type:string) =>{
        router.push({
            pathname:"/blog",
            query:{
                "title":type
            }
        })
    }
    return(
        <BlogContents>
                {
                    loading?
                    <CircularProgress />
                    :
                    blogs.length>0?
                    <div className="blog_content">
                        {
                        blogs.map((item)=>
                            <article key={item.blog_id}>
                                <Link href="/blog/[id]" as={`/blog/${item.blog_id}`}>
                                <a>
                                <h4>{item.title}</h4>
                                <p>
                                <TextTruncate
                                    line={2}
                                    element="span"
                                    truncateText="…"
                                text={item.summary}
                                />
                                </p>
                                </a>
                                </Link>
                                <span onClick={()=>moveBlogTypeHandler(item.blog_type)} ># {item.blog_type}</span>
                                <div>
                                    <p className="blog_date">{moment(item.created_at).format("YYYY-MM-DD")}</p>
                                    <p className="blog_writer">{item.name}</p>
                                </div>
                            </article>
                        )
                    }
                    </div>:
                    <div className="blog_content_none_data">
                        <p>작성된 게시글이 없습니다.</p>
                    </div>
                }
        </BlogContents>
    );
}

const BlogContents = styled.div`
    margin:10px 0px 100px 0px;
    &>.blog_content{
        width:100%;
        &>article{
                border-bottom:1px solid #b4b2b2;
                padding:15px 0px;
                &>a{
                    text-decoration:none;
                    color:#333333;
                    cursor: pointer;
                    &:hover{
                        &>h4, p{
                            color:#0085A1;
                        }
                    }
                    &>h4{
                        font-size:22px;
                        font-weight:400;
                        margin:10px 0px;
                    }
                    &>p{
                        margin:0px 0px 10px 0px;
                        font-size:18px;
                        line-height:30px;
                    }
                }
                &>span{
                    font-size:12px;
                    border-radius:10px;
                    background-color:#e5e5e5;
                    padding:5px 10px;
                    cursor: pointer;
                }
                
                &>div{
                    display:flex;
                    justify-content:space-between;
                    margin:15px 0px 0px 0px;
                    &>p{
                        margin:0px;
                        font-size:14px;
                    }
                }
            }
    }

    &>.blog_content_none_data{
        margin-top:20px;
        border-top:1px solid #b4b2b2;
        border-bottom:1px solid #b4b2b2;
        height:100px;
        &>p{
            margin:0;
            line-height:100px;
            text-align:center;
            font-size:12px;
        }
    }

    @media screen and (max-width: 690px){
        &>.blog_content{
            &>article{
                &>a{
                    &>h4{
                        font-size:18px;
                    }
                    &>p{
                        font-size:16px;
                    }
                }
            }
        }
    }
`;

export default BlogContent;