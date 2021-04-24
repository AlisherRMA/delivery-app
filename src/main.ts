import "@/router/class-component-hooks";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import i18n from "./plugins/i18n";
import GlobalMixin from "./mixins/GlobalMixin";
import { LocaleService } from "./services/locale.service";
import moment from "moment";

Vue.mixin(GlobalMixin);

import "./assets/css/pt-sans.scss";
import "./assets/css/index.scss";

LocaleService.init();

Vue.config.productionTip = false;

Vue.filter("formatDate", function(value: Date) {
  if (value) {
    return moment(String(value)).format("DD.MM.YYYY");
  }
});

Vue.filter("formatMobileNumber", function(v: string) {
  if (v) {
    return `${v.substr(0, 2)}(${v.substr(2, 3)})-${v.substr(5, 3)}-${v.substr(8, 4)}`;
  }
});

new Vue({
  i18n,
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount("#app");
