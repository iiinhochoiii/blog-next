export interface contacts {
  contact_id: number;
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  created_at?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
}
