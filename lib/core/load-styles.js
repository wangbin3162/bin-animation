/**
 * 往<head>标签中注入样式
 *
 * @param {String} css CSS string to add to the <style> tag.
 * @param {Document} doc document instance to use.
 */
export function loadStyles (css, doc = document) {
  let head = doc.head || doc.getElementsByTagName('head')[0]
  // no <head> node? create one...
  if (!head) {
    head = doc.createElement('head')
    let body = doc.body || doc.getElementsByTagName('body')[0]
    if (body) {
      body.parentNode.insertBefore(head, body)
    } else {
      doc.documentElement.appendChild(head)
    }
  }

  let style = doc.createElement('style')
  style.type = 'text/css'
  if (style.styleSheet) {  // IE
    style.styleSheet.cssText = css
  } else {                 // the world
    style.appendChild(doc.createTextNode(css))
  }
  head.appendChild(style)

  return style
}
