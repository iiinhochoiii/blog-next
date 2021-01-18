import TestStore from './test';
import UserStore from './users';

class RootStore {
	testStore: TestStore;
	userStore: UserStore;
	constructor() {
		this.testStore = new TestStore();
		this.userStore = new UserStore();
	}
}

export default RootStore;
