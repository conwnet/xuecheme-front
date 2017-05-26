import config from '@/config.js'
import axios from 'axios'
import wx from 'weixin-js-sdk'

let ajax = {
  get (url, state) {
    return new Promise(resolve => {
      axios.get(url, {
        headers: { ssid: state.ssid }
      }).then(res => {
        if (res.status === 200) {
          resolve(res.data)
        } else {
          resolve({ errcode: res.status, errmsg: '网络错误...' })
        }
      })
    })
  },
  post (url, data, state) {
    return new Promise(resolve => {
      axios.post(url, data, {
        headers: { ssid: state.ssid }
      }).then(res => {
        if (res.status === 200) {
          resolve(res.data)
        } else {
          resolve({ errcode: res.status, errmsg: '网络错误...' })
        }
      })
    })
  }
}

let wxJsConfig = async ({ state, commit }) => {
  let conf = await ajax.post(config.api_url + '/get_jsapi_config', {
    url: 'http://xcm.aimoma.com/?'
  }, state)
  wx.config(conf)
}

let payForEnroll = async ({ state, commit }) => {
  commit('showLoading')
  let res = await ajax.post(config.api_url + '/get_pay_info', state.pack, state)
  commit('handleError', res)
  if (res.errcode) return 0
  console.log(res)
  res.success = res => {
    // commit('handleError', {errmsg: '支付成功！'})
  }
  wx.chooseWXPay(res)
}

let getUserInfo = async ({ state, commit }) => {
  commit('showLoading')
  let res = await ajax.get(config.api_url + '/user', state)
  commit('handleError', res)
  if (!res.errcode) state.user = res
}

let saveUserName = async ({ state, commit }) => {
  commit('showLoading')
  let res = await ajax.post(config.api_url + '/user', {
    name: state.user.name
  }, state)
  commit('handleError', res)
}

let saveUserSex = async ({ state, commit }) => {
  commit('showLoading')
  let res = await ajax.post(config.api_url + '/user', {
    sex: state.user.sex
  }, state)
  commit('handleError', res)
}

let sendVerifyCode = async ({ state, commit }, phone) => {
  commit('showLoading')
  let res = await ajax.post(config.api_url + '/verify', {
    phone: phone
  }, state)
  commit('handleError', res)
}

let changePhone = async ({ state, commit }, code) => {
  commit('showLoading')
  let res = await ajax.post(config.api_url + '/changePhone', {
    code: code
  }, state)
  commit('handleError', res)
}

let getCoaches = ({ state }) => {
  axios.get(config.api_url + '/coach', {
    headers: { ssid: state.ssid }
  }).then(res => {
    if (res.status === 200) {
      if (!res.data.errcode) {
        state.coaches = res.data
      }
    }
  })
}

let getCoach = ({ state }) => {
  axios.get(config.api_url + '/coach/' + state.course.coach_id, {
    headers: { ssid: state.ssid }
  }).then(res => {
    if (res.status === 200) {
      if (!res.data.errcode) {
        state.coach = res.data
      }
    }
  })
}

let getPlan = async ({ state, commit }) => {
  commit('showLoading')
  let res = await ajax.post(config.api_url + '/get_plan', state.course, state)
  commit('handleError', res)
  state.plan = res
}

let addCourse = async ({ state, commit }) => {
  commit('showLoading')
  let res = await ajax.post(config.api_url + '/course', state.course, state)
  commit('handleError', res)
}

let getSchools = async ({ state, commit }) => {
  commit('showLoading')
  let res = await ajax.get(config.api_url + '/school', state)
  commit('handleError', res)
  state.schools = res
  console.log(res)
}

let getSchool = ({ state }) => {
  axios.get(config.api_url + '/school/' + state.school.id, {
    headers: { ssid: state.ssid }
  }).then(res => {
    if (res.status === 200) {
      state.school = res.data
    }
  })
}

let getPacks = ({ state }) => {
  axios.get(config.api_url + '/pack?school_id=' + state.school.id, {
    headers: { ssid: state.ssid }
  }).then(res => {
    if (res.status === 200) {
      state.packs = res.data
    }
  })
}

export default {
  getUserInfo,
  saveUserName,
  saveUserSex,
  changePhone,
  sendVerifyCode,
  getCoaches,
  getCoach,
  getPlan,
  addCourse,
  getSchools,
  getSchool,
  getPacks,
  wxJsConfig,
  payForEnroll
}
