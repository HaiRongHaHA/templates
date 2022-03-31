<template>
  <div class="text-center pt-20">
    <p>mid：{{ userInfo?.id }}</p>
    <p>昵称：{{ userInfo?.nickname }}</p>
    <p class="ellipsis-row-3">
      demo$$demo$$demo$$demo$$demo$$demo$$demo$$demo$$demo$$demo$$demo$$demo$$demo$$demo$$demo$$demo$$demo$$demo$$demo$$demo$$demo$$demo$$demo$$demo$$demo$$demo$$demo$$demo$$demo$$demo$$demo$$demo$$demo$$demo$$demo$$demo$$demo$$demo$$demo$$demo$$demo$$demo$$demo$$demo$$demo$$demo$$demo$$demo$$demo$$demo$$demo$$demo$$demo$$demo$$demo$$demo$$demo$$demo$$demo$$demo$$demo$$demo$$demo$$demo$$demo$$demo$$demo$$demo$$demo$$demo$$demo$$demo$$
    </p>
    <button class="mt-10" type="button" @click="logout">退出</button>
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
