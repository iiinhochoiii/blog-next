import LoginContainer from '@/containers/user/loginContainer';
import Head from 'next/head';

const Login = () =>{
    return(
        <>
            <Head>
                <title>Sign in - Choi Tech Blog</title>
            </Head>
            <LoginContainer />
        </>
    );
}

export default Login;