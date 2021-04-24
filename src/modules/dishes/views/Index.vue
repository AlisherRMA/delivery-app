<template>
  <section>
    <SidebarMobile v-if="isMobile" :groups="dishes" />
    <div class="d-flex align-center justify-center full-width" :class="{ 'scroll-margin': isMobile }">
      <div class="dish-groups-wrapper">
        <div class="sidebar" v-if="!isMobile"><Sidebar :groups="dishes" /></div>
        <div class="dish-groups">
          <div v-for="(group, i) in dishes" :key="i" :id="group.id">
            <div class="text-center bold">{{ group.groupTitle }}</div>
            <div v-for="(dish, index) in group.dishes" :key="index" class="mx-2">
              <Dish :dish="dish" class="my-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <BasketSnackbar ref="basketSnackbarRef" />
  </section>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

import Dish from "../components/Dish.vue";
import Sidebar from "../components/Sidebar.vue";
import SidebarMobile from "../components/SidebarMobile.vue";
import BasketSnackbar from "../components/Snackbar.vue";

import { IDishGroup } from "../@types/dish.type";
import { dishesHardcodedList } from "../utils/dishesList";
import { BasketModule } from "../store/basket.module";

@Component({ components: { Dish, Sidebar, SidebarMobile, BasketSnackbar } })
export default class extends Vue {
  get isMobile() {
    return this.$vuetify.breakpoint.xs;
  }
  get dishes(): IDishGroup[] {
    return dishesHardcodedList;
  }
  get selectedDishes() {
    return BasketModule.selectedDishes;
  }
  get overallPrice() {
    return BasketModule.overallPrice;
  }

  $refs: {
    basketSnackbarRef: BasketSnackbar;
  };

  @Watch("selectedDishes", { deep: true })
  onDishesChanged() {
    let overallPrice = 0;
    let dishesCount = 0;
    this.selectedDishes.map(dish => {
      if (dish.count <= 1) overallPrice += dish.price;
      else overallPrice += dish.count * dish.price;
      dishesCount += dish.count;
    });
    BasketModule.setOverallPrice(overallPrice);
    BasketModule.setDishesCount(dishesCount);
    this.$refs.basketSnackbarRef.showBasketSnackbar();
  }
}
</script>

<style lang="scss">
.the-app-container {
  margin: 0 150px;
}

.dish-groups-wrapper {
  display: flex;
  max-width: 1100px;
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