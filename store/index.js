export const state = () => ({
  itemList: '',
  itemValue: ''
})

export const getters = {
  getItemList(state) {
    return state.itemList
  }
}

export const mutations = {
  setItemList(state, data) {
    state.itemList = data
  }
}

export const actions = {
  async storeItemData({ commit }, itemName, itemValue) {
    const { data } = await this.$axios.post('http://localhost/api/item', {
      params: {
        itemName: itemName,
        itemValue: itemValue
      }
    })
    commit('setItemList', data)
  }
}
