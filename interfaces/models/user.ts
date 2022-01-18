export type checkIdStatus = {
    status:boolean;
    massage:string;
}

export type userData = {
    status:boolean;
    data:{
        name?:string;
        message?:string;
        user_id?:number;
        email?:string;
        phone?:string;
        profile_color?:string;
        iat?:number;
        exp?:number;
    }
}