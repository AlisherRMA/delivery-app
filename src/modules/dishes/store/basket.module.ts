import { VuexModule, Module, getModule, Mutation } from "vuex-module-decorators";
import { Vue } from "vue-property-decorator";
import store from "@/store";
import { findDishIndex } from "../utils/index";
import { SelectedProduct } from "../@types/product.type";

/**
 * Store module for working with basket
 */
@Module({ dynamic: true, store, name: "basket", preserveState: localStorage.getItem("vuex") !== null })
class BasketVuexModule extends VuexModule {
  selectedDishes: SelectedProduct[] = [];

  overallPrice = 0;

  dishesCount = 0;

  /**
   * adds a dish to the basket. If it already exists, increments its counter.
   * @param selectedDish
   */
  @Mutation
  addToSelectedItems(selectedDish: SelectedProduct) {
    const index = findDishIndex(this.selectedDishes, selectedDish);
    // if dish wasn't found, add it to the array
    if (index === -1) return this.selectedDishes.push(selectedDish);
    // otherwise just increase its count

    // this.selectedDishes[index] = { ...selectedDish };
    Vue.set(this.selectedDishes, index, selectedDish);
  }

  @Mutation
  removeFromSelectedItems(removedDish: SelectedProduct) {
    const index = findDishIndex(this.selectedDishes, removedDish);
    // if the dish's count > 1, just decrease count
    if (removedDish.overallCount >= 1) return Vue.set(this.selectedDishes[index], "selection", removedDish.selection);
    // if it's last item, remove it from array
    this.selectedDishes.splice(index, 1);
  }

  @Mutation
  setOverallPrice(overallPrice: number) {
    this.overallPrice = overallPrice;
  }

  @Mutation
  setDishesCount(dishesCount: number) {
    this.dishesCount = dishesCount;
  }
}

export const BasketModule = getModule(BasketVuexModule);
