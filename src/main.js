import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import store from './store'
import App from './App.vue'
import MainComponent from "./components/MainComponent/MainComponent.vue"
import Storage from "./components/Storage/Storage.vue"
Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(Vuex)
const routes=[
    {path:'/',component:MainComponent},
    {path:'/Storage',component:Storage}
]
const router = new VueRouter({
    routes
  })
new Vue({
    router,
    store,
  render: h => h(App),
}).$mount('#app')
