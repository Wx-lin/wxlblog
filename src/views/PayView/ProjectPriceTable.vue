<template>
  <div>
    <div class="card">
      <div class="block">
        <el-avatar shape="square" :size="50">
          <el-icon size="25"><User /></el-icon>
        </el-avatar>
      </div>
      <div>
        <p>会员名：</p>
        <p>XXX</p>
        <p>手机号：XXX</p>
      </div>
      <div>
        <p>会员卡号：</p>
        <p>232301200208099876</p>
        <p>卡内余额：111.20</p>
      </div>
    </div>
    <el-table :data="tableData" height="250" style="width: 40%">
      <el-table-column prop="date" label="Date" width="160" />
      <el-table-column prop="name" label="Name" width="160" />
      <el-table-column prop="name" label="Name" width="160" />      
    </el-table>
  </div>
</template>

<script setup>
const tableData = ref([])
</script>

<style scoped>
.card {
  margin-top: 20px;
  display: flex;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 40%;
  padding: 20px;
}
div {
  margin-right: 35px;
}
div p {
  margin: 0;
  margin-bottom: 20px;
}
</style>
