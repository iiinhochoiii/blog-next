import React from 'react';
import {inject, observer} from 'mobx-react';
import BlogStore from '../../stores/blog';
import MainComponent from '../../components/layout/main';

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
        await this.blogStore.getBlogList();
        if(this.blogStore.success["READ_BLOG_LIST"]){
            this.setState({loading:false});
        }
    }

    render(){
        return(
            <MainComponent 
                blogs={this.blogStore.blogs}
                loading={this.state.loading}
            />
        );
    }
}

export default MainContainer;