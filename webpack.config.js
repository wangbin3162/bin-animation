const path = require('path')
const webpack = require('webpack')
// 清除文件
const CleanWebpackPlugin = require('clean-webpack-plugin')
// 拷贝插件
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'lib'), //输出目录
    filename: 'bin-animation.min.js' //输出文件名称，建议与源文件同名
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader'
      }
    }]
  },
  // 插件
  plugins: [
    // 删除文件 保留新文件
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([ // 复制插件
      {
        from: path.join(__dirname, './src/bin-animation'),
        to: path.join(__dirname, './lib')
      }
    ])
  ]
}
