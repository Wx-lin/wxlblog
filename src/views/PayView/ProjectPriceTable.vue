<template>
  <div>
    <div class="card">
      <div class="block">
        <el-avatar shape="square" :size="50">
          <el-icon size="25"><User /></el-icon>
        </el-avatar>
      </div>
      <div>
        <p>会员名：{{ datas.user_desc?.name }}</p>
        <p>手机号：{{ datas.user_desc?.phone }}</p>
      </div>
      <div>
        <p>会员卡号：{{ datas.user_desc?.number }}</p>
        <p>卡内余额：{{ datas.user_desc?.balance }}</p>
      </div>
    </div>
    <div style="width: 100%; overflow-y: auto" height="100px">
      <div class="search">
        <span>项目价格表</span>
        <el-input style="width: 255px;" placeholder="请输入项目" prefix-icon="Search">
          <template #append>
            <el-button icon="Search" />
          </template>
        </el-input>
      </div>

      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="project_name" label="项目名称" />
        <el-table-column prop="price" label="价格" />
        <el-table-column prop="name" label="操作">
          <template #default="{ row }">
            <el-button size="small" @click="handleAddShop(row)">+</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  datas: {
    default: {},
    required: true,
    type: Object
  }
});
const emit = defineEmits(['change']);
const tableData = computed(() => props.datas.price_list);

const handleAddShop = (row) => {
  emit('change', row);
};
</script>

<style scoped lang="stylus">
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

.search {
  margin-top: 10px;
  border: 1px solid #ddd;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right 0
  padding-left 20px 
}
</style>
