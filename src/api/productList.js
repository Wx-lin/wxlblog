import request from '@/business/request.js';

export const getProjrctList = (params) => {
  return request({
    url: '/product/index',
    params
  });
};

export const getAddProjrct = (data) => {
  return request({
    url: '/product/create',
    method: 'post',
    data
  });
};

export const getDeleteProject = (params) => {
  return request({
    url: '/product/delete',
    method: 'delete',
    params
  });
};
