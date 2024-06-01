import request from "@/business/request.js";

export const Login = data => {
   return request({
    url:'/user/login',
    method:'post',
    data
   })
};
