import Vue from 'vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
//import App from './App.vue'
import App from './App'
import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'
import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';
import vueMoment from 'vue-moment' 

locale.use(lang);
Vue.use(Chartkick.use(Chart))
Vue.use(ElementUI);
Vue.use(vueMoment)



Vue.config.productionTip = false

// new Vue({
//    render: h => h(App),
// }).$mount('#app')

new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})