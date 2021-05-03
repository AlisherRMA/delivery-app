import { VuexModule, Module, getModule, Mutation } from "vuex-module-decorators";
import store from "@/store";

/**
 * Store module for working with basket
 */
@Module({ dynamic: true, store, name: "scroll", preserveState: localStorage.getItem("vuex") !== null })
class ScrollVuexModule extends VuexModule {
  isDesktopSidebarVisible = false;

  @Mutation
  setDesktopSidebarVisible(value: boolean) {
    this.isDesktopSidebarVisible = value;
  }
}

export const ScrollModule = getModule(ScrollVuexModule);
