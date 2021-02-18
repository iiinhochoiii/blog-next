import React from 'react';
import {inject, observer} from 'mobx-react';
import BlogStore from '../../stores/blog';
import BlogUpdateComponent from '../../components/blog/update';
import Router from 'next/router';
import {withCookies, ReactCookieProps} from 'react-cookie';

interface Props extends ReactCookieProps{
    blogStore?:BlogStore;
    query:any;
}

@inject('blogStore')
@observer
class BlogUpdateContainer extends React.Component<Props>{
    private blogStore = this.props.blogStore as BlogStore;
    private token = this.props.cookies?.get("uuid_token");

    readBlog = async(blog_id:string) =>{
        await this.blogStore.getBlogItem(Number(blog_id));
    }
     componentDidMount(){
        if(process.browser){
            const user:any = localStorage.getItem('auth');
            if(user === null || JSON.parse(user).user_id !== 1){
                Router.push('/');
            }
        }
        if(this.props.query.blog_id){
            this.readBlog(this.props.query.blog_id);
        }
    }
     componentDidUpdate(prev:any){
        if(this.props.query.blog_id !== prev.query.blog_id){
            this.readBlog(this.props.query.blog_id);
        }
    }

    updateBlog = async(blog_id:number, title:string, summary:string, content:string, blog_type:string, markdown:string) =>{
        await this.blogStore.updateBlog(blog_id, title, summary, content, blog_type, markdown, this.token);
        if(this.blogStore.blogUpdateStatus?.status){
            alert(this.blogStore.blogUpdateStatus.msg);
            Router.back();
        }
        else{
            alert(this.blogStore.blogUpdateStatus?.msg);
        }
    }
    render(){
        return(
            <BlogUpdateComponent 
                blogItem={this.blogStore.blogItem}
                updateBlog={this.updateBlog}
            />
        );
    }
}

export default withCookies(BlogUpdateContainer);