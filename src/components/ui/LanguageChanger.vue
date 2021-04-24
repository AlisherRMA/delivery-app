<template>
  <div id="language-changer" class="d-flex align-center">
    <span @click="handleChangeLocale('kk')" :class="computeClass('kk')" class="language">
      KZ
    </span>
    <div class="divider-wrapper mx-2 lightGrey"></div>
    <span @click="handleChangeLocale('ru')" :class="computeClass('ru')" class="language">
      RU
    </span>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { LocaleService } from "@/services/locale.service";
import { setApiServiceLocale } from "@/services/api.service";

export default Vue.extend({
  methods: {
    handleChangeLocale(locale: string) {
      if (locale === this.$i18n.locale) return;
      this.$i18n.locale = locale;
      LocaleService.setLocale(locale);
      setApiServiceLocale();
    },
    computeClass(locale: string) {
      const currentLocale = this.$i18n.locale;
      return {
        "black--text": currentLocale == locale,
        "lightGrey--text": currentLocale != locale,
      };
    },
  },
});
</script>

<style lang="scss" scoped>
.language {
  cursor: pointer;
}
.divider-wrapper {
  height: 50%;
  width: 1px;
}
</style>
