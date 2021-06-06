import { VuexModule, Module, getModule, MutationAction } from "vuex-module-decorators";
import store from "@/store";
import { ProductsService } from "../api/products.service";
import { City } from "../@types/city.type";

@Module({ dynamic: true, store, name: "cities", preserveState: localStorage.getItem("vuex") !== null })
class CitiesVuexModule extends VuexModule {
  cities: City[] = [];

  @MutationAction
  public async getCities() {
    const result = await ProductsService.getCities();
    result.map((city, i) => {
      if (!city.city_sort_number) city.city_sort_number = i + 1;
    });
    return { cities: result };
  }
}

export const CitiesModule = getModule(CitiesVuexModule);
