<template>
  <div class="text-center">
    <v-snackbar v-model="snackbar" color="primary" :multi-line="multiLine" :timeout="-1">
      Вы выбрали {{ dishesCount }} {{ postfix }} на сумму {{ overallPrice }} ₸

      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="onOpenBasketClicked">
          Перейти в корзину
        </v-btn>
      </template>
    </v-snackbar>
    <Basket ref="basketRef" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { BasketModule } from "../store/basket.module";

import Basket from "./Basket.vue";

@Component({ components: { Basket } })
export default class BasketSnackbar extends Vue {
  multiLine = true;
  snackbar = false;
  text = `I'm a multi-line snackbar.`;

  $refs: {
    basketRef: Basket;
  };

  get overallPrice() {
    return BasketModule.overallPrice;
  }

  get dishesCount() {
    return BasketModule.dishesCount;
  }

  get postfix() {
    if (this.dishesCount === 1) return "блюдо";
    if (this.dishesCount > 1 && this.dishesCount <= 4) return "блюда";
    else return "блюд";
  }

  showBasketSnackbar() {
    this.snackbar = true;
  }

  onOpenBasketClicked() {
    this.snackbar = false;
    this.$refs.basketRef.show();
  }
}
</script>

<style lang="scss"></style>
