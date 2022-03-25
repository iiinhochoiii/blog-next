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

  createContact = async (params: { name: string; email: string; phone: string; message: string; receiverUserId: number }) => {
    const res = await axios.post(`/${this.modelName}`, {
      receiverUserId: params.receiverUserId,
      name: params.name,
      email: params.email,
      phone: params.phone,
      message: params.message,
    });

    return res.data;
  };

  getContactList = async () => {
    const res = await axios.get(`/${this.modelName}`);

    return res.data;
  };

  deleteContact = async (contact_id: number) => {
    await axios.delete(`/${this.modelName}/${contact_id}`);
  };
}

export default ContactStore;
