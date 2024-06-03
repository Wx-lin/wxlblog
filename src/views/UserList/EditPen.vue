<template>
  <el-dialog v-model="editPenShow" title="用户编辑" width="600">
    <el-form :model="editUserData" label-width="auto" style="width: 500px">
      <el-form-item label="用户名：" style="margin-top: 20px; font-size: 40px">
        <el-input v-model="editUserData.username" style="height: 50px; border-radius: 30px" />
      </el-form-item>
      <el-form-item label="密码：" style="margin-top: 20px">
        <el-input v-model="editUserData.password" style="height: 50px; border-radius: 30px" />
      </el-form-item>
      <el-form-item>
        <el-button>取消</el-button>
        <el-button type="danger">立即编辑</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script setup>
const editPenShow = defineModel();
const prop = defineProps(['editUserData']);
</script>


