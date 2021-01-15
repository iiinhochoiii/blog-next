import { observable } from 'mobx';

class TestStore {
	@observable test: string = 'mobx teststore';
}

export default TestStore;
