import React from 'react';
import {observer, inject} from 'mobx-react';
import BlogStore from '../../stores/blog';
import BlogComponent from '../../components/blog';

interface Props{
    blogStore?:BlogStore;
}

@inject('blogStore')
@observer
class BlogContainer extends React.Component<Props>{
    private blogStore = this.props.blogStore as BlogStore;

    async componentDidMount(){
        await this.blogStore.getBlogList();
    }
    render(){
        return(
            <BlogComponent 
                blogs={this.blogStore.blogs}
            />
        );
    }
}

export default BlogContainer;