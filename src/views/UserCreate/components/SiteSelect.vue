<template>
  <el-drawer title="地图选点" size="100%" v-model="siteVisible" direction="btt">
    <span>我来啦!</span>
  </el-drawer>
</template>

<script setup>
const siteVisible = defineModel();
</script>
