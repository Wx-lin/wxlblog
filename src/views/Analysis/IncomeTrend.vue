<template>
  <el-card>
    <div ref="incomeTrend" style="width: 1000px;height: 500px;"></div>
  </el-card>
</template>

<script setup>
import { init } from 'echarts';
import { incomeTrendOption } from '@/views/Analysis/config.js';

onMounted(() => {
  nextTick(() => {
    // 这里获取元素
    const myChart = init(incomeTrend.value);
    myChart.setOption(incomeTrendOption);
    
  });
});
const incomeTrend = ref(null);
</script>
