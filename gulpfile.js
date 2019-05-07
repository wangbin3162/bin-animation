const {src, dest, series} = require('gulp')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const rename = require('gulp-rename')

// 编译函数
function convertJs () {
  return src('./src/bin-animation/*.js')
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(rename({
      basename: 'bin-animation',
      suffix: '.min'
    }))
    .pipe(dest('./lib'))
}

exports.build = series(convertJs)
