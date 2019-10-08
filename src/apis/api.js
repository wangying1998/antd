import { get, post } from './request';

export function getUser(){
    return get('/user','','').then(res=>{
        console.log(res.data)
    })
}