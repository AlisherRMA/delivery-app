import { VuexModule, Module, getModule, Mutation, MutationAction } from "vuex-module-decorators";
import store from "@/store";
import { ProductGroups, Product } from "../@types/product.type";
import { ProductsService } from "../api/products.service";

/**
 * Store module for working with basket
 */
@Module({ dynamic: true, store, name: "basket", preserveState: localStorage.getItem("vuex") !== null })
class BasketVuexModule extends VuexModule {
  productGroups: ProductGroups[] = [];

  overallPrice = 0;

  dishesCount = 0;

  @MutationAction
  public async getProductsList() {
    const result = await ProductsService.getProducts();
    return { productGroups: result };
  }

  get selectedProducts() {
    const products: Product[] = [];
    this.productGroups.map(group => {
      group.products.map(product => {
        // products.push(pro)
        if (product.overallUserSelectionCount > 0) products.push(product);
      });
    });
    return products;
  }

  @Mutation
  setOverallPrice(overallPrice: number) {
    this.overallPrice = overallPrice;
  }

  @Mutation
  setDishesCount(dishesCount: number) {
    this.dishesCount = dishesCount;
  }

  expandedItems: number[] = [];

  @Mutation
  setExpandedItems(itemId: number) {
    this.expandedItems = [itemId];
  }

  @Mutation
  clearExpandedItems() {
    this.expandedItems = [];
  }
}

export const BasketModule = getModule(BasketVuexModule);
