import { createCssTranslateString } from './create-css-translate-string'
import prefix from '../dom/prefix'
import { addUnit } from '../dom/add-unit'

let lookups = {
  scale: function (val) {
    return 'scale(' + val + ')'
  },
  rotate: function (val) {
    return 'rotate(' + addUnit(val, 'deg') + ')'
  },
  translate: function (val) {
    return createCssTranslateString(val)
  },
  transform: function (val) {
    return val
  }
}

// 获取样式
export function getStyles (obj) {
  // 如果传入的是类似这种数组 [x,y,(z)]
  if (Array.isArray(obj)) {
    return prefix + 'transform:' + createCssTranslateString(obj)
  }
  let transformBuff = []
  let otherStyles = []
  // 如果是对象模式则直接根据key来拼接
  if (typeof obj === 'object') {
    for (let key in obj) {
      if (lookups[key]) {
        // 如果是transform类型的动画则给buff增加一个
        transformBuff.push(lookups[key](obj[key]))
      } else {
        // 其他类型的动画则添加至otherStyles
        otherStyles.push(key + ':' + obj[key])
      }
    }
  }
  otherStyles.push(prefix + 'transform:' + transformBuff.join(''))
  return otherStyles.join(';')
}
