<template>
  <!-- <div id="app-header">
    header
  </div> -->
  <v-app-bar color="primary" style="z-index: 11" fixed dense dark flat>
    <v-spacer></v-spacer>

    <span style="position:relative;">
      <v-btn icon>
        <v-icon>mdi-cart-outline</v-icon>
        <!-- <v-avatar class="items-count" color="white" >{{ selectedItemsCount }}</v-avatar> -->
      </v-btn>
      <v-avatar style="position: absolute" v-show="selectedItemsCount" class="items-count" color="#4b878bff" size="18">
        {{ selectedItemsCount }}
      </v-avatar>
    </span>

    <v-btn icon>
      <v-icon>mdi-account</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import LanguageChanger from "@/components/ui/LanguageChanger.vue";
import { Component, Vue } from "vue-property-decorator";

import { BasketModule } from "@/modules/dishes/store/basket.module";

@Component({
  name: "AppHeader",
  components: { LanguageChanger },
})
export default class AppNavbar extends Vue {
  get selectedItemsInBasket() {
    return BasketModule.selectedDishes;
  }

  get selectedItemsCount() {
    return BasketModule.dishesCount;
  }
}
</script>

<style lang="scss">
#app-header {
  position: sticky;
  height: 60px;
  background: $primary;
}

.items-count {
  position: absolute;
  top: 25px;
  left: 25px;
}
</style>
