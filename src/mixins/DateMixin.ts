import { Component, Vue } from "vue-property-decorator";
import moment from "moment";

@Component
export default class DateMixin extends Vue {
  formatDateMMYYYY(value: string) {
    if (value) return moment(String(value)).format("MM.YYYY");
  }

  formatDate(value: Date) {
    if (value) return moment(String(value)).format("DD.MM.YYYY");
  }
}
