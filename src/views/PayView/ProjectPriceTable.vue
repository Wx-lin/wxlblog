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
    <el-scrollbar style="width: 450px;" height="400px">
      <span>项目价格表</span>
      <el-input
        style="width: 155px; margin-left: 113px"
        placeholder="请输入项目"
        prefix-icon="Search"></el-input>
      <el-button style="height: 30px" icon="Search"></el-button>

      <el-table :data="tableData" height="450" style="width:100%">
        <el-table-column prop="date" label="项目名称" width="165" />
        <el-table-column prop="name" label="价格" width="165" />
        <el-table-column prop="name" label="操作" width="165" >
          <template #header>
            操作
          </template>
          
        </el-table-column>
      </el-table>
    </el-scrollbar>
  </div>
</template>

<script setup>
const tableData = ref([]);
</script>

<style scoped>
.card {
  margin-top: 20px;
  display: flex;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 90%;
  padding: 20px;
}
div {
  margin-right: 35px;
}
div p {
  margin: 0;
  margin-bottom: 20px;
}
:deep(.el-input__wrapper) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

:deep(.el-input__wrapper):hover {
  border-color: #ff6e83 !important;
}

:deep(.el-button):hover {
  border: 1px solid #ff6e83;
  color: #ff6e83;
  background: white;
}

:deep(.el-button) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
</style>
