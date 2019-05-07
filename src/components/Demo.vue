<template>
  <div class="demo">
    <div class="ctrl">
      <b-button @click="demo01=!demo01" size="small">测试按钮</b-button>
    </div>
    <transition
        @enter="enter"
        @after-enter="afterEnter"
        @leave="leave"
        @after-leave="afterLeave">
      <div class="animate-box animate-demo1" ref="box1"
           v-show="demo01">Demo01
      </div>
    </transition>
  </div>
</template>

<script>
  import animations from '../bin-animation'

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
        animations.registerAnimation({
          name: 'move',
          animation,
          presets: {
            duration: 400,// 动画时长
            easing: 'linear'// 动画曲线
          }
        })
        animations.runAnimation(el, 'move', done)
      },
      afterEnter: function (el) {
        animations.unregisterAnimation('move')
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
        animations.registerAnimation({
          name: 'out',
          animation,
          presets: {
            duration: 400,
            easing: 'linear'
          }
        })
        animations.runAnimation(el, 'out', done)
      },
      afterLeave: function (el) {
        animations.unregisterAnimation('out')
        el.style.animation = ''
      }
    }
  }
</script>

<style scoped lang="stylus">
  .demo {
    .ctrl {
      padding: 20px;
    }
    .animate-box {
      display: block;
      padding: 20px;
      height: 100px;
      width: 200px;
      background-color: #409fee;
      border-radius: 5px;
      line-height: 100px;
      text-align: center;
      margin: 0;
      color: #fff;
      font-size: 22px;
    }
    .animate-demo1 {
      margin: 0 auto;
    }
  }
</style>
