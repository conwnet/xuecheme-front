import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import { Indicator, Toast } from 'mint-ui'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ssid: '',
    time_out: 0,
    user: {},
    coach: {},
    coaches: [],
    course: {},
    courses: [],
    schools: [],
    school: {},
    packs: [],
    pack: {},
    plan: {},
    schemas: [],
    tip: {}
  },
  mutations: {
    showLoading (state, message) {
      Indicator.open(message)
    },
    handleError (state, error) {
      Indicator.close()
      if (!error) return 0
      if (error.errcode) {
        Toast(error.errmsg)
      } else {
        if (error.errmsg) {
          Toast(error.errmsg)
        }
      }
    }
  },
  actions
})
