import { h, markRaw, onBeforeUnmount, nextTick } from 'vue'
import { state } from '../sdk/state'

// 实时同步起飞前组件的高宽位置信息
const proxy = defineComponent({
  name: 'proxy',
  setup (props, ctx) {
    const slots = ctx.slots.default?.()
    let slot = slots[0]
    let component = slot.type

    console.log(ctx.slots.default())

    state.instance = markRaw(component)
    state.props = slot.props

    if (state.isVisible === false) {
      state.isLanded = true
    }

    onMounted(async () => {
      console.log('onMounted')
      // await nextTick()

      state.isVisible = true

      // await nextTick()
      // state.isLanded = true
    })

    onBeforeUnmount(async () => {
      console.log('onBeforeUnMount')

      // await nextTick()
      // await nextTick()

      state.isLanded = false

      await nextTick()
      state.isVisible = false
    })

    return () => {
      return h(
        'div',
        { ...props }
      )
    }
  }
})

export default proxy
