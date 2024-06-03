<template>
  <div>
    <el-card style="max-width: 100%">
      <template #header>
        <div class="card-header">
          <span style="font-size: 16px; font-weight: 600">用户创建</span>
          <el-button @click="handlerClickPath">返回</el-button>
        </div>
      </template>
      <el-form style="max-width: 100%" :model="createUserData" :rules="rules" label-width="auto">
        <el-form-item label="会员卡号:">
          <el-input v-model="createUserData.card_number" style="height: 35px" />
        </el-form-item>
        <el-form-item label="用户名:" prop="username">
          <el-input v-model="createUserData.username" style="height: 35px" />
        </el-form-item>
        <el-form-item label="密码:" prop="password">
          <el-input v-model.number="createUserData.password" type="password" style="height: 35px" />
        </el-form-item>
        <el-form-item label="头像:">
          <el-upload class="avatar-uploader" :show-file-list="true">
            <img v-if="false" :src="imageUrl" class="avatar" />
            <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
          </el-upload>
        </el-form-item>
        <el-form-item label="地区:">
          <el-button style="width: 90px; margin-left: 10px" @click="handlerMap">地图选点</el-button>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            style="width: 80px; margin-top: 20px"
            @click="handlerUserCreate">
            立即创建
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup>
import { getCreateUser } from '@/api/createUser.js';
import { useRouter } from 'vue-router';

const router = useRouter();
const imageUrl = ref();
const createUserData = reactive({
  card_number: '',
  username: '',
  password: ''
});
const rules = reactive({
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
});

const handlerUserCreate = async () => {
  const result = await getCreateUser(createUserData);
  if (result.state == 201) {
    handlerClickPath();
  }
};

const handlerClickPath = () => {
  router.push('/index');
};

const handlerMap = () => {
  router.push('/map');

};
</script>

<style scoped>
.avatar-uploader {
  width: 100px;
  height: 100px;
  border: 1px #ccc dashed;
  text-align: center;
  line-height: 100px;
  margin-bottom: 20px;
  border-radius: 10px;
}
:deep(.el-card__body) {
  padding-left: 40px;
  padding-top: 25px;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
button {
  text-decoration: none;
  position: relative;
  border: none;
  font-size: 14px;
  font-family: inherit;
  cursor: pointer;
  color: #fff;
  width: 4em;
  height: 2em;
  line-height: 2em;
  text-align: center;
  background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
  background-size: 300%;
  border-radius: 30px;
  z-index: 1;
}

button:hover {
  animation: ani 8s linear infinite;
  border: none;
}

@keyframes ani {
  0% {
    background-position: 0%;
  }

  100% {
    background-position: 400%;
  }
}

button:before {
  content: '';
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  z-index: -1;
  background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
  background-size: 400%;
  border-radius: 35px;
  transition: 1s;
}

button:hover::before {
  filter: blur(20px);
}

button:active {
  background: linear-gradient(32deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
}
</style>
