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
    private blogStore = this.props.blogStore as BlogStore;

    async componentDidMount(){
        await this.blogStore.getBlogList();
    }

    render(){
        return(
            <MainComponent 
                blogs={this.blogStore.blogs}
            />
        );
    }
}

export default MainContainer;