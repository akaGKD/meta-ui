import Vue from 'vue'
import App from './App.vue'
import metaButton from './button/button.vue'

Vue.config.productionTip = false

Vue.component(metaButton.name,metaButton)

new Vue({
  render: h => h(App),
}).$mount('#app')
