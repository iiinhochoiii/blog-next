import React from 'react';
import {observer, inject} from 'mobx-react';
import BlogStore from '../../stores/blog';
import BlogComponent from '../../components/blog';

interface Props{
    blogStore?:BlogStore;
    query:any;
}

@inject('blogStore')
@observer
class BlogContainer extends React.Component<Props>{
    private blogStore = this.props.blogStore as BlogStore;
    state={
        loading:false
    }
    initBlog = async () =>{
        this.setState({loading:true});
        if(this.props.query){
            await this.blogStore.getSearchBlogList(String(this.props.query))
            this.setState({loading:false});
        }
        else{
            await this.blogStore.getBlogList();
            this.setState({loading:false});
        }
    }
    async componentDidMount(){
        this.initBlog();
    }
    async componentDidUpdate(prev:any){
        if(prev.query !== this.props.query){
            this.initBlog();
        }
    }
    render(){
        return(
            <BlogComponent 
                blogs={this.blogStore.blogs}
                query={this.props.query}
                loading={this.state.loading}
            />
        );
    }
}

export default BlogContainer;