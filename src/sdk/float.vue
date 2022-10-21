<template>
  <Teleport
    :to="state.isLanded ? '#image' : 'body'"
    :disabled="state.isLanded"
    v-show="state.isVisible"
  >
    {{ state.isLanded }}
    <component
      :is="state.instance"
      v-bind="state.props"
    />
  </Teleport>
</template>

<script setup>
// 接受起飞组件的实例
import { state } from './state'
// 添加动画
// 动画开始的时机在拿到着陆组件的实际位置后
// 动画结束后，teleport 到组件的实际DOM树上
</script>
