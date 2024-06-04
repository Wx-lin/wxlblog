import request from '@/business/request.js';

export const getOrderList = (params) => {
  return request({
    url: '/order/index',
    params
  });
};