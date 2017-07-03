import * as types from './../types'
import router from 'router/index'

export default {
  state: {
    commodity: {
      price: '50-200',
      cover: 'http://osc94pt0z.bkt.clouddn.com/1.jpg',
      species: {
        '豹子': 'http://osc94pt0z.bkt.clouddn.com/1.jpg',
        '狗狗': 'http://osc94pt0z.bkt.clouddn.com/3.jpg',
        '猫咪': 'http://osc94pt0z.bkt.clouddn.com/6.jpg',
        '老虎': 'http://osc94pt0z.bkt.clouddn.com/9.jpg'
      },
      size: {
        '大号': '10',
        '中号': '20',
        '小号': '30'
      }
    },
    isActive: 0,
    isNow: 0,
    count: 0,
    cart: [],
    total: 0
  },
  getters: {
    commodity: state => state.commodity,
    isActive: state => state.isActive,
    isNow: state => state.isNow,
    count: state => state.count,
    cart: state => state.cart,
    total: state => state.total
  },
  mutations: {
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
        router.push({
          path: 'shopping'
        })
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
  },
  actions: {
    // 选中品种
    activeSpecies: ({commit}, key) => commit('ACTIVE_SPECIES', key),
    // 选中大小
    activeSize: ({commit}, key) => commit('ACTIVE_SIZE', key),
    // 增加数量
    add: ({commit}) => commit('ADD'),
    // 减少数量
    del: ({commit}) => commit('DEL'),
    // 点击购买
    buy: ({commit}) => commit('BUY'),
    // 点击删除
    remove: ({commit}, index) => commit('REMOVE', index)
  }
}
