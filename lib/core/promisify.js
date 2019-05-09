const toString = Object.prototype.toString

//判断是否是函数
function isFunction (fn) {
  const string = toString.call(fn)
  return string === '[object Function]' ||
    (typeof fn === 'function' && string !== '[object RegExp]') ||
    (typeof window !== 'undefined' &&
      // IE8 and below
      (fn === window.setTimeout ||
        fn === window.alert ||
        fn === window.confirm ||
        fn === window.prompt))
}

let slice = Array.prototype.slice
let Promise

if (typeof window !== 'undefined') {
  Promise = window.Promise
}
if (typeof global !== 'undefined') {
  Promise = global.Promise
}

export function promisify (func) {
  if (Promise) {
    return function () {
      let args = slice.call(arguments)
      let ctx = this
      if (isFunction(args.slice(-1))) {
        return func.apply(ctx, args)
      } else {
        return new Promise(function (resolve, reject) {
          args.push(function (err, result) {
            if (err) {
              reject(err)
            } else {
              resolve.apply(this, slice.call(arguments, 1))
            }
          })
          func.apply(ctx, args)
        })
      }
    }
  } else {
    return func
  }
}
