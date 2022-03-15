import { action, observable, makeObservable } from 'mobx';
import { contacts } from '@/interfaces/models/contact';
import axios from '@/utils/axios';

class ContactStore {
  protected modelName: string;

  constructor() {
    makeObservable(this);
    this.modelName = 'contacts';
  }

  @observable
  contacts: contacts[] = [];

  @action
  setContacts = (value: contacts[]): void => {
    this.contacts = value;
  };

  createContact = async (contact: { name: string; email: string; phone: string; message: string }) => {
    try {
      const res = await axios.post(`/${this.modelName}`, { name: contact.name, email: contact.email, phone: contact.phone, message: contact.message });

      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  getContactList = async () => {
    try {
      const res = await axios.get(`/${this.modelName}`);

      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  deleteContact = async (contact_id: number) => {
    try {
      await axios.delete(`/${this.modelName}/${contact_id}`);
    } catch (err) {
      console.log(err);
    }
  };
}

export default ContactStore;
