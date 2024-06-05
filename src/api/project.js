import request from '@/business/request.js';

export const getProject = (params) => {
  return request({
    url: '/product/index',
    params
  });
};

export const getVipName = (params) => {
  return request({
    url: '/project/list',
    params
  });
};
