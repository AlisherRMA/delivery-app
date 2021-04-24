import { VuexModule, Module, getModule, Mutation } from "vuex-module-decorators";
import { Vue } from "vue-property-decorator";
import store from "@/store";
import { ISelectedDish } from "../@types/dish.type";
import { findDishIndex } from "../utils/index";

/**
 * Store module for working with basket
 */
@Module({ dynamic: true, store, name: "basket", preserveState: localStorage.getItem("vuex") !== null })
class BasketVuexModule extends VuexModule {
  selectedDishes: ISelectedDish[] = [];

  overallPrice = 0;

  dishesCount = 0;

  /**
   * adds a dish to the basket. If it already exists, increments its counter.
   * @param selectedDish
   */
  @Mutation
  addToSelectedItems(selectedDish: ISelectedDish) {
    const index = findDishIndex(this.selectedDishes, selectedDish);
    // if dish wasn't found, add it to the array
    if (index === -1) return this.selectedDishes.push(selectedDish);
    // otherwise just increase its count
    Vue.set(this.selectedDishes[index], "count", selectedDish.count);
  }

  @Mutation
  removeFromSelectedItems(removedDish: ISelectedDish) {
    const index = findDishIndex(this.selectedDishes, removedDish);
    // if the dish's count > 1, just decrease count
    if (removedDish.count >= 1) return Vue.set(this.selectedDishes[index], "count", removedDish.count);
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
