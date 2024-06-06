import request from '@/business/request.js';

export const getUserList = (params) => {
  return request({
    url: '/user/index',
    params
  });
};
export const getDelUser = (params) => {
  return request({
    url: '/user/delete',
    method:'delete',
    params
  });
};
export const getEditUser = (params) => {
  return request({
    url: '/user/update',
    method:'put',
    params
  });
};
// export function getDelUser(id){
//   console.log(id)
//   const result = request.delete('/user/delete'+id)
//   return result
// }