import { ContactStore, UserStore, BlogStore, AuthStore, CategoriesStore } from '@/stores';

interface ContextProps {
  contactStore: ContactStore;
  userStore: UserStore;
  blogStore: BlogStore;
  authStore: AuthStore;
  categoriesStore: CategoriesStore;
}

export default ContextProps;
