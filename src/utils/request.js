import axios from "axios";
import { MessageBox, Message } from "element-ui";
import store from "@/store";
import { getToken } from "@/utils/auth";

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 10000000,
});

service.interceptors.response.use(response=>{
  const { success, message, data } = response.data
  if(success){
    return data
  }else{
    Message.error(message)
    return Promise.reject(new Error(message))
  }
},error=>{
  Message.error(error.message)
  return Promise.reject(error)
})


export default service;
