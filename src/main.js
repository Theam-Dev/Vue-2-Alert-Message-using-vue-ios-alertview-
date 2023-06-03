import Vue from 'vue'
import App from './App.vue'
import iosAlertView from 'vue-ios-alertview';

Vue.config.productionTip = false
Vue.use(iosAlertView);

new Vue({
  render: h => h(App),
}).$mount('#app')
