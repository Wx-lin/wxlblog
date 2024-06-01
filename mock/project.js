const testList = {
  user_desc: {
    name: 'John Smith',
    number: 567439473913892,
    phone: '1311555814',
    balance: '1000'
  },
  price_list: [
    {
      project_name: '洗吹',
      price: 15
    },
    {
      project_name: '造型',
      price: 30
    },
    {
      project_name: '剪发（发型设计）',
      price: 58
    },
    {
      project_name: '烫发',
      price: 398
    },
    {
      project_name: '黑油	',
      price: 98
    },
    {
      project_name: '烫发',
      price: 398
    },
    {
      project_name: '黑油	',
      price: 98
    },
    {
      project_name: '烫发',
      price: 398
    },
    {
      project_name: '黑油	',
      price: 98
    }
  ]
};

export default [
  {
    url: '/api/project/list',
    type: 'get',
    response() {
      return {
        code: 200,
        msg: '111',
        data: {
          ...testList
        }
      };
    }
  }
];
