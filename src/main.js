import Vue from 'vue'
import App from './App.vue'
import metaButton from './packages/button/index.js'

Vue.config.productionTip = false

Vue.use(metaButton)

new Vue({
  render: h => h(App),
}).$mount('#app')
