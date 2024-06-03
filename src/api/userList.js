import request from '@/business/request.js';

export const getUserList = (pagenum=1,pagesize=10) => {
  return request({
    url: '/user/index',
    params:{
      pagenum:pagenum.value,
      pagesize:pagesize.value
    }
  });
};
