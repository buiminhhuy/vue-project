import Vue from 'vue'

import 'normalize.css/normalize.css'// A modern alternative to CSS resets
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/styles/index.scss' // global css
import '@/assets/icons' // icon
import '@/permission' // permission control

import App from './App'
import router from './router'
import store from './store'
import i18n from './locales'

/**
 * Global Config
 */
Vue.config.productionTip = false

// How to use EventBus https://medium.com/hong-kong-tech/reusable-scalable-and-easy-to-organize-project-using-vuejs-part-3-ed8cba6b4dfe
const EventBus = new Vue()
Object.defineProperties(Vue.prototype, {
	$bus: {
		get: function() {
			return EventBus
		}
	}
})

const lang = store.state.language
if (lang) {
	i18n.locale = lang
}

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})
