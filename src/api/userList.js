import request from '@/business/request.js';

export const getUserList = (params) => {
  return request({
    url: '/user/index',
    params
  });
};
