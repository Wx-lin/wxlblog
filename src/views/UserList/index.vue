<template>
  <div>
    <Search />
    <UserTable :userlist="userlist" :total="total" @change-page="getUserTableData" />
  </div>
</template>

<script setup>
import Search from './Search.vue';
import UserTable from './UserTable.vue';
import { getUserList } from '@/api/userList.js';

let userlist = ref([]);
let total = ref();
onBeforeMount(getUserTableData);

async function getUserTableData(pagenum, pagesize) {
  const tableList = await getUserList(pagenum, pagesize);
  userlist.value = tableList.list;
  total.value = tableList.total;
}
</script>

<style scoped></style>
