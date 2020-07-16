import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import store from './store'
import App from './App.vue'
import MainComponent from "./components/MainComponent/MainComponent.vue"
Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(Vuex)
const router=[
    {path:'/',component:MainComponent},
]

new Vue({
    router,
    store,
  render: h => h(App),
}).$mount('#app')
