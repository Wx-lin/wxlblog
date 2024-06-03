<template>
  <div>
    <el-card style="max-width: 100%">
      <el-form :inline="true" :model="form" class="demo-form-inline">
        <el-form-item>
          <el-input v-model="form.user_name" placeholder="请输入用户名" clearable />
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.card_tel" placeholder="请输入会员卡号" clearable />
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.role_name" placeholder="请输入角色名" clearable />
        </el-form-item>
        <div>
          <el-form-item>
            <el-date-picker
              v-model="form.time"
              type="datetimerange"
              format="YYYY-MM-DD HH:mm:ss"
              date-format="YYYY/MM/DD ddd"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
              time-format="A hh:mm:ss" />
          </el-form-item>
          <el-form-item>
            <el-button type="danger" @click="onSubmit">查询</el-button>
          </el-form-item>
        </div>
      </el-form>
    </el-card>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const form = reactive({
  user_name: '',
  card_tel: '',
  role_name: '',
  time:[new Date(), new Date()]
});

const onSubmit = () => {
  console.log(form)
};
</script>

<style scoped>
.demo-form-inline .el-input {
  --el-input-width: 220px;
}

.demo-form-inline .el-select {
  --el-select-width: 220px;
}
</style>
