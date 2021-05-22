<template>
  <v-text-field
    :ref="tfRef"
    class="mask-phone py-0"
    :value="value"
    @input="handleInput"
    @blur="setLegend"
    @keyup.enter="$emit('enter')"
    placeholder="+7(XXX)-XXX-XXXX"
    autocomplete="off"
    v-bind="$attrs"
    validate-on-blur
  />
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import Inputmask from "inputmask";

type NullableElement = HTMLElement | null;
const MIN_PHONE_LENGTH = 9;

@Component
export default class extends Vue {
  @Prop(String) value!: string;

  tfRef = "tfRef";

  focus() {
    this.$nextTick((this.$refs[this.tfRef] as HTMLElement).focus);
  }
  setLegend() {
    const legend: NullableElement = this.$el.querySelector("fieldset legend");
    const label: NullableElement = this.$el.querySelector(".v-text-field__slot label");
    if (!legend || !label) return;
    legend.style.cssText = `width:${label.getBoundingClientRect().width + 7.1}px !important`;
  }
  handleInput(v: string) {
    if (v.replace(/(_)/g, "").length < 4) {
      this.$emit("input", "");
    } else {
      this.$emit("input", v);
    }
  }

  mounted() {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const vm = this;
    const input: NullableElement = this.$el.querySelector(".v-text-field__slot input");
    if (!input) return;
    Inputmask({
      regex: String.raw`^\+7\(\d{3}\)-\d{3}-\d{4}$`,
      autoUnmask: true,
      onUnMask: function(maskedValue: string) {
        return maskedValue.replace(/[()-]/g, "");
      },
      onBeforeMask: function(pastedValue: string) {
        pastedValue = pastedValue.replace(/[&/\\#,+()$~%.'":*?<>{}-]/g, "");
        if (isNaN(Number(pastedValue))) {
          vm.$emit("input", "");
          return "";
        }
        if (pastedValue.length > MIN_PHONE_LENGTH) {
          const cut = pastedValue.substring(pastedValue.length - MIN_PHONE_LENGTH);
          vm.$emit("input", `+7${cut}`);
          return cut;
        } else {
          return pastedValue;
        }
      },
    }).mask(input);
    this.setLegend();
  }
}
</script>
<style>
.mask-phone .v-text-field__slot label {
  transform: translateY(-17px) scale(0.75) !important;
}
</style>
