<template>
  <div>
    <el-card style="max-width: 100%">
      <template #header>
        <div class="card-header">订单记录</div>
      </template>
      <OrderTable />
      <template #footer>
        <OrderPage />
      </template>
    </el-card>
  </div>
</template>

<script setup>
import { getOrderList } from '@/api/orderList.js';
</script>

<style scoped>
.card-header {
  font-weight: 600;
}
</style>
