<template>
  <div >
    <el-card style="max-width: 100%">
      <template #header>
        <div class="card-header">
          <p>{{ route.meta.name }}</p>
          <div>
            <el-button>技师工作牌</el-button>
            <el-button type="danger">新建预约</el-button>
          </div>
        </div>
      </template>
      <div></div>
    </el-card>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute()
</script>

<style scoped>
.card-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
}

</style>
