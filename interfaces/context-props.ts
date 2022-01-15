import ContactStore from '../stores/contact/contactStore';
import UserStore from '../stores/users/userStore';

interface ContextProps {
    contactStore: ContactStore;
    userStore: UserStore;
}

export default ContextProps;