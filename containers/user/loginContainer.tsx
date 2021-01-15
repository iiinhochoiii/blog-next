import React from 'react';
import LoginComponent from '../../components/user/login';
import TestStore from '../../stores/test';
import {inject, observer} from 'mobx-react';

interface Props{
    testStore?:TestStore;
}

@inject('testStore')
@observer
class LoginContainer extends React.Component<Props>{
    private testStore = this.props.testStore as TestStore;
    componentDidMount(){
        console.log(this.testStore.test);
    }
    render(){
        return(
            <LoginComponent />
        );
    }
}

export default LoginContainer;