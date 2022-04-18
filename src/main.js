import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import metaButton from './packages/button/index.js'
import metaSwitch from './packages/switch/index.js'

Vue.config.productionTip = false

Vue.use(metaButton)
Vue.use(metaSwitch)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
