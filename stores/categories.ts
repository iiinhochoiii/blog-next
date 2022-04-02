import { action, observable, makeObservable } from 'mobx';
import { Categories } from '@/interfaces/models/categories';
import axios from '@/utils/axios';

class CategoriesStore {
  protected modelName: string;

  constructor() {
    makeObservable(this);
    this.modelName = 'categories';
  }

  @observable
  categories: Categories[] = [];

  @action
  setCategories = (value: Categories[]): void => {
    this.categories = value;
  };

  createCategories = async (name: string) => {
    const res = await axios.post(`/${this.modelName}`, { name: name });
    return res.data;
  };

  deleteCategories = async (category_id: number) => {
    const res = await axios.delete(`/${this.modelName}/${category_id}`);
    return res.data;
  };

  updateCategories = async (params: { category_id: number; name: string }) => {
    const res = await axios.post(`/${this.modelName}/update`, params);
    return res.data;
  };

  getCategoriesList = async () => {
    const res = await axios.get(`/${this.modelName}`);
    return res.data;
  };
}

export default CategoriesStore;
