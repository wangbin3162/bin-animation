import Vue from 'vue'
import App from './App.vue'
import BinUI from 'bin-ui'
import 'bin-ui/lib/styles/index.css'

Vue.use(BinUI)

new Vue({
  render: h => h(App),
}).$mount('#app')
