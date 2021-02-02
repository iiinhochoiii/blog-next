import React from 'react';
import {inject, observer} from 'mobx-react';
import BlogStore from '../../stores/blog';
import BlogCreateComponent from '../../components/blog/create';
import router from 'next/router';

interface Props{
    blogStore?:BlogStore;
}

@inject('blogStore')
@observer
class BlogCreateContainer extends React.Component<Props>{
    private blogStore = this.props.blogStore as BlogStore;

    createBlog = async(title:string, summary:string, content:string, type:string) =>{
        await this.blogStore.createBlog(title,summary,content, type);
        if(this.blogStore.success["CREATE_BLOG"]){
            router.push('/blog');
        }
    }

    componentDidMount(){
        if(process.browser){
            if(!localStorage.getItem('auth')){
                router.push('/');
            }
        }
    }
    render(){
        return(
            <BlogCreateComponent 
                createBlog={this.createBlog}
            />
        );
    }
}

export default BlogCreateContainer;