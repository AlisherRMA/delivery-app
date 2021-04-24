import { VuexModule, Module, Action, Mutation, getModule } from "vuex-module-decorators";
import store from "./index";
export type SnackBarColor = "success" | "warning" | "error";
interface SnackBarPayload {
  show?: boolean;
  message: string;
  color?: SnackBarColor;
  timeout?: number;
}

@Module({ dynamic: true, store, name: "base" })
class BaseModule extends VuexModule {
  isLoading = false;

  snackBarPayload: SnackBarPayload = {
    show: false,
    message: "",
    color: "success",
    timeout: -1,
  };

  @Mutation
  setLoadingStatus(isLoading: boolean) {
    this.isLoading = isLoading;
  }

  @Mutation
  private setSnackBarPayload(snackBarPayload: SnackBarPayload) {
    this.snackBarPayload = snackBarPayload;
  }

  @Action
  public async showMessage({ message, color = "success", timeout = 6000 }: SnackBarPayload) {
    this.setSnackBarPayload({
      message,
      color,
      timeout,
      show: true,
    });
  }
}

export default getModule(BaseModule);
