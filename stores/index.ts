import TestStore from './test';
import UserStore from './users';
import BlogStore from './blog';
import ContactStore from './contact';

class RootStore {
	testStore: TestStore;
	userStore: UserStore;
	blogStore: BlogStore;
	contactStore: ContactStore;

	constructor() {
		this.testStore = new TestStore();
		this.userStore = new UserStore();
		this.blogStore = new BlogStore();
		this.contactStore = new ContactStore();
	}
}

export default RootStore;
