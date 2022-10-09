<template>
  <Image @goto="goSub" />
</template>

<script setup>
import Image from '../components/Image.vue'

const router = useRouter()
function goSub () {
  router.push({ path: '/sub' })
}
</script>

<style lang="scss" module>
</style>
