import axios from 'axios';
import Qs from 'qs';
import baseUrl from '../static/js/common';

export function get(url, params){
    return new Promise((resolve, reject)=>{
        axios.get(baseUrl+url, {
            params: params
        }).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}

export function post(url, params){
    return new Promise((resolve, reject)=>{
        axios.post(baseUrl+url, Qs.stringify(params))
        .then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}