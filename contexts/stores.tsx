import React from 'react';
import ContactStore from '../stores/contact/contactStore';
import UserStore from '../stores/users/userStore';
import BlogStore from '../stores/blog/blogStore';

import ContextProps from '../interfaces/context-props';

const storesContext = React.createContext<ContextProps>({
    contactStore: new ContactStore(),
    userStore: new UserStore(),
    blogStore: new BlogStore()
});

export default storesContext;