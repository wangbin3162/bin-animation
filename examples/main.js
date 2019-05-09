import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/color-brewer.css'
import './assets/styles/index.styl'

// 这里引入bin-ui的组件
import BinUI from 'bin-ui'
import 'bin-ui/lib/styles/index.css'
import BCollapseTransition from 'bin-ui/src/components/base/collapse-transition'

Vue.use(BinUI)

import DemoBlock from './components/demo-block.vue'
import MainHeader from './components/header.vue'
import MainFooter from './components/footer.vue'
import SideNav from './components/side-nav.vue'

Vue.component('DemoBlock', DemoBlock)
Vue.component('MainHeader', MainHeader)
Vue.component('MainFooter', MainFooter)
Vue.component('SideNav', SideNav)
Vue.component('BCollapseTransition', BCollapseTransition)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
