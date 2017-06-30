export default {
  activeSpecies ({ commit }, key) {
    commit('ACTIVE_SPECIES', key)
  },
  activeSize ({ commit }, key) {
    commit('ACTIVE_SIZE', key)
  },
  add ({ commit }) {
    commit('ADD')
  },
  del ({ commit }) {
    commit('DEL')
  },
  buy ({ commit }) {
    commit('BUY')
  },
  remove ({ commit }, index) {
    commit('REMOVE', index)
  }
}
