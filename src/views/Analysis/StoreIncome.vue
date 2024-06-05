<template>
  <el-card>
    <div ref="storeIncome" style="width: 100%;height: 500px;"></div>
  </el-card>
</template>

<script setup>
import { init } from 'echarts';
import { storeIncomeOption } from '@/views/Analysis/config.js';
// onMounted(() => {
//   storeIncome.value.focus()
// })
onMounted(() => {
  nextTick(() => {
    // 这里获取元素
    const myChart = init(storeIncome.value);
    myChart.setOption(storeIncomeOption);
    
  });
});
const storeIncome = ref(null);
</script>
