import React from 'react';
import {useState} from 'react';
import styled from 'styled-components';
import router from 'next/router';
import moment from 'moment';
import Link from 'next/link';
import {blogs} from '../../stores/blog/types';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextTruncate from 'react-text-truncate';
import SearchIcon from '@material-ui/icons/Search';
import Router from 'next/router';

interface Props{
    blogs:blogs[];
    query:any;
    loading:boolean;
}
const BlogComponent: React.FC<Props> = ({blogs, query, loading}) =>{
    const [keyword, setKeyword] = useState<string>('');
    const changeHandler = (e:React.ChangeEvent<HTMLInputElement>) =>{
        const {id, value} = e.target;
        if(id==='keyword'){
            setKeyword(value);
        }
    }
    const search = (e:any) =>{
        e.preventDefault();
        if(keyword===''){
            alert('검색하실 내용 및 키워드를 입력해주세요.');
        } else{
            router.push({
                pathname: '/blog',
                query:{
                    title: keyword
                }
            })
        }
    }
    const moveBlogTypeHandler = (type:string) =>{
        Router.push({
            pathname:"/blog",
            query:{
                "title":type
            }
        })
    }

    return(
        <BlogWrap>
            <BlogBackground style={{backgroundImage:`url(${"./images/blog_background.jpg"})`}}>
                <div>
                    <h1>Blog</h1>
                    <p>Front-end 프레임워크인 React에 관련된 기술 및 경험을 공유 합니다.</p>
                    {query&&<p>keyword: {query}</p>}
                </div>
            </BlogBackground>
            <BlogContainer>
                <div className="content_header">
                    <h1>Related Posts</h1>
                    <form onSubmit={search}>
                        <input type="text" placeholder="검색하실 내용 및 키워드를 입력해주세요." value={keyword} id="keyword" onChange={changeHandler}/>
                        <SearchIcon onClick={search}/>
                    </form>
                </div>
                <BlogContent>
                        {
                            loading?
                            <CircularProgress />
                            :
                            blogs.length>0?
                            <div className="blog_content">
                                {
                                blogs.map((item)=>
                                
                                    <article>
                                        <Link href="/blog/[id]" as={`/blog/${item.blog_id}`}  key={item.blog_id}>
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
                </BlogContent>
            </BlogContainer>
        </BlogWrap>
    );
}

const BlogWrap = styled.div`

`;

const BlogBackground = styled.div`
    height:300px;
    background-size:100% 300px;
    background: no-repeat center;
    position: relative;
    &>div{
        background:rgba(0,0,0,0.3);
        position: absolute;
        top:0;
        bottom:0;
        left:0;
        right:0;
        text-align:center;
        padding-top:100px;
        &>h1{
            margin:0;
            color:#ffffff;
            font-size:42px;
        }
        &>p{
            margin:20px 0px 0px 0px;
            color:#ffffff;
            font-size:18px;
            font-weight:bold;
        }
    }
`;

const BlogContainer = styled.div`
    width:980px;
    margin:0 auto;
    max-width:100%;

    &>.content_header{
        margin-top:20px;
        display:flex;
        justify-content:space-between;
        &>h1{
            margin:0;
        }
        &>form{
            background-color:#ffffff;
            width:40%;
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
const BlogContent = styled.div`
    margin:30px 0px 100px 0px;
    &>.blog_content{
        width:100%;
        &>article{
                border-bottom:1px solid #b4b2b2;
                padding:15px 0px;
                &>a{
                    text-decoration:none;
                    color:#333333;
                    cursor: pointer;
                    &>h4{
                        font-size:22px;
                        font-weight:bold;
                        margin:5px 0px;
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
                    margin:10px 0px 0px 0px;
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

`;
export default BlogComponent;