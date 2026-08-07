import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5000/api"
});

export const registerUser = (data:any)=>{
    return api.post("/users/register",data);
}