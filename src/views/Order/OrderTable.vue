<template>
  <div>
    <el-table
      ref="multipleTableRef"
      :data="projectData"
      style="width: 100%; height: 400px"
      @selection-change="handleSelectionChange"
      header-align="center">
      <el-table-column prop="product_id" label="订单号" width="170" align="center" />
      <el-table-column prop="title" label="上钟员工" width="170" align="center" />
      <el-table-column prop="info" label="产品名称" width="170" align="center" />
      <el-table-column prop="price" label="总数量" width="170" align="center" />
      <el-table-column prop="created_at" label="总价" width="150" align="center" />
      <el-table-column prop="updated_at" label="支付状态" width="180" align="center" />
      <el-table-column prop="updated_at" label="创建于" width="250" align="center" />
      <el-table-column label="操作" width="210" fixed="right" align="center">
        <template #default>
          <el-link type="primary">去支付</el-link>
          <el-button type="danger" icon="Delete" circle></el-button>
          <el-button type="danger" icon="ShoppingBag" circle></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
const props = defineProps(['projectData']);

const handleSelectionChange = () => {};

</script>

<style scoped></style>
