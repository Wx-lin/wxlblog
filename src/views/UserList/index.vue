<template>
  <div>
    <Search />
    <UserTable />
  </div>
</template>

<script setup>
import Search from './Search.vue';
import UserTable from './UserTable.vue';
import {getUserList} from "@/api/userList.js"

onBeforeMount(async ()=>{
  const userList = await getUserList()
})


</script>

<style scoped></style>
