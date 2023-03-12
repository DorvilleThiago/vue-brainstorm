import { createStore } from 'vuex'

export default createStore({
  state: {
    ideias: [] as string[]
  },
  getters: {
  },
  mutations: {
    addIdea(state, idea) {
      state.ideias.push(idea);
    }
  },
  actions: {
  },
  modules: {
  }
})