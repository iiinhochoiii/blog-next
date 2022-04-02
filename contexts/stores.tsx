import React from 'react';
import { ContactStore, UserStore, BlogStore, AuthStore, CategoriesStore } from '@/stores';
import ContextProps from '@/interfaces/context-props';

const storesContext = React.createContext<ContextProps>({
  contactStore: new ContactStore(),
  userStore: new UserStore(),
  blogStore: new BlogStore(),
  authStore: new AuthStore(),
  categoriesStore: new CategoriesStore(),
});

export default storesContext;
