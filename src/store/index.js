import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ssid: '81413b084219bfe6cb84bdc5880b25662f53a1b2eaca6341d2d402ffb3fadecd',
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
    tip: {
      loading: false,
      error_toast: false,
      success_toast: false,
      sheet: false,
      dialog: false,
      message: ''
    }
  },
  actions
})
