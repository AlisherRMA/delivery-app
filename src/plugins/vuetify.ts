import Vue from "vue";
import Vuetify from "vuetify/lib";
import "@mdi/font/css/materialdesignicons.css";
import i18n from "./i18n";
import { LangTranslator } from "vuetify/types/services/lang";

Vue.use(Vuetify);

export default new Vuetify({
  lang: {
    t: ((key, ...params) => i18n.t(key, params)) as LangTranslator,
  },
  icons: {
    iconfont: "mdi",
  },
  theme: {
    themes: {
      light: {
        primary: "#009de0",
        secondary: "#f57c00",
        lightBlue: "#009de0",
      },
    },
    options: {
      customProperties: true,
    },
  },
});
