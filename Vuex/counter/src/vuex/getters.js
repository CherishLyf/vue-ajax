// 这个 getter 函数会返回 count 值
// 在 ES6 可以写成
// export const getCount = state => state.count

export function getCount (state) {
  return state.count
}
