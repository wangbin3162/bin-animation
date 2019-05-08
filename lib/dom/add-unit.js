/**
 * 添加单位
 * @param item
 * @param unit
 * @returns {*}
 */
export function addUnit (item, unit) {
  if (typeof item === 'string') {
    return item
  }
  return item + unit
}
