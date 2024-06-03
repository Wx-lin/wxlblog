<template>
  <div class="user-table">
    <el-card style="max-width: 100%">
      <template #header>
        <div class="card-header">
          <span>{{ route.meta.name }}</span>
          <el-button type="danger" @click="onAddUser">新建</el-button>
        </div>
      </template>
      <el-table
        ref="multipleTableRef"
        :data="userlist"
        style="width: 100%; height: 400px"
        @selection-change="handleSelectionChange"
        header-align="center">
        <el-table-column type="selection" width="55" align="center" />
        <el-table-column prop="user_id" label="编号" width="100" align="center" />
        <el-table-column prop="role_name" label="所属角色" width="100" align="center" />
        <el-table-column prop="username" label="姓名" width="140" align="center" />
        <el-table-column label="头像" width="100" align="center">
          <template #default="{ row }">
            <el-avatar :size="50" :src="row.avatar" />
          </template>
        </el-table-column>
        <el-table-column label="卡号" width="200" align="center">
          <template #default="{ row }">
            <el-tag type="danger">{{ row.card_number }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="money" label="余额" width="100" align="center" />
        <el-table-column prop="lng" label="坐标" width="100" align="center" />
        <el-table-column prop="address" label="坐标地址" width="120" align="center" />
        <el-table-column prop="created_at" label="创建于" width="200" align="center" />
        <el-table-column prop="updated_at" label="更新于" width="200" align="center" />
        <el-table-column label="操作" fixed="right" width="280" class="operation">
          <template #default="{ row }">
            <el-button type="danger" icon="EditPen" circle @click="emit('edit-user-list',row)"></el-button>
            <el-button type="danger" icon="UserFilled"></el-button>
            <el-button type="danger" icon="Postcard"></el-button>
            <el-button type="danger" icon="CreditCard"></el-button>
            <el-button type="danger" icon="Delete" circle></el-button>
          </template>
        </el-table-column>
      </el-table>
      <template #footer>
        <div class="demo-pagination-block clear">
          <el-pagination
            v-model:current-page="pagenum"
            v-model:page-size="pagesize"
            :page-sizes="[10, 20, 30, 50, 100, 500, 1000]"
            :small="small"
            :background="background"
            layout=" prev, pager,next,sizes"
            :total="total"
            @size-change="handlePageChange"
            @current-change="handlePageChange" />
        </div>
      </template>
    </el-card>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const prop = defineProps(['userlist', 'total']);
const emit = defineEmits(['change-page','edit-user-list']);
// 当前页数
const pagenum = ref(1);
// 默认每页页数
const pagesize = ref(10);
const small = ref(false);
const background = ref(true);
const editPenShow = ref(false);

const handleSelectionChange = (row) => {
console.log(row)
};

// 更改每页页数&更改页数
const handlePageChange = () => {
  const page = { pagenum: pagenum.value, pagesize: pagesize.value };
  emit('change-page', page);
};

const onAddUser = () => {
  router.push('/create');
};
</script>

<style scoped>
.user-table {
  margin-top: 50px;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.demo-pagination-block {
  float: right;
  height: 50px;
}
.clear::after {
  content: '';
  display: block;
  opacity: 0;
  height: 0;
  overflow: hidden;
  clear: both;
}
</style>
