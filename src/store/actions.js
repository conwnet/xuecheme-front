import config from '@/config.js'
import axios from 'axios'

let getUserInfo = ({ state }) => {
  axios.get(config.api_url + '/user', {
    headers: { ssid: state.ssid }
  }).then(res => {
    if (res.status === 200) {
      state.user = res.data
    }
  })
}

let saveUserName = ({ state }) => {
  axios.post(config.api_url + '/user', { name: state.user.name }, {
    headers: { ssid: state.ssid }
  }).then(res => {
    if (res.status === 200) {
      showToast(state, res.data)
    }
  })
}

let saveUserSex = ({ state }) => {
  axios.post(config.api_url + '/user', { sex: state.user.sex }, {
    headers: { ssid: state.ssid }
  }).then(res => {
    if (res.status === 200) {
      showToast(state, res.data)
    }
  })
}

let sendVerifyCode = ({ state }, phone) => {
  axios.get(config.api_url + '/verify?phone=' + phone, {
    headers: { ssid: state.ssid }
  }).then(res => {
    if (res.status === 200 && !res.data.errcode) {
      console.log('sendVerifyCode: Sucess')
    }
  })
}

let changePhone = ({ state, dispatch }, code) => {
  axios.post(config.api_url + '/changePhone', { code: code }, {
    headers: { ssid: state.ssid }
  }).then(res => {
    if (res.status === 200) {
      state.tip.loading = false
      showToast(state, res.data)
    }
  })
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

let getPlan = ({ state }) => {
  axios.get(config.api_url + '/plan?coach_id=' + state.coach.coach_id + '&year=' + state.course.year + '&month=' + state.course.month + '&date=' + state.course.date, {
    headers: { ssid: state.ssid }
  }).then(res => {
    if (res.status === 200) {
      if (res.data.length) {
        state.plan = res.data[0]
        state.plan.content = JSON.parse(state.plan.content)
      }
    }
  })
}

let addCourse = ({ state }) => {
  axios.post(config.api_url + '/course', state.course, {
    headers: { ssid: state.ssid }
  }).then(res => {
    if (res.status === 200) {
      showToast(state, res.data)
    }
  })
}

let getCourses = ({ state }) => {
  axios.get(config.api_url + '/course?coach_id=' + state.coach.coach_id + '&year=' + state.course.year + '&month=' + state.course.month + '&date=' + state.course.date, {
    headers: { ssid: state.ssid }
  }).then(res => {
    if (res.status === 200) {
      if (res.data.errcode) {
        console.log(res.data.errmsg)
      } else {
        state.courses = res.data
      }
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

let showToast = (state, data) => {
  state.tip.message = data.errmsg
  if (data.errcode) {
    state.tip.error_toast = true
    setTimeout(() => {
      state.tip.error_toast = false
    }, 1000)
  } else {
    state.tip.success_toast = true
    setTimeout(() => {
      state.tip.success_toast = false
    }, 1000)
  }
}

export default {
  getUserInfo,
  saveUserName,
  saveUserSex,
  changePhone,
  sendVerifyCode,
  showToast,
  getCoaches,
  getCoach,
  getPlan,
  addCourse,
  getCourses,
  getSchools,
  getSchool,
  getPacks
}
