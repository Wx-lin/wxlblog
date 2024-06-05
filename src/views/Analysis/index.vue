<template>
  <div>
    <div class="header">
      <el-card class="header-card">1</el-card>
      <el-card class="header-card">2</el-card>
      <el-card class="header-card">3</el-card>
      <el-card class="header-card">4</el-card>
    </div>
    <el-card style="width: 100%;margin-top: 25px;">
    
    </el-card>
  </div>
</template>

<script setup></script>

<style scoped>
.header{
  display: flex;
  width: 100%;
}
.header .header-card{
  flex: 1;
  margin-right: 30px;
  height: 140px;
}
.header .header-card:last-of-type{
  margin-right: 0;
}
</style>
