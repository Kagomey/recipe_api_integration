import Vue from 'vue'
import App from './App.vue'

import axios from 'axios'
import VueYoutubeEmbed from "vue-youtube-embed";
import VueRouter from 'vue-router'
import { routes } from './routes'

axios.defaults.baseURL = "https://www.themealdb.com/api/json/v1/1/";

Vue.use(VueYoutubeEmbed);

Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
