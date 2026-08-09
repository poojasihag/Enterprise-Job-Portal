import api from "./axios";



export const loginApi = (data: any) => {
  return api.post("/users/login", data);
}; 
export const registerUser = (data:any)=>{
  return api.post("/users/create",data);
};