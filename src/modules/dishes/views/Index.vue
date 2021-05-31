<template>
  <section id="items_section">
    <SidebarMobile :groups="productGroups" />
    <div class="d-flex align-center justify-center full-width" :class="{ 'scroll-margin': isMobile }">
      <div class="dish-groups-wrapper">
        <!-- <div class="sidebar" v-if="!isMobile"><Sidebar :groups="productGroups" /></div> -->
        <div class="dish-groups">
          <div v-for="(group, i) in productGroups" :key="i" :id="group.identificator">
            <div class="text-center app-label-lg bold">{{ group.groupTitle }}</div>
            <div v-for="(dish, index) in group.products" :key="index" class="mx-2">
              <Dish :product="dish" class="my-0" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <BasketSnackbar ref="basketSnackbarRef" />
  </section>
</template>

<script lang="ts">
import { Component, Watch } from "vue-property-decorator";

import Dish from "../components/Dish.vue";
import Sidebar from "../components/Sidebar.vue";
import SidebarMobile from "../components/SidebarMobile.vue";
import BasketSnackbar from "../components/Snackbar.vue";

import { IDishGroup } from "../@types/dish.type";
import { dishesHardcodedList } from "../utils/dishesList";
import { BasketModule } from "../store/basket.module";
import { CitiesModule } from "../store/cities.module";
import SidebarMixin from "../mixins/sidebar.mixin";
import { WithLoadingAnimation } from "@/utils/decorators";

@Component({ components: { Dish, Sidebar, SidebarMobile, BasketSnackbar } })
export default class ProductGroupsIndexView extends SidebarMixin {
  // productGroups: ProductGroups[] = [];

  get isMobile() {
    return this.$vuetify.breakpoint.xs;
  }

  get dishes(): IDishGroup[] {
    return dishesHardcodedList;
  }

  get productGroups() {
    return BasketModule.productGroups;
  }

  get selectedProducts() {
    return BasketModule.selectedProducts;
  }

  $refs: {
    basketSnackbarRef: BasketSnackbar;
  };

  @Watch("selectedProducts", { deep: true })
  onDishesChanged() {
    let overallPrice = 0;
    let selectedProductsCount = 0;

    this.selectedProducts.map(product => {
      // computing the overall count
      selectedProductsCount += product.overallUserSelectionCount;
      // computing the overall cost
      for (const selection of Object.values(product.prices)) {
        if (selection.userSelectionCount >= 0) overallPrice += selection.price * selection.userSelectionCount;
      }
    });

    BasketModule.setOverallPrice(overallPrice);
    BasketModule.setDishesCount(selectedProductsCount);
    if (selectedProductsCount === 0) return;
    this.$refs.basketSnackbarRef.showBasketSnackbar();
  }

  @WithLoadingAnimation
  async mounted() {
    await BasketModule.getProductsList();
    await CitiesModule.getCities();
  }
}
</script>

<style lang="scss">
.the-app-container {
  margin: 0 150px;
}

.dish-groups-wrapper {
  display: flex;
  max-width: 800px;
  justify-content: center;

  @include respond(phone) {
    flex-direction: column;
  }
}

$sidebarWidth: 250px;
.sidebar {
  position: fixed;
  height: 100%;
  width: $sidebarWidth;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.scroll-margin {
  margin-top: 50px;
}
</style>
