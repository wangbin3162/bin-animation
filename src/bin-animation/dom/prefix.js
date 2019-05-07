let prefix = ''

// 是否需要-webkit- 前缀
if (typeof document !== 'undefined') {
  let el = document.documentElement || document.createElement('div')
  prefix = (el.style.animation != null) ? '' : '-webkit-'
}

export default prefix
