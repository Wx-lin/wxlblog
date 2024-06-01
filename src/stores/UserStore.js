import { reactive } from 'vue'
import { defineStore } from 'pinia'
export const useUserStore = defineStore('user', () => {
  const user = reactive({})
    function logout(){
        user.token="";
        user.username="";
    }
  return { 
    user,
    logout,
  }
},
{
  persist:{
      key:"user",
      enabled:true,
      storage:sessionStorage
  }
})