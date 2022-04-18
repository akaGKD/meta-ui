import Vue from 'vue'
import VueRouter from 'vue-router'
import Button from '../views/button.vue'
import Switch from '../views/switch.vue'
Vue.use(VueRouter)

const routes = [
    { path: "/button", component: Button },
    { path: "/switch", component: Switch }

]

const router = new VueRouter({
    routes
})

export default router