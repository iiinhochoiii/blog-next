import {action, observable, computed, makeObservable} from 'mobx';
import BaseStore from '../BaseStore';
import client from '../../lib/client';
import {blogs} from './types';
import qs from 'qs';
class BlogStore extends BaseStore{
    constructor() {
		super();
		makeObservable(this);
    }

    @observable
    _blogs:blogs[] = [];
    
    @observable
    _blogItem?:blogs;

    @computed
    get blogs(){
        return this._blogs;
    }

    @computed
    get blogItem(){
        return this._blogItem;
    }

    @action
    getBlogList = async() =>{
        this._blogs = [];
        this._init("READ_BLOG_LIST");
        try{
            const res = await client.get('/api/blogs');
            this._blogs = await res.data.data;
            this._success["READ_BLOG_LIST"] = true;
        } catch(e){
            this._failure["READ_BLOG_LIST"] = [true, e];
        } finally{
            this._pending["READ_BLOG_LIST"] = false;
        }
    }

    @action
    getBlogItem = async(blog_id:number) =>{
        this._blogItem = undefined;
        this._init("READ_BLOG_DETAIL");
        try{
            const res = await client.get(`/api/blogs/${blog_id}`);
            this._blogItem = res.data.data;
            this._success["READ_BLOG_DETAIL"] = true;
        } catch(e){
            this._failure["READ_BLOG_DETAIL"] = [true, e];
        } finally{
            this._pending["READ_BLOG_DETAIL"] = false;
        }
    }

    @action
    createBlog = async(title:string, summary:string, content:string, type:string)=>{
        this._init("CREATE_BLOG");
        try{
            const res = await client.post('/api/blogs', qs.stringify({title:title, summary:summary, content:content, type:type}));
            if(res.data.status){
                this._success["CREATE_BLOG"] = true;
            }
        } catch(e){
            this._failure["CREATE_BLOG"] = [true, e];
        } finally{
            this._pending["CREATE_BLOG"] = false;
        }
    }
}

export default BlogStore;