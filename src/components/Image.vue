<template>
  <div :class="$style['img-wrapper']" @click="goSub">
    <img src="../assets/demo.jpg">
  </div>
</template>

<script setup>
import VueTypes from 'vue-types'

const props = defineProps({
  width: VueTypes.string.def('200px'),
  height: VueTypes.string.def('200px')
})

const emit = defineEmits([
  'goto'
])

function goSub () {
  emit('goto')
}
</script>

<style lang="scss" module>
.img-wrapper {
  width: v-bind('props.width'); height: v-bind('props.height');
  cursor: pointer;
}
img {
  width: 100%; height: 100%;
  object-fit: cover;
}
</style>
