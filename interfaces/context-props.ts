import { ContactStore, UserStore, BlogStore } from '@/stores';

interface ContextProps {
  contactStore: ContactStore;
  userStore: UserStore;
  blogStore: BlogStore;
}

export default ContextProps;
