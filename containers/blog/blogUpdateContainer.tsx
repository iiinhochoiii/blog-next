import React from 'react';
import {inject, observer} from 'mobx-react';
import BlogStore from '../../stores/blog';
import BlogUpdateComponent from '../../components/blog/update';
import Router from 'next/router';

interface Props{
    blogStore?:BlogStore;
    query:any;
}

@inject('blogStore')
@observer
class BlogUpdateContainer extends React.Component<Props>{
    private blogStore = this.props.blogStore as BlogStore;

    readBlog = async(blog_id:string) =>{
        await this.blogStore.getBlogItem(Number(blog_id));
    }
    async componentDidMount(){
        if(this.props.query.blog_id){
           await this.readBlog(this.props.query.blog_id);
        }
    }
    async componentDidUpdate(prev:any){
        if(this.props.query.blog_id !== prev.query.blog_id){
           await this.readBlog(this.props.query.blog_id);
        }
    }

    updateBlog = async(blog_id:number, title:string, summary:string, content:string, blog_type:string, markdown:string) =>{
        await this.blogStore.updateBlog(blog_id, title, summary, content, blog_type, markdown);
        if(this.blogStore.success["UPDATE_BLOG"]){
            Router.back();
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

export default BlogUpdateContainer;