import axios, { AxiosError } from "axios";
import { LocaleService } from "./locale.service";
import baseModule from "@/store/base.module";
import i18n from "@/plugins/i18n";
import { AuthService } from "@/modules/auth/services/auth.service";

export const setApiServiceLocale = () => {
  axios.defaults.headers.common["Accept-Language"] = LocaleService.getLocale();
  // axios.defaults.baseURL = "http://localhost:3000";
  axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;
  axios.defaults.headers.common["Authorization"] = `Bearer ${AuthService.getAuthToken()}`;
};

setApiServiceLocale();

axios.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    const getDataMessage = async (error: AxiosError) => {
      // if (error.request.responseType == "blob") return (await blobToJson<BaseResponseData>(error.response?.data))?.message;
      return error.response?.data.message;
    };

    let message = "Произошла ошибка";

    const res = error.response;

    if (res) {
      switch (res.status) {
        case 400:
          message = await getDataMessage(error);
          if (!message) {
            baseModule.showMessage({ message: i18n.t("common.defaultErrorMessage") as string, color: "error" });
          } else baseModule.showMessage({ message, color: "warning" });
          break;
        case 404: // TODO: пересмотреть
          baseModule.showMessage({ message: i18n.t("common.defaultErrorMessage") as string, color: "error" });
          break;
        case 500:
          message = await getDataMessage(error);
          baseModule.showMessage({ message: "Внутренняя ошибка сервера", color: "error" });
          break;
        case 502:
        case 503:
          break;
      }
    } else if (error.message) {
      message = error.message;
    }
    return Promise.reject(error);
  },
);

export { axios as Api };
