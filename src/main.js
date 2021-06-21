import Vue from 'vue'
import Details from './pages/Details.vue'
import vuetify from './plugins/vuetify'
import { firestorePlugin } from 'vuefire'

Vue.use(firestorePlugin);
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(Details)
}).$mount('#app')
