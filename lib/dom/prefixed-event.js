let pfx = ['webkit', 'moz', 'MS', 'o', '']

const prefixedEvent = {}

prefixedEvent.add = function (element, type, callback = function () {
}) {
  if (!element) {
    throw new Error('element is required')
  }
  if (!type) {
    throw new Error('type is required')
  }
  for (let p = 0; p < pfx.length; p++) {
    if (!pfx[p]) {
      type = type.toLowerCase()
    }
    element.addEventListener(pfx[p] + type, callback, false)
  }
}

prefixedEvent.remove = function (element, type, callback = function () {
}) {
  if (!element) {
    throw new Error('element is required')
  }
  if (!type) {
    throw new Error('type is required')
  }
  for (let p = 0; p < pfx.length; p++) {
    if (!pfx[p]) {
      type = type.toLowerCase()
    }
    element.removeEventListener(pfx[p] + type, callback, false)
  }
}

export default prefixedEvent
