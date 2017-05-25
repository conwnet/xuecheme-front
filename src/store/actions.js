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

let payForEnroll = async ({ state, commit }) => {
  let res = await ajax.post(config.api_url + '/jsapi_config', {
    url: 'http://xcm.conw.net'
  }, state)
  state.tip = res
  wx.scanQRCode({
    needResult: 0, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
    scanType: ['qrCode', 'barCode'], // 可以指定扫二维码还是一维码，默认二者都有
    success: function (res) {
      var result = res.resultStr // 当needResult 为 1 时，扫码返回的结果
      console.log(result)
      state.pack.title = result
    }
  })
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
  console.log('haha')
  let res = await ajax.get(config.api_url + '/plan?coach_id=' + state.coach.coach_id + '&year=' + state.course.year + '&month=' + state.course.month + '&date=' + state.course.date, state)
  commit('handleError', res)
  if (!res.errcode && res.length) {
    res[0].content = JSON.parse(res[0].content)
    let courses = await ajax.get(config.api_url + '/course?coach_id=' + state.coach.coach_id + '&year=' + state.course.year + '&month=' + state.course.month + '&date=' + state.course.date, state)
    for (let con of res[0].content) {
      for (let course of courses) {
        if (course.start === con.start && course.end === con.end) {
          con.el = true
        }
      }
    }
    state.plan = res[0]
  }
}

let addCourse = ({ state }) => {
  axios.post(config.api_url + '/course', state.course, {
    headers: { ssid: state.ssid }
  }).then(res => {
    if (res.status === 200) {
      // showToast(state, res.data)
    }
  })
}

let getSchools = ({ state }) => {
  axios.get(config.api_url + '/school', {
    headers: { ssid: state.ssid }
  }).then(res => {
    if (res.status === 200) {
      state.schools = res.data
      console.log('school', res.data)
    }
  })
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
  payForEnroll
}
