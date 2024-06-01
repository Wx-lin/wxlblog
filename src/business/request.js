import axios from "axios";

const instance=axios.create({
    timeout:4000,
    baseURL:import.meta.env.VITE_APP_URL
})

instance.interceptors.request.use(requset=>{
    return requset
},error=>{
   return Promise.reject(error);
})
instance.interceptors.response.use(response=>{
    return response.data;
},error=>{
    return Promise.reject(error);
})

export default instance;