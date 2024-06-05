<template>
  <div>
    <el-dialog
      v-model="show"
      width="600"
      @close="handlerChangeShow"
      :close-on-click-modal="false"
      style="height:270px;"
      >
      <el-table :data="projectData" show-summary :span-method="merge">
        <el-table-column property="goods_name" label="项目名" width="163"style="height: 40px" />
        <el-table-column property="goods_number" label="数量" width="100" />
        <el-table-column property="market_price" label="单价" width="100" />
        <el-table-column property="market_price" label="友情价" width="100" />
        <el-table-column property="market_price" label="小计" width="100" />
      </el-table>
      <el-button class="Btn" @click="handlerChangeShow">取消</el-button>
    </el-dialog>
  </div>
</template>

<script setup>
const show = ref(false);
const projectData = ref();
const props = defineProps(['orderProjectListShow', 'orderProjectListData']);
const emit = defineEmits(['change-cancel']);
const merge = ({
  row,
  column,
  rowIndex,
  columnIndex,
}) => {
  if (rowIndex  === projectData.value.length) {
    if (columnIndex === 0) {
      return [2,3,4]
    }
  }
}

const handlerChangeShow = () => {
  show.value = false;
  emit('change-cancel', {show,row:''});
};

// 侦听弹窗变化
watch(
  () => props,
  () => {
    show.value = props.orderProjectListShow;
    projectData.value = props.orderProjectListData
  },
  {
    deep: true,
    immediate: true
  }
);
</script>

<style scoped>
.Btn {
  position: absolute;
  width: 80px;
  height: 40px;
  border-radius: 45px;
  border: none;
  background-color: rgb(151, 95, 255);
  color: white;
  box-shadow: 0px 10px 10px rgb(210, 187, 253) inset,
  0px 5px 10px rgba(5, 5, 5, 0.212),
  0px -10px 10px rgb(124, 54, 255) inset;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  bottom: 7%;
  right: 3.5%;
}

.Btn::before {
  width: 70%;
  height: 2px;
  position: absolute;
  background-color: rgba(250, 250, 250, 0.678);
  content: "";
  filter: blur(1px);
  top: 7px;
  border-radius: 50%;
}

.Btn::after {
  width: 70%;
  height: 2px;
  position: absolute;
  background-color: rgba(250, 250, 250, 0.137);
  content: "";
  filter: blur(1px);
  bottom: 7px;
  border-radius: 50%;
}

.Btn:hover {
  animation: jello-horizontal 0.9s both;
}

@keyframes jello-horizontal {
  0% {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  100% {
    transform: scale3d(1, 1, 1);
  }
}

</style>
