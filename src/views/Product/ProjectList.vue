<template>
  <div>
    <el-table
      ref="multipleTableRef"
      :data="projectData"
      style="width: 100%; height: 400px"
      header-align="center">
      <el-table-column prop="product_id" label="项目编号" width="100" align="center" />
      <el-table-column prop="title" label="项目名称" width="220" align="center" />
      <el-table-column prop="info" label="项目描述" width="220" align="center" />
      <el-table-column prop="price" label="价格" width="120" align="center" />
      <el-table-column prop="created_at" label="创建于" width="220" align="center" />
      <el-table-column prop="updated_at" label="更新于" width="220" align="center" />
      <el-table-column label="操作" width="110" fixed="right" align="center">
        <template #default="{row}">
          <el-button type="danger" icon="Delete" circle @click="handlerDelParject(row)"></el-button>
        </template>
      </el-table-column>
    </el-table>
    
  </div>
</template>

<script setup>
const props = defineProps(['projectData']);
const emit = defineEmits(['delete-project'])

const handlerDelParject = (row)=>{
  emit('delete-project',row)
}
</script>

<style scoped></style>
