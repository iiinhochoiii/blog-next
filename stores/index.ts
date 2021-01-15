import TestStore from './test';
class RootStore {
	testStore: TestStore;
	constructor() {
		this.testStore = new TestStore();
	}
}

export default RootStore;
