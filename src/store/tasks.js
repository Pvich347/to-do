export default {
  state: {
    tasks: [
      {
        id: '1',
        name: 'First task',
        done: false
      },
      {
        id: '2',
        name: 'Second task',
        done: true
      },
      {
        id: '3',
        name: 'Third task',
        done: false
      }
    ]
  },
  mutations: {
    createAd (state, payload) {
      state.ads.push(payload)
    }
  },
  actions: {
    createAd ({ commit }, payload) {
      payload.id = 'hgtfhfgs'

      commit('createAd', payload)
    }
  },
  getters: {
    tasks (state) {
      return state.tasks.filter(task => {
        return !task.done
      })
    },
    completed (state) {
      return state.tasks.filter(task => {
        return task.done
      })
    },
    adById (state) {
      return adId => {
        return state.ads.find(ad => ad.id === adId)
      }
    }
  }
}
