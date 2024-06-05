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
      <el-table-column  label="支付状态" width="180" align="center" >
        <template #default="{row}">
          <el-tag type="primary" v-if="row.pay_status === 1">已消费</el-tag>
          <el-tag type="danger" v-else>未支付</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="created_at" label="创建于" width="250" align="center" />
      <el-table-column label="操作" width="190" fixed="right" align="center">
        <template #default="{row}">
          <el-link type="primary" style="margin-right: 5px" :underline="false">去支付</el-link>
          <el-button type="danger" icon="ShoppingBag" circle @click="changeShow(row)"></el-button>
          <el-button type="danger" icon="Delete" circle></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
const props = defineProps(['orderListData']);
const emit = defineEmits(['change-show'])
const show = ref(false)
const handleSelectionChange = () => {};

function getTotalPrice(row){
  return row.detail.reduce((v,item)=>{
    return v+=(item.goods_number*item.market_price)
  },0)
}

const changeShow = (row)=>{
  show.value = !show.value
  emit('change-show',{show,row})
  show.value = !show.value
  
}

// watchEffect(() => {
//   tableData.value = props.orderListData;
// });

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
