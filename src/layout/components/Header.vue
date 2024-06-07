<template>
  <div class="header" style="height: 48px">
    <div class="header-left">
      <img src="../../assets/img/logo.png" alt="" width="30px" height="30px" />
      <a href="/">
        锋美CRM店铺管家
        <span class="tag">智慧物联版</span>
      </a>
    </div>
    <el-dropdown>
      <span class="el-dropdown-link">{{ store.user.username }}</span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item plain  @click="clickHandler">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/UserStore.js';
import { ElNotification } from 'element-plus'

const store = useUserStore()
const router = useRouter();

function clickHandler() {
  ElNotification({
    title: '退出成功',
    type: 'success',
  })
  store.logout()
  router.push('/login');
}
</script>

<style scoped>
.header {
  background: #001529;
  line-height: 48px;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
}

.el-dropdown-link {
  margin-top: 15px;
  margin-right: 10px;
  color: white;
}

.header-left a {
  text-decoration: none;
  color: white;
  font-weight: 600;
  font-size: 22px;
  vertical-align: super;
  margin-left: 5px;
}

.header-left a .tag {
  font-size: 12px;
  top: -10px;
  left: 4px;
  position: relative;
}

.login-out {
  color: white;
  text-decoration: none;
}
</style>
