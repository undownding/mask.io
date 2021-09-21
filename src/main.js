/*
 * @Descripttion:
 * @version:
 * @Author: jimmy
 * @Date: 2021-09-12 14:41:42
 * @LastEditors: jimmy
 * @LastEditTime: 2021-09-14 14:08:21
 */
import Vue from "vue";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";
import 'ant-design-vue/lib/date-picker/style/css';
import { Collapse, Anchor } from 'ant-design-vue';
import App from "./App.vue";
import router from "./router";
import "./styles/reset.css";

Vue.config.productionTip = false;
Vue.use(VueMaterial);
Vue.use(Collapse);
Vue.use(Anchor);

const _isMobile = () => {
	let flag = navigator.userAgent.match(
		/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
	);
	return !!flag;
};

Vue.prototype._isMobile = _isMobile;

new Vue({
	router,
	render: (h) => h(App),
}).$mount("#app");
