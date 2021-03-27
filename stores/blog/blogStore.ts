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

    @observable
    _blogUpdateStatus?:{status:boolean, msg:string};

    @computed
    get blogs(){
        return this._blogs;
    }

    @computed
    get blogItem(){
        return this._blogItem;
    }

    @computed
    get blogUpdateStatus(){
        return this._blogUpdateStatus;
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
    getSearchBlogList = async (title:string) =>{
        this._blogs = [];
        this._init("READ_BLOG_LIST");
        try{
            const res = await client.get(`/api/blogs/search?title=${title}`);
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
            const res = await client.get(`/api/blogs/read/${blog_id}`);
            this._blogItem = res.data.data;
            this._success["READ_BLOG_DETAIL"] = true;
        } catch(e){
            this._failure["READ_BLOG_DETAIL"] = [true, e];
        } finally{
            this._pending["READ_BLOG_DETAIL"] = false;
        }
    }

    @action
    createBlog = async(title:string, summary:string, content:string, type:string, markdown:string)=>{
        this._init("CREATE_BLOG");
        try{
            const res = await client.post('/api/blogs', qs.stringify({title:title, summary:summary, content:content, type:type, markdown:markdown}));
            if(res.data.status){
                this._success["CREATE_BLOG"] = true;
            }
        } catch(e){
            this._failure["CREATE_BLOG"] = [true, e];
        } finally{
            this._pending["CREATE_BLOG"] = false;
        }
    }

    @action
    deleteBlog = async(blog_id:number) =>{
        this._init("DELETE_BLOG");
        try{
            const res = await client.delete(`/api/blogs/${blog_id}`);
            if(res.data.status){
                this._success["DELETE_BLOG"] = true;
            }
        } catch(e){
            this._failure["DELETE_BLOG"] = [true, e];
        } finally{
            this._pending["DELETE_BLOG"] = false;
        }
    }

    @action
    updateBlog = async(blog_id:number, title:string, summary:string, content:string, blog_type:string, markdown:string, token:string) =>{
        this._init("UPDATE_BLOG");
        try{
            const res = await client.post("/api/blogs/update", qs.stringify({blog_id:blog_id, title:title, summary:summary, content:content, blog_type:blog_type, markdown:markdown, token}));
            this._blogUpdateStatus = await res.data;
            if(res.data.status){
                this._success["UPDATE_BLOG"] = true;
            }
        } catch(e){
            this._failure["UPDATE_BLOG"] = [true, e];
        } finally{
            this._pending["UPDATE_BLOG"] = false;
        }
    }
}

export default BlogStore;