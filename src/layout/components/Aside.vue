<template>
  <div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <template v-for="(item, key) in menuList">
        <el-sub-menu v-if="item.children" :key="key" :index="key + ''">
          <template #title>
            <span>{{ item.meta.name }}</span>
          </template>
          <el-menu-item
            v-for="(value, index) in item.children"
            :key="index"
            :index="'' + key + '-' + index">
            {{ value.meta.name }}
          </el-menu-item>
        </el-sub-menu>
        <el-menu-item v-else :index="key + ''">
          {{ item.meta.name }}
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script setup>
import menuList from '@/layout/config.js';

function handleOpen() {}

function handleClose() {}
</script>

<style scoped></style>
