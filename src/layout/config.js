export default [
  {
    path: '/pay',
    name: 'pay',
    meta: { name: '前台收银' }
  },
  {
    path: '/presale',
    name: 'presale',
    meta: { name: '预约管理' }
  },
  {
    path: '/user',
    name: 'user',
    meta: { name: '会员管理' },
    children: [
      {
        path: '/index',
        name: 'index',
        meta: { name: '用户列表' }
      },
      {
        path: '/create',
        name: 'create',
        meta: { name: '用户创建' }
      },
      {
        path: '/map',
        name: 'map',
        meta: { name: '地图分布' }
      }
    ]
  },
  {
    path: '/product',
    name: 'product',
    meta: { name: '产品管理' }
  },
  {
    path: '/order',
    name: 'order',
    meta: { name: '订单列表' }
  },
  {
    path: '/report',
    name: 'report',
    meta: { name: '业绩报表' },
    children: [
      {
        path: '/analysis',
        name: 'analysis',
        meta: { name: '分析页' }
      },
      {
        path: '/monitor',
        name: 'monitor',
        meta: { name: '监控页' }
      }
    ]
  },
  {
    path: '/inventory',
    name: 'inventory',
    meta: { name: '库存管理' }
  },
  {
    path: '/employee',
    name: 'employee',
    meta: { name: '员工管理' },
    children: [
      {
        path: '/salary',
        name: 'salary',
        meta: { name: '员工工资' }
      },
      {
        path: '/checking',
        name: 'checking',
        meta: { name: '员工考勤' }
      }
    ]
  }
];
