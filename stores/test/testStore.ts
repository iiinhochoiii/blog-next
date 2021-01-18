import { observable, action } from 'mobx';
import client from '../../lib/client';

class TestStore {
	@observable test: string = 'mobx teststore';
	@observable
	apiData:any = [];

	@action
	getApiData = async() =>{
		try{
			await client.get('/users').then(res=>this.apiData=res.data);
		} catch(e){
			console.log(e);
		} finally{
			
		}
	}
}

export default TestStore;
