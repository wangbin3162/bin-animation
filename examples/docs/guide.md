## 介绍

bin-animation是一个关键帧动画库，结合vue transition组件的钩子函数，我们可以快速的实现复杂的动画效果。
您可以使用js再浏览器中动态的生成css关键帧动画。并插入一个 style 标签中,这允许您根据位置动态的计算值，并允许您实际高效地运行动画，
而无需处理或运行requestAnimationFrame来进行动画渲染。

而且好处是，您不需要预先编写固定的css关键帧，js主线程中动态添加也会让你灵活运用，动态的去创建复杂的动画并进行组合调用。

通常CSS动画是在一个单独的CSS样式表中声明的，就像这样:

```
@keyframes move {
  0% {
    transform: translate3d(0,0,0)
  }
  100% {
    transform:translate3d(100px,0,0)
  }
}
```

这表示会将当前元素往x轴方向移动100px，
如果您想运行时动态地更改这些固定像素值，那么您将无法预先编写css动画，并且会很难实现。

我想要做的是

```javascript
import animations from 'bin-animation'

// 这就创建了上面的动画
animations.create({
  name: 'move',
  // 实际是animation数组（对象）发生了动画
  animation: [
	[0,0], 
	[100,0]
  ],
  // presets可选预置，实际运行动画时会配置的参数
  presets: {
    duration: 1000,
    easing: 'linear',
    delay: 500
  }
})
// 运行动画
animations.run(el, 'move', function () {
	// 动画完成后调用事件
})
// 如果支持promise则支持链式调用
animations.run(el, 'moveUp')
	.then(function () {
		return animations(el, 'wiggle')
	})
	.then(function () {
		console.log('done!')
	})
	.catch(function (err) {
		console.error(err)
	})
```

上面的动画演示参考[demo01](/#/demo01)

### 最新版本

[![NPM version](https://img.shields.io/npm/v/bin-animation.svg)](https://www.npmjs.com/package/bin-animation)

持续维护。


### 相关链接

项目文档使用了[bin-ui](https://wangbin3162.github.io/bin-ui-doc/)构建，且bin-ui也内置了此动画组件，无须额外引入


