import { ContactStore, UserStore, BlogStore, AuthStore } from '@/stores';

interface ContextProps {
  contactStore: ContactStore;
  userStore: UserStore;
  blogStore: BlogStore;
  authStore: AuthStore;
}

export default ContextProps;
