<template>
  <div class="text-center py-20">
    <p class="text-indigo-400">mid：{{ userInfo?.id }}</p>
    <p class="text-green-400">昵称：{{ userInfo?.nickname }}</p>
    <br />
    <button
      type="button"
      class="bg-pink-400 hover:bg-pink-300 text-white px-4 py-1 rounded-sm"
      @click="logout"
    >
      退出
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/store/modules/user'
import test from '@/api/modules/test'

export default defineComponent({
  name: 'Home',
  components: {},
  setup() {
    const user = useUserStore()
    const { userInfo } = storeToRefs(user)
    const { logout } = user

    const test1 = async () => {
      await test.test1({
        id: 2608,
        offset: 1,
        limit: 20
      })
    }

    test1()

    return { userInfo, user, logout }
  }
})
</script>
