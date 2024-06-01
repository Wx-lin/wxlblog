<template>
  <div>
    <div class="shop-car">购物车</div>
    <el-table :data="shopList" style="width: 100%">
      <el-table-column label="项目名" prop="project_name" />
      <el-table-column label="数量" prop="limit" />
      <el-table-column label="单价" prop="price" />
      <el-table-column label="友情价" prop="price" />
      <el-table-column label="小计" prop="price" />
      <el-table-column align="right" label="操作">
        <template #default="scope">
          <el-button size="small" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
const props = defineProps(['shopList']);
</script>

<style scoped>
.shop-car {
  height: 45px;
  font-size: 18px;
  font-weight: 500;
  border-bottom: 1px solid #ccc;
}
</style>
