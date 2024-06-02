import { ref, computed } from "vue";
import { defineStore } from "pinia";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import en from "element-plus/es/locale/lang/en";

export const useMainStore = defineStore(
  "main",
  () => {
    const langeBool = ref(false); //设置bool类型
    const lange = computed(() => {
      //返回en或中文
      return !langeBool.value ? en : zhCn;
    });

    return {
      langeBool,
      lange
    };
  },
  {
    persist: {
      key: "main",
      storage: sessionStorage,
    },
  }
);
