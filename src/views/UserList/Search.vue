<template>
  <div>
    <el-card style="max-width: 100%">
      <el-form :inline="true" :model="form" class="demo-form-inline">
        <el-form-item>
          <el-input v-model="form.username" placeholder="请输入用户名" clearable />
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.card_number" placeholder="请输入会员卡号" clearable />
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
            <el-button type="danger" @click="onReset">重置</el-button>
          </el-form-item>
        </div>
      </el-form>
    </el-card>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const emit = defineEmits(['click-search']);
let form = reactive({
  username: '',
  card_number: '',
  role_name: '',
  time: [new Date(), new Date()]
});

const onSubmit = () => {
  emit('click-search', form);
};
const onReset = () => {
  form.username= ''
  form.card_number= ''
  form.role_name= ''
  form.time= [new Date(), new Date()]
};
</script>

<style scoped>

</style>
