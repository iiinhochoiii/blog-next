import TestStore from './test';
import UserStore from './users';
import BlogStore from './blog';
class RootStore {
	testStore: TestStore;
	userStore: UserStore;
	blogStore: BlogStore;
	constructor() {
		this.testStore = new TestStore();
		this.userStore = new UserStore();
		this.blogStore = new BlogStore();
	}
}

export default RootStore;
