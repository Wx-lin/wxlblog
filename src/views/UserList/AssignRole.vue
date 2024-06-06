<template>
  <div>
    <el-dialog v-model="show" title="分配角色" width="550" style="border-radius: 20px" @close="handlerCancelEdit">
      <el-form
        style="max-width: 100%; padding-left: 20px; padding-top: 20px"
        :model="formData"
        label-width="auto">
        <el-form-item label="当前用户:">
          <el-input v-model="formData.username" disabled style="height: 35px" />
        </el-form-item>
        <el-form-item label="当前角色:"  prop="username">
          <el-input v-model="formData.role_name" :disabled="handoverShow==='Postcard'" style="height: 35px" />
        </el-form-item>
        <el-form-item label="会员卡号:" v-if="handoverShow==='Postcard'" prop="username">
          <el-input v-model="formData.card_number" style="height: 35px" />
        </el-form-item>
        <el-form-item>
          <div calss="button-adr">
            <el-button
              type="primary"
              style="width: 80px; margin-top: 35px; margin-left: 300px; margin-right: 10px"
              @click="handlerCancelEdit" 
              >
              <!-- @click="handlerCancelEdit" -->
              取消
            </el-button>
            <el-button
              type="primary"
              style="width: 80px; margin-top: 35px"
              @click="handlerUserEdit">
              {{handoverShow!=='Postcard'?"立即分配":"立即绑定"}}
            </el-button>
          </div>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script setup>
const props = defineProps(["assginShow","assginData",'handoverShow']);
const emit = defineEmits(['assgin-show','assgin-data'])
const show = ref(false);
const formData = ref({
  username: '',
  role_name: '',
  card_number:''
});

watchEffect(()=>{
  show.value = props.assginShow
  formData.value = props.assginData
})


// 取消分配
const handlerCancelEdit = () => {
  show.value = false
  emit('assgin-show',show.value)
};
const handlerUserEdit = () => {
  show.value = false
  emit('assgin-data',formData.value,props.handoverShow)
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
.avatar-uploader:hover {
  border-color: red;
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
