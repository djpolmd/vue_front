import Vue from 'vue'
import App from './App'
import router from './router/index'
import Vuetify from 'vuetify'
import axios from 'axios'
import 'vuetify/dist/vuetify.min.css'
import store from './store/index'

window.Bus=new Vue;
window.axios=axios
window.token= localStorage.getItem('token');
window.user= localStorage.getItem('user');

axios.defaults.baseURL = 'http://back.test:8000/api';

axios.defaults.headers.common['Authorization'] = "Bearer " + window.token;
axios.defaults.headers.post['Content-Type'] = 'application/json';

const vuetifyOptions = { }

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>',
    vuetify: new Vuetify(vuetifyOptions)
})
