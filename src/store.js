import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    transactions: [],
    categories: [],
    types: ['Inflows', 'Outflows', 'Allocations']
  },
  mutations: {
    setCategories(state, categories){
      state.categories = categories
    },
    setTransactions(state, transactions){
      state.transactions = transactions
    }
  },
  actions: {
    async setCategories({commit}, categories){
      commit('setCategories', categories)
      //return Promise.resolve()
    },
    async setTransactions({dispatch, commit}, {transactions, categories}){
      await dispatch('setCategories', categories) // wait for 'setCategories' to finish
      commit('setTransactions', transactions)
    }
  }
})
