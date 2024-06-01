<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="(item, index) in matched" >{{ item.name }}</el-breadcrumb-item>
  </el-breadcrumb>
  <h2>{{ route.meta.name }}</h2>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { size } from 'lodash';
const route = useRoute();

[
  {
    name: 'YUDFD',
    Path: 'ddd'
  }
];
const matched = computed(() => {
  let  matched = route.matched
    .filter((item) => item.path !== '/')
    .map((v) => {
      const { path, meta } = v;
      return {
        path,
        name: meta.name
      };
    });
  if (size(matched) === 1) {
    matched = new Array(2).fill(...matched)
  }

  return matched;
});
console.log(route.matched);
</script>
