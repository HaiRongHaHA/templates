<template>
  <img alt="Vue logo" src="../assets/logo.png" />
  <p>mid：{{ userInfo?.id }}</p>
  <p>昵称：{{ userInfo?.nickname }}</p>
  <br />
  <button @click="logout">退出</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user'

export default defineComponent({
  name: 'Home',
  components: {},
  setup() {
    const user = useUserStore()
    const { userInfo } = storeToRefs(user)
    const { login, logout } = user

    if (!userInfo.value) {
      login()
    }
    return { userInfo, logout, user }
  }
})
</script>
