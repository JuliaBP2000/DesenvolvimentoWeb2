import Vue from 'vue'
import vuetify from './plugins/vuetify'
import { firestorePlugin } from 'vuefire'
import VueRouter from 'vue-router'
import Routes from './routes';

Vue.use(VueRouter)
Vue.use(firestorePlugin);
Vue.config.productionTip = false

const router = new VueRouter({
  routes:Routes,
  mode: 'history'
})

new Vue({ vuetify, router: router }).$mount('#app')
