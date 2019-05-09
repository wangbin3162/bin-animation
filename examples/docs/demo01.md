## 演示案例1

演示案例1

:::demo 
```html
<template>
  <div class="animation-demo">
    <div class="ctrl">
      <b-button @click="demo01=!demo01" size="small">测试按钮</b-button>
    </div>
    <div class="animation-box">
        <transition
            @enter="enter"
            @after-enter="afterEnter"
            @leave="leave"
            @after-leave="afterLeave">
          <div class="transition-box" ref="box1"
               v-show="demo01">box
          </div>
        </transition>
    </div>
  </div>
</template>

<script>
import animations from '../../src/bin-animation'

export default {
  name: 'Demo',
  data () {
    return {
      demo01: true
    }
  },
  methods: {
    enter: function (el, done) {
      let animation = {
        0: {
          transform: `translate3d(0,0,0) scale(.5)`
        },
        50: {
          transform: `translate3d(100%,0,0) scale(1.1)`
        },
        100: {
          transform: `translate3d(0,0,0) scale(1)`
        }
      }
      animations.create({
        name: 'move',
        animation,
        presets: {
          duration: 400,// 动画时长
          easing: 'linear'// 动画曲线
        }
      })
      animations.run(el, 'move', done)
    },
    afterEnter: function (el) {
      animations.remove('move')
      el.style.animation = ''
    },
    leave: function (el, done) {
      let animation = {
        0: {
          transform: `translate3d(0,0,0) scale(1)`
        },
        50: {
          transform: `translate3d(0,0,0) scale(1.1)`
        },
        100: {
          transform: `translate3d(0,100%,0) scale(0)`
        }
      }
      animations.create({
        name: 'out',
        animation,
        presets: {
          duration: 400,
          easing: 'linear'
        }
      })
      animations.run(el, 'out', done)
    },
    afterLeave: function (el) {
      animations.remove('out')
      el.style.animation = ''
    }
  }
}
</script>
```
:::
