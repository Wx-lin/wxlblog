import { createRouter, createWebHistory } from "vue-router";
import Index from "../layout/index.vue";
import LoginView from "@/views/LoginView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "index",
      component: Index,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
      meta: "login",
    },
    {
      path: "/pay",
      name: "pay",
      meta: { name: "前台收银" },
      component: () => import("@/views/PayView.vue"),
    },
    {
      path: "/presale",
      name: "presale",
      meta: { name: "预约列表" },
      component: () => import("@/views/PresaleView.vue"),
    },
    {
      path: "/user",
      name: "user",
      meta: { name: ["会员管理"] },
      children: [
        {
          path: "/index",
          name: "index",
          meta: { name: ["用户列表"] },
          component: () => import("@/views/UserListView.vue"),
        },
        {
          path: "/create",
          name: "create",
          meta: { name: ["用户创建"] },
          component: () => import("@/views/UserCreateView.vue"),
        },
        {
          path: "/map",
          name: "map",
          meta: { name: ["地图分布"] },
          component: () => import("@/views/UserMapView.vue"),
        },
      ],
    },
    {
      path: "/product",
      name: "product",
      meta: { name: "产品管理" },
      component: () => import("@/views/ProductView.vue"),
    },
    {
      path: "/order",
      name: "order",
      meta: { name: "订单列表" },
      component: () => import("@/views/OrderView.vue"),
    },
    {
      path: "/report",
      name: "report",
      meta: { name: "业绩报表" },
      children: [
        {
          path: "/analysis",
          name: "analysis",
          meta: { name: "分析页" },
          component: () => import("@/views/AnalysisView.vue"),
        },
        {
          path: "/monitor",
          name: "monitor",
          meta: { name: "监控页" },
          component: () => import("@/views/MonitorView.vue"),
        },
      ],
    },
    {
      path: "/inventory",
      name: "inventory",
      meta: { name: "库存管理" },
      component: () => import("@/views/InventoryView.vue"),
    },
    {
      path: "/employee",
      name: "employee",
      children: [
        {
          path: "/salary",
          name: "salary",
          meta: { name: "员工工资" },
          component: () => import("@/views/SalaryViews.vue"),
        },
        {
          path: "/checking",
          name: "checking",
          meta: { name: "员工考勤" },
          component: () => import("@/views/CheckingView.vue"),
        },
      ],
    },
  ],
});
// router.beforeEach((to, from, next) => {
//   if (!to.meta.login) {
//     const store = useUserStore();
//     if (!store.username || !store.user.token) {
//       router.replace("/login");
//       return;
//     }
//   }
//   next();
// })
export default router;
