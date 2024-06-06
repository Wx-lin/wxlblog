<template>
  <div>
    <el-dialog
      v-model="centerDialogVisible"
      title="你确认删除吗？"
      width="360"
      style="border-radius: 20px; padding-left: 40px; padding-top: 25px; height: 170px"
      @close="dialogShow">
      <span>删除后将无法恢复</span>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialogShow">取消</el-button>
          <el-button type="danger" @click="handlerDelUser">确定</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
const centerDialogVisible = ref(false);
const props = defineProps(['dialogDelShow']);
const emit = defineEmits(['close-dialog','delete-project'])

watch(props, () => {
  centerDialogVisible.value = props.dialogDelShow;
});

const dialogShow = () => {
  emit('close-dialog')
};

const handlerDelUser = ()=>{
  emit('delete-project')
  dialogShow()
}
</script>

<style scoped>
.dialog-footer {
  margin-top: 10px;
}
</style>
