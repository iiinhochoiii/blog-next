import React from 'react';
import {observer, inject} from 'mobx-react';
import BlogStore from '../../stores/blog';
import BlogComponent from '../../components/blog';

interface Props{
    blogStore?:BlogStore;
    title:any;
    page:any;
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
        if(this.props.title){
            await this.blogStore.getSearchBlogList(String(this.props.title))
            this.setState({loading:false});
        }
        else{
            await this.blogStore.getBlogList(String(this.props.page?this.props.page:1));
            this.setState({loading:false});
        }
    }
    async componentDidMount(){
        this.initBlog();
    }
    async componentDidUpdate(prev:any){
        if(prev.title !== this.props.title || prev.page !== this.props.page){
            this.initBlog();
        }
    }
    render(){
        return(
            <BlogComponent 
                blogs={this.blogStore.blogs}
                page={this.blogStore.page}
                pageNum={this.props.page}
                title={this.props.title}
                loading={this.state.loading}
            />
        );
    }
}

export default BlogContainer;