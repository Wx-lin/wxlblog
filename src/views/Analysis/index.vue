<template>
  <div>
    <div class="header">
      <el-card class="header-card" v-for="(item, key) in amountList">
        <template #header>
          <div class="card-header" style="height: 15px; line-height: 15px">
            <span style="font-size: 13px; font-weight: 600; color: #999">{{ item.label }}</span>
          </div>
        </template>
        <p calss="p_icon">
            <svg class="icon">
            <use :xlink:href="item.icon" :style="{background:item.backg}"></use>
          </svg>
           {{ item.amount }}
        </p>
      </el-card>
    </div>
    <el-card style="width: 100%; margin-top: 25px">
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick" style="width: 100%">
        <el-tab-pane label="店铺收入" name="first" style="width: 100%">
          <StoreIncome />
        </el-tab-pane>
        <el-tab-pane label="收入走势" name="second" style="width: 100%">
          <IncomeTrend />
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script setup>
import '@/icons/iconfont.js';
import StoreIncome from '@/views/Analysis/StoreIncome.vue';
import IncomeTrend from '@/views/Analysis/IncomeTrend.vue';
import { amountList } from '@/views/Analysis/config.js';
const activeName = ref('first');

// 切换标签页
const handleClick = () => {};
</script>

<style scoped>
.header {
  display: flex;
  width: 100%;
}
.header .header-card {
  flex: 1;
  margin-right: 30px;
  height: 140px;
}
.header .header-card:last-of-type {
  margin-right: 0;
}
.icon {
  width: 3em;
  height: 3em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  color: white;
  text-align: center;
  background: #ccc;
  border-radius: 40%;
}
.p_icon{
  display: flex;
}

:deep(.el-card__body){
  padding: 0;
  padding-left: 30px;
}
</style>
