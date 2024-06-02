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
            <ProjectPriceTable :datas="datas" @change="handleProjectChange" />
          </el-aside>
          <el-main>
            <Shop :shopList="shopList" @delete-shop-option="handlerDelOption" :totalPrice = "totalPrice"/>
          </el-main>
        </el-container>
      </div>
    </el-card>
    <div class="fotter">
      <p>已选择{{ shopList.length }}项服务，总价为{{ totalPrice }}元</p>
    </div>
  </div>
</template>

<script setup>
import { getProject } from '@/api/project.js';
import { v4 as uuidv4 } from 'uuid';

onMounted(() => {
  getProjectList();
});

const datas = ref({});
const shopList = ref([]);

const totalPrice = computed(()=>{
  return shopList.value.reduce((sum,item)=>{
    return sum + item.price
  },0)
})

const getProjectList = async () => {
  try {
    const { data, code } = await getProject();
    if (code !== 200) {
      return;
    }

    datas.value = data;
  } catch (error) {}
};

const handleProjectChange = (row) => {
  shopList.value.push(row);

  shopList.value = shopList.value.map((v) => {
    return {
      ...v,
      limit: 1,
      id: uuidv4()
    };
  });
};

const handlerDelOption = (option) => {
  shopList.value = shopList.value.filter((item) => item.id !== option.id);
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

.fotter {
  position: fixed;
  width: 100%;
  height: 40px;
  background: #f0f2f5;
  bottom: 0;
  z-index: 1;
}
</style>
