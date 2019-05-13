## simple 示例

基本动画注册和调用，从当前位置移动至右侧100像素。

:::demo 
```html
<template>
  <div class="animation-demo">
    <div class="ctrl">
      <b-button @click="runAnimate" size="small">测试按钮</b-button>
    </div>
    <div class="animation-box" style="height:100px;">
          <div class="transition-box" ref="box"
               v-show="demo01">box
          </div>
    </div>
  </div>
</template>

<script>
import animations from '../../src/bin-animation'

export default {
  name: 'Demo',
  data () {
    return {
      demo01: false
    }
  },
  methods: {
    runAnimate(){
      let el = this.$refs['box']
      this.demo01=true
      // 创建动画
      animations.create({
          name: 'move',
          animation: [
            [0,0], 
            [100,0]
          ],
          presets: {
            duration: 1000,
            easing: 'linear'
          }
        })
      // 运行动画
      animations.run(el, 'move', ()=> {
         animations.remove('move')// 如果需要多次使用的动画可不删除
         el.style.animation = ''// 如果需要停止则不需要清空其animation属性 否则会返回至起始位置
         this.demo01=false
      })
    }
  }
}
</script>
```
:::
