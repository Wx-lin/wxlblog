<template>
  <div>
    <el-table
      ref="multipleTableRef"
      :data="orderListData"
      style="width: 100%; height: 400px"
      @selection-change="handleSelectionChange"
      header-align="center">
      <!-- staff  total_price-->
      <el-table-column prop="order_sn" label="订单号" width="170" align="center" />
      <el-table-column label="上钟员工" width="170" align="center">
        <template #default="{ row }">
          {{ '胡鹏程' }}
        </template>
      </el-table-column>
      <el-table-column prop="title" label="产品名称" width="170" align="center" />
      <el-table-column prop="total_number" label="总数量" width="170" align="center" />
      <el-table-column prop="total_price" label="总价" width="150" align="center">
        <template #default="{ row }">
          {{ getTotalPrice(row) }}
        </template>
      </el-table-column>
      <el-table-column prop="pay_status" label="支付状态" width="180" align="center" />
      <el-table-column prop="created_at" label="创建于" width="250" align="center" />
      <el-table-column label="操作" width="190" fixed="right" align="center">
        <template #default>
          <el-link type="primary" style="margin-right: 5px">去支付</el-link>
          <el-button type="danger" icon="Delete" circle></el-button>
          <el-button type="danger" icon="ShoppingBag" circle></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
// let tableData = ref([]);
const props = defineProps(['orderListData']);
const handleSelectionChange = () => {};

// watchEffect(() => {
//   tableData.value = props.orderListData;
// });

function getTotalPrice(row){
  return row.detail.reduce((v,item)=>{
    return v+=(item.goods_number*item.market_price)
  },0)
}
// watch(
//   () => props,
//   () => {
//     tableData.value = props.orderListData;
//     console.log(tableData);
//   },
//   {
//     deep: true,
//     immediate: true
//   }
// );
</script>

<style scoped></style>
