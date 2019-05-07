// 确定当前浏览器前缀
let el = document.createElement('p')

let transformProperty = (() => {
  let styles = [
    'webkitTransform',
    'MozTransform',
    'msTransform',
    'OTransform',
    'transform'
  ]
  for (let i = 0; i < styles.length; i++) {
    let style = styles[i]
    if (null != el.style[style]) {
      return style
    }
  }
  return false
})()

export default transformProperty
