import { Component, Vue } from "vue-property-decorator";

@Component
export default class extends Vue {
  focusTable(selector = ".v-data-table") {
    this.$vuetify.goTo(selector);
  }
}
