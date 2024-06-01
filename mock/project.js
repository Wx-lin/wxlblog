const testList = ['测试数据', '假的'];

export default [
  {
    url: '/api/project/list',
    type: 'get',
    response() {
      return {
        code: 200,
        msg: '111',
        data: {
          testList
        }
      };
    }
  }
];
