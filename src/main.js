import Vue from 'vue'
import App from './App.vue'
import metaButton from './packages/button/index.js'
import metaSwitch from './packages/switch/index.js'

Vue.config.productionTip = false

Vue.use(metaButton)
Vue.use(metaSwitch)

new Vue({
  render: h => h(App),
}).$mount('#app')
