import * as types from './../types'
import router from 'router/index'
export default {
  [types.ACTIVE_SPECIES] (state, key) {
    state.isActive = key
    state.commodity.cover = state.commodity.species[key]
  },
  [types.ACTIVE_SIZE] (state, key) {
    state.isNow = key
    state.commodity.price = state.commodity.size[key]
  },
  [types.ADD] (state) {
    state.count++
  },
  [types.DEL] (state) {
    state.count--
  },
  [types.BUY] (state) {
    if (state.isActive !== 0 && state.isNow !== 0 && state.count !== 0) {
      state.cart.push({
        cover: state.commodity.cover,
        name: state.isActive,
        size: state.isNow,
        num: state.count,
        price: state.commodity.price * state.count
      })
      state.commodity.cover = 'http://osc94pt0z.bkt.clouddn.com/1.jpg'
      state.commodity.price = '50-200'
      state.count = 1
      state.isActive = 0
      state.isNow = 0
      router.push({ path: 'shopping' })
      // 总计
      state.total = 0
      state.cart.forEach(function (e) {
        state.total += e.price
      }, this)
    }
  },
  [types.REMOVE] (state, index) {
    state.cart.splice(index, 1)
    state.total = 0
    state.cart.forEach(function (e) {
      state.total += e.price
    }, this)
  }
}
