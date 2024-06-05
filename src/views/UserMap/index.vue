<template>
  <el-card>
    <div id="map" />
  </el-card>
</template>

<script setup>
import AMapLoader from '@amap/amap-jsapi-loader';
import { onMounted, onUnmounted } from 'vue';

let map = null;

onMounted(() => {
  createMap();
});

const createMap = async () => {
  window._AMapSecurityConfig = {
    securityJsCode: '406ba4c01f91896feabeca1919b02877'
  };

  try {
    const { Map } = await AMapLoader.load({
      key: '73538ec3f718ca48e9ceac80853defe7',
      version: '2.0'
    });

    map = new Map('map', {
      center: [104.937478, 35.439575],
      zoom: 5
    });

    map.plugin(['AMap.MarkerClusterer'], () => {
      new AMap.MarkerClusterer(
        map, // 地图实例
        points,
        {
          gridSize: 60
        }
      );
    });
  } catch (error) {
    console.log(error);
  }
};

onUnmounted(() => {
  map?.destroy();
});
</script>

<style scoped>
@import 'https://a.amap.com/jsapi_demos/static/demo-center/css/demo-center.css';

#map {
  width: 100%;
  height: 800px;
}
</style>
