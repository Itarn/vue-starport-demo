<template>
  <div :class="$style['float-wrap']">
    <component :is="com"></component>
  </div>
</template>

<script setup>
// 接受起飞组件的实例
import { state } from './state'
const com = computed(() => state.instance)
// 添加动画
// 动画开始的时机在拿到着陆组件的实际位置后
// 动画结束后，teleport 到组件的实际DOM树上
</script>

<style lang="scss" module>
.float-wrap {
  transition: all linear 0.2s;
}
</style>
