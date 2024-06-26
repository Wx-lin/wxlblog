import { createRouter, createWebHistory } from 'vue-router';
import Index from '../layout/index.vue';
import LoginView from '@/views/LoginView.vue';
import { useUserStore } from '@/stores/UserStore.js';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      redirect: '/pay',
      children: [
        {
          path: '/pay',
          name: 'pay',
          meta: { name: '前台收银' },
          component: () => import('@/views/Pay/index.vue')
        },
        {
          path: '/presale',
          name: 'presale',
          meta: { name: '预约管理' },
          component: () => import('@/views/Presale/index.vue')
        },
        {
          path: '/user',
          name: 'user',
          meta: { name: '会员管理' },
          children: [
            {
              path: '/index',
              name: 'userIndex',
              meta: { name: '用户列表' },
              component: () => import('@/views/UserList/index.vue')
            },
            {
              path: '/create',
              name: 'create',
              meta: { name: '用户创建' },
              component: () => import('@/views/UserCreate/index.vue')
            },
            {
              path: '/map',
              name: 'map',
              meta: { name: '地图分布' },
              component: () => import('@/views/UserMap/index.vue')
            }
          ]
        },
        {
          path: '/product',
          name: 'product',
          meta: { name: '产品管理' },
          component: () => import('@/views/Product/index.vue')
        },
        {
          path: '/order',
          name: 'order',
          meta: { name: '订单列表' },
          component: () => import('@/views/Order/index.vue')
        },
        {
          path: '/report',
          name: 'report',
          meta: { name: '业绩报表' },
          children: [
            {
              path: '/analysis',
              name: 'analysis',
              meta: { name: '分析页' },
              component: () => import('@/views/Analysis/index.vue')
            },
            {
              path: '/monitor',
              name: 'monitor',
              meta: { name: '监控页' },
              component: () => import('@/views/Monitor/index.vue')
            }
          ]
        },
        {
          path: '/inventory',
          name: 'inventory',
          meta: { name: '库存管理' },
          component: () => import('@/views/Page404/InventoryView.vue')
        },
        {
          path: '/employee',
          name: 'employee',
          meta: { name: '员工管理' },
          children: [
            {
              path: '/salary',
              name: 'salary',
              meta: { name: '员工工资' },
              component: () => import('@/views/Page404/SalaryViews.vue')
            },
            {
              path: '/checking',
              name: 'checking',
              meta: { name: '员工考勤' },
              component: () => import('@/views/Page404/CheckingView.vue')
            }
          ]
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: 'login'
    }
  ]
});

router.beforeEach((to, from, next) => {
  console.log(to);
  if (to.path !== '/login') {
    const store = useUserStore();
    if (!store.user || !store.user.token) {
      router.push("/login");
      return;
    }
  }
  next();
});
export default router;
