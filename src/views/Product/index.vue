<template>
  <div>
    <el-card style="max-width: 100%">
      <template #header>
        <div class="card-header">
          <el-button class="btn">新建</el-button>
        </div>
      </template>
      <ProjectList :projectData="projectData"/>
      <template #footer>
        <ProjectPage />
      </template>
    </el-card>
  </div>
</template>

<script setup>
import { getProjrctList } from '@/api/productList.js';

const projectData = ref([]);

onBeforeMount(async () => {
  const result = await getProjrctList();
  projectData.value = result.list
  console.log(projectData.value)
});

</script>

<style scoped>
.card-header {
  height: 10px;
  padding-bottom: 20px;
}
.btn {
  background-color: white;
  color: black;
  border-radius: 1em;
  font-size: 17px;
  font-weight: 600;
  padding: 1em 2em;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  border: 1px solid black;
  box-shadow: 0 0 0 0 black;
  float: right;
  width: 80px;
}

.btn:hover {
  transform: translateY(-4px) translateX(-2px);
  box-shadow: 2px 5px 0 0 black;
}

.btn:active {
  transform: translateY(2px) translateX(1px);
  box-shadow: 0 0 0 0 black;
}
</style>
