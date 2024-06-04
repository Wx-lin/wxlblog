<template>
  <div class="page clear">
    <el-pagination
      v-model:current-page="pagenum"
      v-model:page-size="pagesize"
      :page-sizes="[10, 20, 30, 50, 100]"
      :background="false"
      layout="prev, pager, next,sizes"
      :total="total"
      @size-change="handlePageChange"
      @current-change="handlePageChange"></el-pagination>
  </div>
</template>

<script setup>
const emit = defineEmits(['change-page']);
// 当前页数
const pagenum = ref(1);
// 默认每页页数
const pagesize = ref(10);
const props = defineProps(['totalNum', 'total']);
/*侦听
watch(
  props,
  () => {
    total.value = props.totalNum;
  },
  {
    deep: true,
    immediate:true
  }
);
watchEffect(() => {
  total.value = props.totalNum;
});
*/
// 更改每页页数&更改页数
const handlePageChange = () => {
  console.log(pagenum.value, pagesize.value);
  emit('change-page', { pagenum: pagenum.value, pagesize: pagesize.value });
};
</script>

<style scoped>
.page {
  float: right;
  height: 47px;
  margin-right: 15px;
}
</style>
