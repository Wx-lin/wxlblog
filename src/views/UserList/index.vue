<template>
  <div>
    <Search @click-search="getSearchData" />
    <UserTable
      :userlist="userlist"
      :total="total"
      @change-page="getUserTableData"
      @edit-user-list="handlerEdit"
      @check-change="handlerCheckChange" />
    <EditPen v-model="editPenShow" :editUserData="editUserData" />
    <el-card v-if="checkNum>0" class="check-bottom">
      <div>
        <p style="float: left">已选择 {{ checkNum }} 项，编号分别为：{{ checkSerialNum }}</p>
        <el-button class="btn">删除</el-button>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { assign } from 'lodash';
import Search from './Search.vue';
import UserTable from './UserTable.vue';
import { getUserList } from '@/api/userList.js';

let userlist = ref([]);
let total = ref();
let editUserData = reactive({});
const checkNum = ref(0)
const checkSerialNum = ref("")


const editPenShow = ref(false);

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
  editPenShow.value = !editPenShow.value;
  editUserData.value = assign(editUserData.value, row);
};

const handlerCheckChange = (row) => {
  checkNum.value = row.length
  checkSerialNum.value = row.reduce((str,item)=>{
    if(str==="") return str+item.user_id
    return str+","+item.user_id
  },"")
};
</script>

<style scoped>
.check-bottom {
  height: 65px;
  width: 100%;
  position: fixed;
  left: 14.17%;
  bottom: 2px;
  background: white;
  z-index: 4;
}
.check-bottom div {
  width: 100%;
  height: 100%;
}
.check-bottom div p {
  line-height: 100%;
  margin-left: 18px;
  width: 30%;
  overflow: hidden;
  text-wrap: nowrap;
  text-overflow: ellipsis;
  font-weight: 500
}
.check-bottom div button {
  margin-left: 44%;
}
.btn {
  padding: 1.1em 2em;
  background: none;
  border: 2px solid #fff;
  font-size: 15px;
  color: #131313;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s;
  border-radius: 12px;
  background-color: #ecd448;
  font-weight: bolder;
  box-shadow: 0 2px 0 2px #000;
  line-height: 0.2;
}

.btn:before {
  content: '';
  position: absolute;
  width: 100px;
  height: 120%;
  background-color: #ff6700;
  top: 50%;
  transform: skewX(30deg) translate(-150%, -50%);
  transition: all 0.5s;
}

.btn:hover {
  background-color: #4cc9f0;
  color: #fff;
  box-shadow: 0 2px 0 2px #0d3b66;
}

.btn:hover::before {
  transform: skewX(30deg) translate(150%, -50%);
  transition-delay: 0.1s;
}

.btn:active {
  transform: scale(0.9);
}
</style>
