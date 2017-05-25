// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'mint-ui/lib/style.css'

import { Field, Button, Navbar, TabItem, TabContainer, TabContainerItem, Cell, Actionsheet } from 'mint-ui'

Vue.component(Actionsheet.name, Actionsheet)
Vue.component(Cell.name, Cell)
Vue.component(TabContainer.name, TabContainer)
Vue.component(TabContainerItem.name, TabContainerItem)
Vue.component(Navbar.name, Navbar)
Vue.component(TabItem.name, TabItem)
Vue.component(Field.name, Field)
Vue.component(Button.name, Button)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
