<template>
  <div>
    <Search @click-search="getSearchData" />
    <UserTable
      :userlist="userlist"
      :total="total"
      @change-page="getUserTableData"
      @check-change="handlerCheckChange"
      @edit-user="handlerUserEdit"
      @delete-show="handlerDel" />
    <!-- 编辑 -->
    <UserEditing
      :userEdit="userEdit"
      :editingShow="editingShow"
      @editing-show="handlerCancelEdit" />
    <!-- 删除 -->
    <DeleteUser :userDelShow="userDelShow" @close-dialog="showDialog" @delete-user="delUserData"/>
    <el-card v-if="checkNum > 0" class="check-bottom">
      <div>
        <p style="float: left">已选择 {{ checkNum }} 项，编号分别为：{{ checkSerialNum }}</p>
        <el-button class="btn">删除</el-button>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import Search from './Search.vue';
import UserTable from './UserTable.vue';
import { getUserList,getDelUser } from '@/api/userList.js';
import DeleteUser from './DeleteUser.vue';

let userlist = ref([]);
let total = ref();
const checkNum = ref(0);
const checkSerialNum = ref('');
const editingShow = ref(false);
const userEdit = ref({});
const userDelShow = ref(false);
const userDelData = ref();

onBeforeMount(getUserTableData);

// 请求用户列表数据
async function getUserTableData(params) {
  const tableList = await getUserList(params);
  userlist.value = tableList.list;
  total.value = tableList.total;
  return tableList;
}

// 请求数据查询处理数据
const getSearchData = async (searchData) => {
  const searchDataList = await getUserTableData({ username: searchData.username });
  userlist.value = searchDataList.list.filter(
    (item) =>
      item.card_number.includes(searchData.card_number) &&
      item.role_name.includes(searchData.role_name)
  );
};

// 多选底部显示
const handlerCheckChange = (row) => {
  checkNum.value = row.length;
  checkSerialNum.value = row.reduce((str, item) => {
    if (str === '') return str + item.user_id;
    return str + ',' + item.user_id;
  }, '');
};

// 编辑用户
const handlerUserEdit = (row) => {
  editingShow.value = true;
  userEdit.value = row;
};

// 取消按钮
const handlerCancelEdit = (val) => {
  editingShow.value = val;
};

// 删除用户
const handlerDel = (row) => {
  userDelShow.value = true;
  userDelData.value = row.user_id;
};

const showDialog = ()=>{
  userDelShow.value = false
}

const delUserData = async()=>{
  const result = await getDelUser(userDelData.value)
}
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
  font-weight: 500;
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
