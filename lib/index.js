import crateAnimation from './core/create-keyframe-animation'
import { loadStyles } from './core/load-styles'
import { promisify } from './core/promisify'
import { addUnit } from './dom/add-unit'
import prefixedEvent from './dom/prefixed-event'
import animationProperty from './dom/animation-property'
import transformProperty from './dom/transform-property'

// 我们的存储注册动画
let registeredAnimations = {}

let mainDefaults = {
  duration: 1000,
  fillMode: 'both',
  easing: 'ease',
  iterations: 1,
  delay: 0,
  direction: 'normal',
  resetWhenDone: false,
  clearTransformsBeforeStart: false
}

const animations = {}

// 是否有animation
function hasAnimation (name) {
  return registeredAnimations.hasOwnProperty(name)
}

// 设置transform动画
function setAnimationAsTransform (els, opts) {
  let clearAnimations = (opts && opts.clearAnimations === true)
  // we got a collection, potentially
  for (let i = 0, l = els.length; i < l; i++) {
    els[i].style[transformProperty] = getComputedStyle(els[i])[transformProperty]
    if (clearAnimations) clearAnimationProp(els[i])
  }
}

//清除animation的prop
function clearAnimationProp (el) {
  el.style[animationProperty] = ''
  el.style.animation = ''
}

// 设置animation的动画信息
function setAnimationProp (els, val, opts) {
  let clearTransforms = (opts && opts.clearTransforms === true)
  for (let i = 0, l = els.length; i < l; i++) {
    if (clearTransforms) {
      clearTransformProp(els[i])
    }
    els[i].style[animationProperty] = val
  }
}

function clearTransformProp (el) {
  el.style.transform = ''
  el.style[transformProperty] = ''
}

// 注册动画
animations.create = function (opts) {
  animations.remove(opts.name)
  let el = loadStyles(crateAnimation(opts.name, opts.animation))
  el.setAttribute('data-name', opts.name)
  registeredAnimations[opts.name] = {
    el: el,
    presets: opts.presets || {}
  }
}

/**
 *
 * @param els dom元素
 * @param opts 参数配置
 * @param callback 回调函数
 */
animations.run = promisify(function (els, opts, callback = function () {
}) {
  //如果第二个参数是字符，即动画名称则重新组装参数
  if (typeof opts === 'string') {
    opts = {
      name: opts
    }
  }
  // 如果不是多个
  if (!els.length) {
    els = [els]
  }
  // 如果此时还没有动画名称
  if (!opts.name) {
    return callback(Error('must supply animation name'))
  }
  let found = registeredAnimations[opts.name]
  // 没注册动画
  if (!found) {
    return callback(Error('no animation named "' + opts.name + '" exists'))
  }
  opts = Object.assign(opts, mainDefaults, found.presets)

  let animationEnd = function () {
    prefixedEvent.remove(els[0], 'AnimationEnd', animationEnd)
    if (opts.resetWhenDone) {
      setAnimationAsTransform(els, {clearAnimations: true})
    }
    return callback(null, els)
  }

  // 注册动画结束事件
  prefixedEvent.add(els[0], 'AnimationEnd', animationEnd)

  let styles = [
    opts.name,
    addUnit(opts.duration, 'ms'),
    opts.easing,
    opts.iterations,
    addUnit(opts.delay, 'ms'),
    opts.direction,
    opts.fillMode
  ]
  setAnimationProp(els, styles.join(' '), {clearTransforms: opts.clearTransformsBeforeStart})
})

// 取消动画
animations.remove = function (name) {
  if (hasAnimation(name)) {
    let styleEl = registeredAnimations[name].el
    styleEl.parentNode.removeChild(styleEl)
    delete registeredAnimations[name]
  }
}

export default animations
