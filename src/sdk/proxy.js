import { h, markRaw } from 'vue'
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

    return () => {
      return h(
        'div',
        { ...props },
        ctx.slots.default
          ? h(ctx.slots.default)
          : undefined
      )
    }
  }
})

export default proxy
