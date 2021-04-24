import { STORAGE_KEY_LOCALE } from "@/config/const";

export class LocaleService {
  public static init() {
    if (!this.getLocale()) {
      this.setLocale(process.env.VUE_APP_I18N_LOCALE || "ru");
    }
  }
  public static setLocale(locale: string) {
    localStorage.setItem(STORAGE_KEY_LOCALE, locale);
  }
  public static getLocale() {
    return localStorage.getItem(STORAGE_KEY_LOCALE);
  }
}
