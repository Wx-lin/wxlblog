<template>
  <div>
    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
      <el-sub-menu v-for="(item, key) in menuList" :key="key" :index="key + ''">
        <template #title>
          <span> {{ item.meta.name }} </span>
        </template>
        <el-menu-item v-for="(value, index) in item.children" :index="'' + key + '-' + index">{{ value.meta.name
          }}</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script setup>
import menuList from "@/layout/config.js"

function handleOpen() {

}

function handleClose() {

}
</script>

<style scoped></style>
