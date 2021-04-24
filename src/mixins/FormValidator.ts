import { Component, Vue, Watch } from "vue-property-decorator";

@Component
export default class extends Vue {
  protected formRef = "form-validator-ref";
  get rules() {
    return {
      required: (value: string) => {
        switch (typeof value) {
          case "number":
            return true;
          case "boolean":
            return value || this.$t("formValidator.required");
          default:
            return (!!value && value.trim().length > 0) || this.$t("formValidator.required");
        }
      },
      stringLengthMaxMin: (max: number, min?: number) => (value: string) => {
        if (max && value.trim().length > max) {
          return this.$t("formValidator.stringMax", { max });
        } else if (min && value && value.trim().length < min) {
          return this.$t("formValidator.stringMin", { min });
        }
        return true;
      },
      email: (value: string) => {
        const cyrillicPattern = /[а-яА-ЯЁё]/;
        const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return (!cyrillicPattern.test(value) && emailPattern.test(value)) || this.$t("formValidator.email");
      },
      phoneRequired: (value: string) => {
        return value.replace(/(_)/g, "").length > 3 || this.$t("formValidator.required");
      },
      phone: (value: string) => {
        if (!value) return true;
        const MIN_PHONE_LENGTH = 9;
        return value.replace(/(_)/g, "").length < 4 || (value && !value.includes("_") && value.length > MIN_PHONE_LENGTH) || this.$t("formValidator.phone");
      },
    };
  }

  @Watch("$i18n.locale")
  public resetFormValidation() {
    (this.$refs[this.formRef] as Vue & {
      resetValidation: () => void;
    }).resetValidation();
  }

  validateForm() {
    //!!во всех компонентах которые используют этот примесь нужно в компоненте указать formRef-ссылка на контейнер формы
    return (this.$refs[this.formRef] as Vue & {
      validate: () => boolean;
    }).validate();
  }

  resetForm() {
    ((this.$refs[this.formRef] as unknown) as { reset: () => void }).reset();
  }
}
