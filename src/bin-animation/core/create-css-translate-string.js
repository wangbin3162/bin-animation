import { addUnit } from '../dom/add-unit'

// 获取
function getValueForProperty (val, prop) {
  if (val.hasOwnProperty(prop)) {
    return val[prop]
  }
  return 0
}

/**
 * 如果传入的是[x,y,(z)]格式的数组则自动拼接为translate3d模式
 * @param val
 * @returns {string}
 */
export function createCssTranslateString (val) {
  let res = []
  // array of values is assumed to be [x,y,(z)]
  if (Array.isArray(val)) {
    if (val.length === 2) {
      res = res.concat(val, 0)
    } else {
      res = val
    }
  } else {
    res.push(getValueForProperty(val, 'x'))
    res.push(getValueForProperty(val, 'y'))
    res.push(getValueForProperty(val, 'z'))
  }

  res = res.map(function (val) {
    return addUnit(val, 'px')
  })

  return 'translate3d(' + res.join(',') + ')'
}
