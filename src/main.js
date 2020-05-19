import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueRouter from 'vue-router'
import { routes } from './routes'

axios.defaults.baseURL = "https://www.themealdb.com/api/json/v1/1/";

Vue.use(VueRouter);
const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
