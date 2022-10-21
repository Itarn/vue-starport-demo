<template>
  <div>
    <router-view />

    <!-- 起飞组件的放置位置 -->
    <float />
  </div>
</template>

<script setup>
import float from './sdk/float.vue'
</script>

<style lang="scss" module>
</style>
