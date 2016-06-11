import 'spectre.css/dist/spectre.css'
import VueRouter from 'vue-router'
import routerMap from './router.js'
import Navigator from './components/navigator.js'
import filters from './filter.js'

Vue.use(VueRouter);
Vue.component('navigator', Navigator);

Object.keys(filters).forEach(function(k) {
	Vue.filter(k, filters[k]);
});

const router = new VueRouter({
	history: true
});
routerMap(router);

const app = Vue.extend({
});

router.start(app, '#app');