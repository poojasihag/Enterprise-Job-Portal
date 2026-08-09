import {
 loginApi,
 registerUser
} from "../lib/api/auth";



export const loginService = async(data:any)=>{

 const response = await loginApi(data);

 return response.data;

};



export const registerService = async(data:any)=>{

 const response = await registerUser(data);

 return response.data;

};