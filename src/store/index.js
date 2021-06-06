import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        app_name: 'Imtiaz'
    },
    getters: {
        appName: state => {
            return state.app_name;
        }
    },
    mutations: {
        increment(state, data) {
            // console.log(state)
            // console.log(data)
            state.app_name += data
        }
    },
    actions: {
        // increment(context) {
        //     context.commit('increment')
        // }
    }
})

export default store;