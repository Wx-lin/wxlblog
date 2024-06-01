<template>
  <div class="form-container">
    <p class="title">锋美CRM店铺管家</p>
    <el-form class="form">
      <el-form-item class="input-group">
        <el-input placeholder="" v-model="form.username" />
      </el-form-item>
      <el-form-item class="input-group">
        <el-input placeholder="" v-model="form.password" />
      </el-form-item>
      <el-button class="sign" @click="clickHandler">登录</el-button>
    </el-form>
  </div>
</template>

<script setup>
import "@/assets/stylus/login.styl"
import { Login } from "@/api/login"
import { useRouter } from "vue-router"
import {useUserStore} from "@/stores/UserStore.js"

const router = useRouter()
const store = useUserStore()
const form = reactive({
  username: "神龙教主",
  password: "admin888"
})

const clickHandler = async () => {
  try {
    const { data } = await Login(form);
    store.user = data
    router.push("/")
  } catch (error) {
    console.log(error);
  }
}

</script>

<style scoped></style>
