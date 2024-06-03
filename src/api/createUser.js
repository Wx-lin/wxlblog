import request from '@/business/request.js';

export const getCreateUser = (data) => {
  return request({
    url: '/user/create',
    method:'post',
    data
  });
};
