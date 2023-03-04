import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './styles/index.less'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { ElementTiptapPlugin } from 'element-tiptap'
// import this package's styles
import 'element-tiptap/lib/index.css'

Vue.use(ElementTiptapPlugin, {
  /* plugin options */
})
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
