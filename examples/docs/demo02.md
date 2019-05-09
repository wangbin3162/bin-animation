## 结合transition组件

关键帧动画主要还是为了配合transition组件 来进行编写复杂的动画

:::demo 
```html
<template>
  <div class="modal-demo">
    <div class="animation-box" style="height:560px;overflow:hidden;">
          <!--小按钮位置-->
          <transition>
              <div class="mini-btn-box" v-show="!showModal">
                <div @click="showModal=true" class="click-me">
                  <img src="../assets/logo.png" alt="logo">
                </div>
              </div>
          </transition>
          <transition
                @enter="enter"
                @after-enter="afterEnter"
                @leave="leave"
                @after-leave="afterLeave">
              <div class="modal-box" ref="modalWrapper" v-show="showModal" >
                <div class="inner" @click="showModal=false">modalWrapper</div>
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
      showModal:false
    }
  },
  methods: {
      _getPosAndScale() {
        const targetWidth = 40
        const paddingLeft = 20
        const paddingBottom = 20
        const width = 300
        const scale = targetWidth / width
        const x = -(970 / 2 - paddingLeft)
        const y = -(560 /2 - paddingBottom)
        return {x ,y , scale}
      },
      enter(el, done) {
        const {x, y, scale} = this._getPosAndScale()
        let animation = {
          0: {
            transform: `translate3d(${x}px, ${y}px, 0) scale(${scale}) rotate(0deg)`,
            opacity:0
          },
          60: {
            transform: `translate3d(0 ,0 , 0) scale(1.1) rotate(365deg)`,
            opacity:1
          },
          100: {
            transform: `translate3d(0 ,0 , 0) scale(1) rotate(360deg)`,
            opacity:1
          }
        }
        animations.create({
          name: 'move',
          animation,
          presets: {
            duration: 400,
            easing: 'linear'
          }
        })
        animations.run(this.$refs.modalWrapper, 'move', done)
      },
      afterEnter(){
        animations.remove('move')
        this.$refs.modalWrapper.style.animation = ''
      },
      leave(el, done) {
         const {x, y, scale} = this._getPosAndScale()
         let animation = {
           0: {
             transform: `translate3d(0 ,0 , 0) scale(1) rotate(0)`,
             opacity:1
           },
           30: {
             transform: `translate3d(0 ,0 , 0) scale(1.1) rotate(90deg)`,
              opacity:1
           },
           100: {
             transform: `translate3d(${x}px, ${y}px, 0) scale(${scale}) rotate(-360deg)`,
             opacity: 0
           }
         }
         animations.create({
           name: 'leave',
           animation,
           presets: {
             duration: 400,
             easing: 'linear'
           }
         })
         animations.run(this.$refs.modalWrapper, 'leave', done)
      },
      afterLeave() {
           animations.remove('leave')
           this.$refs.modalWrapper.style.animation = ''
      }
  }
}
</script>
```
:::
