## 快速上手

根据介绍我们可以快速熟悉动画库的基本构成，这部分讲讲如何快速了解我们的基础api

### 安装

```shell
npm i bin-animation -S
# or 
yarn add bin-animation
```

### Base API

通过这种方式导入我们的动画库我们可以任意起名字如animations，以下默认都是animations

```
import animations from 'bin-animation'
```

#### 1.create(opts)

创建动画opts配置参数

| 参数名 | 说明 | 类型 | 默认值 |
|---------|---------|---------|---------|
| name  | 动画的名称,是动画所必须的| string | 无 |
| animation   | 动画的关键帧，具体参数可参考下方配置 | object/array | 无 |

如果你给出的animation参数是一个对象，则需要指出关键帧

```javascript

animations.create({
	name: 'move',
	animation: {
		0: [0, 0],
		100: [100, 0]
	}
})

animations.create({
	name: 'move',
	animation: {
		'0%': [0, 0],
		'100%': [100, 0]
	}
})

animations.create({
	name: 'move',
	// 如果你给的是一个数组，则关键帧为动态计算
	animation: [[0, 0], [1, 1]]
})
```

移动的位置这里设置为像素，切默认会开启translate3d来进行gpu加速

其他选项及其默认值

```
{
  duration: 1000, // 默认持续时间，毫秒单位
  fillMode: 'both', // css动画填充模式属性
  easing: 'ease', // 默认的动画曲线
  iterations: 1, // 默认执行一次
  delay: 0, // 默认延迟，毫秒单位
  direction: 'normal', // 动画顺序，默认
  resetWhenDone: false, // 如果为真，则将最终动画状态应用为“transform”属性
  clearTransformsBeforeStart: false // 是否在动画开始之前清除现有的transform
}
```

easing 动画曲线默认是ease，其中可配置

    linear	动画从头到尾的速度是相同的。
    ease	默认。动画以低速开始，然后加快，在结束前变慢。
    ease-in	动画以低速开始。	
    ease-out	动画以低速结束。	
    ease-in-out	动画以低速开始和结束。
    cubic-bezier(n,n,n,n)	在 cubic-bezier 函数中自己的值。可能的值是从 0 到 1 的数值。


#### 2.run(element(s), name string or options object, [callback])

| 参数名 | 说明 | 类型 | 默认值 |
|---------|---------|---------|---------|
| element(s)  | 实际的dom节点或要对其应用动画的节点,可以是单个的也可以是querySelectorAll | el | 无 |
| options   | 如果是name则是注册的动画，如果是一个对象则必须类似create一样传入一个动画名称name | String/Object | 无 |
| callback   | 回调函数，动画执行完毕后操作 | function | 无 |

如果你创建了一个动画预制,你可以很容易地运行它

```javascript
animations.run(el, 'move')
```

如果你传入了一个动画对象，则必须包含一个name属性

```javascript
animations.run(el, {
	name: 'move',
	delay: 1500 // 这里你可以任意覆盖上述的默认选项
}, function () {
	console.log('done!')
})
```

#### 3.remove(name)

删除创建的动画预制，传入动画名称则会去缓存中查询是否创建了动画预制，如包含则会删除它。

**主要即包含了以上3个动画api，具体使用参考演示案例，这里推荐先注册后运行的方式可以方便进行复杂动画的管理，并且在配置创建
预制动画的时候推荐进行全量配置（即对象的方式设置关键帧，可以省略计算的步骤），使得代码更加清晰灵活可读性增强，具体参考演示代码。**
