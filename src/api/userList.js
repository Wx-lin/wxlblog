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

export const getEditUser = (data) => {
  return request({
    url: '/user/update',
    method:'PUT',
    data
  });
};

export const getAssignRole = (data) => {
  return request({
    url: '/user/assign',
    method:'PUT',
    data
  });
};


// export function getDelUser(id){
//   console.log(id)
//   const result = request.delete('/user/delete'+id)
//   return result
// }