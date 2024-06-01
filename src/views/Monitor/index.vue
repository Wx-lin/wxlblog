<template>
  <el-card style="max-width: 100%">
    <template #header>
      <div style="font-weight: bold">会员实时交易情况</div>
    </template>

    <div style="display: flex; gap: 15px">
      <el-card v-for="item in amountList" style="width: 400px">
        <template #header>
          <div style="font-weight: bold">{{ item.label }}</div>
        </template>
        {{ ['¥', item.amount].join(' ') }}
      </el-card>
    </div>
    <div id="line" style="min-height: 450px" />
  </el-card>
</template>

<script setup>
import { init } from 'echarts';
import { amountList, lineOption } from './config.js';

onMounted(() => {
  creataLineCharts();
});

const creataLineCharts = () => {
  const myCharts = init(document.getElementById('line'));
  myCharts.setOption(lineOption);
};
</script>

<style scoped lang="stylus">
::v-deep .el-card {
  &__body{
    padding:10px;

  }
}
</style>
