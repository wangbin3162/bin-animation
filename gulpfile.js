const {src, dest, series} = require('gulp')

// 复制模块
function copyModel () {
  return src('./src/bin-animation/**')
    .pipe(dest('./lib'))
}

exports.build = series(copyModel)
