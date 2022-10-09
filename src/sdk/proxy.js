import { h, markRaw } from 'vue'
import { state } from '../sdk/state'

// 实时同步起飞前组件的高宽位置信息
const proxy = defineComponent({
  name: 'proxy',
  setup (props, ctx) {
    const slots = ctx.slots.default?.()
    let component = slots[0].type

    state.instance = markRaw(component)

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
