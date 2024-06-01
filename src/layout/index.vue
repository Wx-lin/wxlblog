<template>
  <div class="common-layout">
    <el-container>
      <el-header style="padding: 0; margin: 0">
        <Header />
      </el-header>
      <el-container>
        <el-aside width="191px">
          <Aside />
        </el-aside>
        <el-main>
          <Breadcrumb />
          <RouterView />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import Header from '@/layout/components/Header.vue';
import Aside from '@/layout/components/Aside.vue';
import Breadcrumb from '@/layout/components/Breadcrumb.vue';
import { useRoute } from 'vue-router';

const route = useRoute();

</script>
