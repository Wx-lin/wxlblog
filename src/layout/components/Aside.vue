<template>
  <div>
        <el-menu default-active="2" class="el-menu-vertical-demo">
          <el-sub-menu index="1">
            <template #title>
              <span>Navigator One</span>
            </template>
              <el-menu-item index="1-1">item one</el-menu-item>
          </el-sub-menu>
        </el-menu>
  </div>
</template>

<script setup>
import menuList from "@/router/Aside.js"
console.log(data);
</script>

<style scoped></style>