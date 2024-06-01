<template>
  <div>
    <el-card style="max-width: 100%">
      <el-row justify="center">
        <el-col :span="23">
          <el-input size="large" placeholder="请输入卡号或手机号" prefix-icon="Search"></el-input>
        </el-col>
        <el-col :span="1">
          <el-button size="large" icon="Search"></el-button>
        </el-col>
      </el-row>
      <div class="common-layout">
        <el-container>
          <el-aside width="45%">
            <ProjectPriceTable />
          </el-aside>
          <el-main>
            <Shop />
          </el-main>
        </el-container>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { getProject } from '@/api/project.js';

onMounted(() => {
  getProjectList();
});

const getProjectList = async () => {
  const res = await getProject();
  console.log('res', res);
};
</script>

<style scoped>
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
