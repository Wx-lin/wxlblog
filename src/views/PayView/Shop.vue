<template>
  <div>
    <div class="shop-car">购物车</div>
    <el-table :data="shopList" style="width: 100%;overflow-y: scroll;height: 600px;">
      <el-table-column label="项目名" prop="project_name" />
      <el-table-column label="数量" prop="limit" />
      <el-table-column label="单价" prop="price" />
      <el-table-column label="友情价" prop="price" />
      <el-table-column label="小计" prop="price" />
      <el-table-column align="right" label="操作">
        <template #default="{row}">
          <el-popconfirm
            title="确认删除?"
            confirm-button-text="确认"
            cancel-button-text="取消"
            confirm-button-type="danger"
            @confirm="showClick(row)" 
            >
            <template #reference>
              <el-button size="small" type="danger">删除</el-button>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <div class="total">
      <div>总计</div>
      <div>
        {{ totalPrice }}
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['shopList','totalPrice']);
const emit = defineEmits(['delete-shop-option'])
const total = ref(0);

function showClick(option) {
  emit('delete-shop-option',option)
}
</script>

<style scoped>
.shop-car {
  height: 45px;
  font-size: 18px;
  font-weight: 500;
  border-bottom: 1px solid #ccc;
}
.total {
  display: flex;
  width: 100%;
  height: 40px;
}
.total div:first-of-type {
  width: 35%;
  background: skyblue;
  text-align: center;
  line-height: 40px;
}
.total div:last-of-type {
  width: 65%;
  background: pink;
  text-align: center;
  line-height: 40px;
}
</style>
