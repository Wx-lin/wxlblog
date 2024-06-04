<template>
  <div>
    <el-card style="max-width: 100%">
      <template #header>
        <div class="card-header">订单记录</div>
      </template>
      <OrderTable :orderListData="orderListData" />
      
      <template #footer>
        <OrderPage :total="total" @change-page="orderList" />
      </template>
    </el-card>
  </div>
</template>

<script setup>
// 请求数据完成  已传递子组件
import { getOrderList } from '@/api/orderList.js';

const orderListData = ref();
const total = ref();

orderList();
async function orderList(params) {
  const result = await getOrderList(params);
  total.value = result.total;
  orderListData.value = result.list;
}


</script>

<style scoped>
.card-header {
  font-weight: 600;
}
</style>
