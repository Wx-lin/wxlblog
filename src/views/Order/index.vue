<template>
  <div>
    <el-card style="max-width: 100%">
      <template #header>
        <div class="card-header">订单记录</div>
      </template>
      <OrderTable :orderListData="orderListData"/>
      <template #footer>
        <OrderPage />
      </template>
    </el-card>
  </div>
</template>

<script setup>
// 请求数据完成  已传递子组件
import { getOrderList } from '@/api/orderList.js';

const orderListData = ref([])
onBeforeMount(orderList);

async function orderList() {
  const result = await getOrderList();
  orderListData.value = result.list
}
</script>

<style scoped>
.card-header {
  font-weight: 600;
}
</style>
