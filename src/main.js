// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './vuex';
import fastclick from 'fastclick'; // 解决移动端300毫秒延迟问题
import VueLazyload from 'vue-lazyload';


import 'common/scss/index.scss';

// import vConsole from 'vconsole';
// console.log('test');
 
Vue.config.productionTip = false;


fastclick.attach(document.body);

Vue.use(VueLazyload, {
    loading: require('common/image/default.png')
});
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})