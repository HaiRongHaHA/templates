<template>
  <div class="home-wrap">
    <p>mid：{{ userInfo?.id }}</p>
    <p>昵称：{{ userInfo?.nickname }}</p>
    <br />
    <div
      class="flex-hor-ver-center mt-10 home-wrap__button"
      type="button"
      @click="logout"
    >
      退出
    </div>
  </div>

  <VanButton type="primary">主要按钮</VanButton>
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
<style lang="scss" scoped>
.home-wrap {
  padding: 40px;
  font-size: 28px;
}

.home-wrap__button {
  width: 140px;
  height: 48px;
  margin-top: 8px;
  font-size: 30px;
  color: #fff;
  background-color: rgb(26, 213, 247);
  transform: scale(1);
}
</style>
