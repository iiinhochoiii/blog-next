import BaseTemplate from '@/components/template/base';
import MypageContainer from '@/containers/mypage/mypageContainer';

const Mypage = () =>{
    return(
        <BaseTemplate title="mypage">
            <MypageContainer />
        </BaseTemplate>
    );
}

export default Mypage;