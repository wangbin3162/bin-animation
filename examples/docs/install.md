## 安装

### CDN 安装

通过[unpkg.com/bin-animation](https://unpkg.com/bin-animation/) 可以看到 bin-animation
最新版本的资源

```
<!-- import min -->
<script src="https://unpkg.com/bin-animation@1.0.0/lib/bin-animation.min.js"></script>
```

使用这种方式直接引入至浏览器，动画库会往全局注入一个Animation的对象，使用时直接使用Animation.create创建即可，值得注意的是，如果Animation存在冲突则需要重新命名。
    
`@1.0.0` 表示版本号，我们建议锁定版本号来保证代码的稳定性

### npm 安装

推荐使用npm安装，它能更好地和[webpack](https://webpack.js.org/)打包工具配合使用。而且可以更好的和
es6配合使用。并且支持按需引入

```shell
npm i bin-animation -S
# or 
yarn add bin-animation
```

如果您了解node.js、npm安装，并希望配合webpack使用，请阅读下一节：[快速上手](/#/start)。

