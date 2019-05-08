# bin-animation

## 1.全局安装webpack4

```bash
yarn add global webpack
```

## 2.在一个项目中安装基础依赖

```bash
yarn add  webpack webpack-cli --dev
```

## 3.安装编译es6的必备依赖

```bash
yarn add @babel/core @babel/preset-env @babel/plugin-transform-runtime  --dev
yarn add  @babel/polyfill  @babel/runtime
```

其他插件

```bash
yarn add copy-webpack-plugin clean-webpack-plugin --dev
```

## 4.配置.babelrc文件

```json
{
  "presets": [
    [
      "env",
      {
        "targets": {
          "browsers": [
            "last 2 versions"
          ]
        }
      }
    ]
  ],
  "plugins": [
    "transform-runtime"
  ]
}
```

## 5.配置webpack.config.js

```javascript

```

