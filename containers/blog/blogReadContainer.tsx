import React from 'react';
import {inject, observer} from 'mobx-react';
import BlogStore from '../../stores/blog';
import BlogReadComponent from '../../components/blog/read';
import router from 'next/router';

interface Props{
    blogStore?:BlogStore;
    blog_id:any;
}

@inject('blogStore')
@observer
class BlogReadContainer extends React.Component<Props>{
    private blogStore = this.props.blogStore as BlogStore;

    async componentDidMount(){
        await this.blogStore.getBlogItem(Number(this.props.blog_id));
    }

    deleteBlog = async(blog_id:number) =>{
        await this.blogStore.deleteBlog(blog_id);
        if(this.blogStore.success["DELETE_BLOG"]){
            alert('삭제되었습니다.');
            router.back();
        }
    }
    render(){
        return(
            <BlogReadComponent 
                blogItem={this.blogStore.blogItem}
                deleteBlog={this.deleteBlog}
            />
        );
    }
}

export default BlogReadContainer;