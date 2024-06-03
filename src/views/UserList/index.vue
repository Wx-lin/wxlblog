<template>
  <div>
    <Search @click-search="getSearchData" />
    <UserTable
      :userlist="userlist"
      :total="total"
      @change-page="getUserTableData"
      @edit-user-list="handlerEdit" />
    <EditPen v-model="editPenShow" :editUserData="editUserData"/>
  </div>
</template>

<script setup>
import { assign } from 'lodash';
import Search from './Search.vue';
import UserTable from './UserTable.vue';
import { getUserList } from '@/api/userList.js';

let userlist = ref([]);
let total = ref();
let editUserData = reactive({})

const editPenShow = ref(false)

onBeforeMount(getUserTableData);

async function getUserTableData(params) {
  const tableList = await getUserList(params);
  userlist.value = tableList.list;
  total.value = tableList.total;
  return tableList;
}

const getSearchData = async (searchData) => {
  const searchDataList = await getUserTableData({ username: searchData.username });
  userlist.value = searchDataList.list.filter(
    (item) =>
      item.card_number.includes(searchData.card_number) &&
      item.role_name.includes(searchData.role_name)
  );
};

const handlerEdit = (row) => {
  editPenShow.value = !editPenShow.value
  editUserData.value=assign(editUserData.value,row)
}
</script>

<style scoped></style>
