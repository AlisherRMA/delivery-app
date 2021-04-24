<template>
  <div class="text-center">
    <v-snackbar v-model="snackbar" :multi-line="multiLine">
      Вы выбрали {{ dishesCount }} {{ postfix }} на сумму {{ overallPrice }} ₸

      <template v-slot:action="{ attrs }">
        <v-btn color="red" text v-bind="attrs" @click="snackbar = false">
          Перейти в корзину
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { BasketModule } from "../store/basket.module";

@Component
export default class BasketSnackbar extends Vue {
  multiLine = true;
  snackbar = false;
  text = `I'm a multi-line snackbar.`;

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
}
</script>

<style lang="scss"></style>
