<template>
  <div class="page clear">
    <el-pagination
      v-model:current-page="pagenum"
      v-model:page-size="pagesize"
      :page-sizes="[10, 20, 30]"
      :background="false"
      layout="prev, pager, next,sizes"
      :total="total"
      @size-change="handlePageChange"
      @current-change="handlePageChange"></el-pagination>
  </div>
</template>

<script setup>
const emit = defineEmits(['change-page'])
// 当前页数
const pagenum = ref(1);
// 默认每页页数
const pagesize = ref(10);
const total = ref(30);
const props = defineProps(['totalNum']);

// watch(
//   props,
//   () => {
//     total.value = props.totalNum;
//   },
//   {
//     deep: true,
//     immediate:true
//   }
// );
watchEffect(() => {
 total.value = props.totalNum;
})
// 更改每页页数&更改页数
const handlePageChange = () => {
  console.log(pagenum.value,pagesize.vlaue)
  emit('change-page',{pagenum:pagenum.value,pagesize:pagesize.vlaue})
};
</script>

<style scoped>
.page {
  float: right;
  height: 47px;
  margin-right: 15px;
}
</style>
