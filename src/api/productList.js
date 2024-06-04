import request from '@/business/request.js';

export const getProjrctList = (params) => {
  return request({
    url: '/product/index',
    params
  });
};