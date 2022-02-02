import React from 'react';
import {inject, observer} from 'mobx-react';
import BlogStore from '../../stores/blog';

import MainTemplate from '../../components/layout/main/MainTemplate';
import MainTop from '../../components/layout/main/mainTop';
import ExplainSite from '../../components/layout/main/explainSite';
import LatestPosts from '../../components/layout/main/latestPosts';

interface Props{
    blogStore?:BlogStore;
}

@inject('blogStore')
@observer
class MainContainer extends React.Component<Props>{
    state={
        loading:true
    }
    private blogStore = this.props.blogStore as BlogStore;

    async componentDidMount(){
        this.setState({loading:true});
        const res = await this.blogStore.getBlogList("1");
        this.blogStore.setBlogs(res.data)
        this.setState({loading:false});
    }

    render(){
        return(
            <MainTemplate>
                <MainTop />
                <ExplainSite />
                <LatestPosts blogs={this.blogStore.blogs} loading={this.state.loading}/>
            </MainTemplate>
        );
    }
}

export default MainContainer;