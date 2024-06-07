<template>
  <div class="backg">
    <div class="form-container">
      <p class="title">锋美CRM店铺管家</p>
      <el-form class="form">
        <el-form-item class="input-group">
          <el-input placeholder="" v-model="form.username" />
        </el-form-item>
        <el-form-item class="input-group">
          <el-input placeholder="" v-model="form.password" />
        </el-form-item>
        <el-button class="sign" plain @click="clickHandler">登录</el-button>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import '@/assets/stylus/login.styl';
import { Login } from '@/api/login';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/UserStore.js';
import { ElNotification } from 'element-plus';

const router = useRouter();
const store = useUserStore();
const form = reactive({
  username: '神龙教主',
  password: 'admin888'
});

const successAlter = computed(() => {
  return form.username + '登录成功';
});

const clickHandler = async () => {
  try {
    const { state, data } = await Login(form);
    console.log(state, data);
    if (state !== 200) {
      ElNotification({
        title: '账号密码错误',
        type: 'error'
      });
      return;
    }
    ElNotification({
      title: successAlter,
      type: 'success'
    });
    store.user.username = data.username;
    store.user.token = data.token;
    router.push('/');
  } catch (error) {
    console.log(error);
  }
};
</script>

<style scoped>
body,html{
  width: 100%;
  height: 100%;
}
.backg {
  width: 100%;
  height: 100%;
  background-image: url(../assets/img/loginBg.png);
}


</style>
