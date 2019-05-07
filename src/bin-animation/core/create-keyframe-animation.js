import { getStyles } from './get-styles'
import prefix from '../dom/prefix'

// 拼接样式字符串
function getLine (percentage, styles) {
  if (typeof percentage === 'number') {
    percentage += '%'
  } else if (typeof percentage === 'string' && percentage.indexOf('%') === -1) {
    percentage += '%'
  }
  return percentage + '{' + getStyles(styles) + '}'
}

// 根据动画名称和配置进行拼接样式
export default function (name, positions) {
  let buf = '@' + prefix + 'keyframes ' + name + '{'

  // 如果传入的是一个数组则按照百分比匹配
  if (Array.isArray(positions)) {
    buf += positions.map(function (pos, index) {
      let percentage
      if (index) {
        percentage = (index / (positions.length - 1)) * 100
      } else {
        percentage = 0
      }
      return getLine(percentage, pos)
    }).join('')
  } else {
    // 如果传入的是对象模式
    for (let key in positions) {
      buf += getLine(key, positions[key])
    }
  }
  buf += '}'
  return buf
}

