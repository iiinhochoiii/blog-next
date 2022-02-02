import ContactStore from '../stores/contact/contactStore';
import UserStore from '../stores/users/userStore';
import BlogStore from '../stores/blog/blogStore';

interface ContextProps {
    contactStore: ContactStore;
    userStore: UserStore;
    blogStore: BlogStore;
}

export default ContextProps;