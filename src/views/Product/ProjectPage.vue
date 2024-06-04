<template>
  <div class="page clear">
    <el-pagination
    v-model:current-page="currentPage"
    v-model:page-size="pageSize"
    :page-sizes="[10, 20, 30]"
    :background="false"
    layout="prev, pager, next,sizes"
    :total="50"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"></el-pagination>
  </div>
  
</template>

<script setup>
const currentPage = ref(1);
const pageSize = ref(10);

const handleSizeChange = () => {};
const handleCurrentChange = () => {};
</script>

<style scoped>
.page{
  float: right;
  height: 47px;
  margin-right: 15px;
}
</style>
