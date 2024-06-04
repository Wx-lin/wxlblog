import request from '@/business/request.js';

export const getProject = (params) => {
  return request({
    url: '/project/list',
    params
  });
};
// export const getProject = (params) => {
//   return request({
//     url: '/project/list',
//     params
//   });
// };
