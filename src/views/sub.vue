<template>
  <div>
    <router-link to="/">Back</router-link>

    <Proxy>
      <Image
        width="150px"
        height="150px"
      />
    </Proxy>
  </div>
</template>

<script setup>
import Image from '../components/Image.vue'
import Proxy from '../sdk/proxy.js'

</script>

<style lang="scss" module>
</style>
