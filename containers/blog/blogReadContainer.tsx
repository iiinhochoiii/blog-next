import React from 'react';
import {inject, observer} from 'mobx-react';
import BlogStore from '../../stores/blog';
import BlogReadComponent from '../../components/blog/read';

interface Props{
    blogStore?:BlogStore;
    blog_id:any;
}

@inject('blogStore')
@observer
class BlogReadContianer extends React.Component<Props>{
    private blogStore = this.props.blogStore as BlogStore;

    async componentDidMount(){
        await this.blogStore.getBlogItem(Number(this.props.blog_id));
    }
    render(){
        return(
            <BlogReadComponent 
                blogItem={this.blogStore.blogItem}
            />
        );
    }
}

export default BlogReadContianer;