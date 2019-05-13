## 结合transition组件

带贝塞尔曲线的动画实例

:::demo 
```html
<template>
  <div class="modal-demo">
    <div class="animation-box" style="height:560px;overflow:hidden;" ref="wrapper">
      <div class="ball" ref="ball">
         <div class="inner inner-hook"></div>
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
    }
  },
  mounted(){
    // 获取容器的宽高
    let width=this.$refs['wrapper'].clientWidth;
    let height=this.$refs['wrapper'].clientHeight;
    
    let x = width-50;
    let y = -(height -  25 - 100);
    animations.create({
      name: 'moveY',
      animation:{
          0: {
            transform: `translate3d(0, ${y}px, 0)`
          },
          100: {
            transform: `translate3d(0 ,0 , 0)`
          }
      },
      presets: {
        duration: 600,
        easing: 'cubic-bezier(0.49, -0.29, 0.75, 0.41)'
      }
    })
    // x轴动画
    animations.create({
          name: 'moveX',
          animation:{
              0: {
                transform: `translate3d(0, 0 , 0)`
              },
              100: {
                transform: `translate3d(${x}px ,0 , 0)`
              }
          },
          presets: {
            duration: 600,
            easing: 'linear'
          }
        })
    
    animations.run(this.$refs.ball, 'moveY')
    let inner =this.$refs.ball.getElementsByClassName('inner-hook')[0];
    animations.run(inner, 'moveX')
  }
}
</script>
```
:::
