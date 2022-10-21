<template>
  <router-link to="/sub">go</router-link>

  <Proxy id="image">
    <Image @goto="goSub" />
  </Proxy>
</template>

<script setup>
import Image from '../components/Image.vue'
import Proxy from '../sdk/proxy.js'

const router = useRouter()
function goSub () {
  router.push({ path: '/sub' })
}
</script>

<style lang="scss" module>
</style>
