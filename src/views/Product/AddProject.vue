<template>
  <div>
    <el-dialog
      v-model="show"
      title="产品创建"
      width="530"
      style="border-radius: 10px; height: 300px; font-weight: 500;">
      <el-form :model="addProjectData" label-width="auto" style="max-width: 600px">
        <el-form-item label="产品名称" style="margin-top: 15px;">
          <el-input v-model="addProjectData.name" placeholder="请输入产品名称"/>
        </el-form-item>
        <el-form-item label="产品描述">
          <el-input v-model="addProjectData.name"  placeholder="请输入产品名称"/>
        </el-form-item>
        <el-form-item label="价格">
          <el-input v-model="addProjectData.name" placeholder="请输入价格"/>
        </el-form-item>
        <el-button class="btn" @click="cardShow" style="margin-left: 10px; background-color: pink">
          确定
        </el-button>
        <el-button class="btn" @click="cardShow">取消</el-button>
      </el-form>
    </el-dialog>
  </div>
</template>

<script setup>
const props = defineProps(['addProjectShoe']);
const emit = defineEmits(['show-change']);
const addProjectData = reactive({
  name: ""
});
const show = ref(false);
watchEffect(() => {
  show.value = props.addProjectShoe;
});

const cardShow = () => {
  show.value = !show.value;
  emit('show-change', show.value);
};
</script>

<style scoped>
.btn {
  background-color: white;
  color: black;
  border-radius: 0.7em;
  font-size: 17px;
  font-weight: 600;
  padding: 1em 2em;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  border: 1px solid black;
  box-shadow: 0 0 0 0 black;
  float: right;
  width: 80px;
}

.btn:hover {
  transform: translateY(-4px) translateX(-2px);
  box-shadow: 2px 5px 0 0 black;
}

.btn:active {
  transform: translateY(2px) translateX(1px);
  box-shadow: 0 0 0 0 black;
}
</style>
