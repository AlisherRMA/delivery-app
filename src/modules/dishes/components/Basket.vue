<template>
  <div>
    <v-dialog v-model="isDialogVisible" max-width="600px" :fullscreen="isMobile">
      <v-card elevation="1" class="pa-4 basket">
        <section class="basket__container">
          <header class="d-flex align-center">
            <v-btn v-if="isMobile" icon @click="onBackPressed"><v-icon>mdi-chevron-left</v-icon></v-btn>
            <h1 class="text-center flex-grow-1 app-label-lg" :class="{ 'mr-3': isMobile }">{{ headerText }}</h1>
          </header>
          <aside v-if="step === 1">
            <!-- ITEMS -->
            <section v-if="selectedItemsCount" class="d-flex flex-column full-height">
              <div v-for="(item, i) in selectedItems" :key="i">
                <div v-for="(selection, i) in Object.values(item.prices)" :key="i">
                  <v-expand-transition>
                    <div v-if="selection.userSelectionCount">
                      <v-divider class="mx-2"></v-divider>
                      <v-row class="my-0 mx-2 align-center">
                        <v-col cols="3">
                          <div><v-img :src="item.image_link" style="border-radius: 5px" height="60px" width="70px"></v-img></div>
                        </v-col>
                        <v-col cols="9" class="d-flex align-center justify-space-between">
                          <div>
                            <p>
                              <span class="app-label-md bold">{{ item.product_name }}</span> ({{ selection.weight }} гр.)
                            </p>
                            <div class="app-label-md lightBlue--text">{{ selection.price }} ₸</div>
                          </div>

                          <div class="d-flex flex-column align-center counter">
                            <v-btn :large="!isMobile" :small="isMobile" icon @click="onIncrementCount(item, selection)">
                              <v-icon>mdi-plus-thick</v-icon>
                            </v-btn>
                            <span> {{ selection.userSelectionCount }} </span>
                            <v-btn :large="!isMobile" :small="isMobile" rounded icon @click="onDecrementCount(item, selection)">
                              <v-icon>mdi-minus-thick</v-icon>
                            </v-btn>
                          </div>
                        </v-col>
                      </v-row>
                      <v-divider class="mx-2"></v-divider>
                    </div>
                  </v-expand-transition>
                </div>
              </div>
              <!-- OVERALL PRICE -->
              <div class="d-flex pa-1 mx-2 lightBlue">
                <span class="ml-auto app-label-sm bold white--text">Итого: {{ overallPrice }}₸</span>
              </div>
            </section>
            <section v-else class="text-center app-label-md">
              Ваша корзина пуста
            </section>

            <v-card-actions class="d-flex flex-column">
              <v-btn class="full-width " color="primary" @click="onNextStep">Оформить заказ</v-btn>
              <v-btn class="full-width ml-0 mt-3" outlined @click="onCancel">Отмена</v-btn>
            </v-card-actions>
          </aside>
          <!-- STEP 2 -->
          <v-slide-x-transition>
            <aside v-if="step === 2">
              <ConfirmOrder @onConfirm="onConfirm" />
            </aside>
          </v-slide-x-transition>
          <!-- STEP 3 -->
          <v-slide-x-transition>
            <aside v-if="step === 3" class="pa-4 text-center app-label-md mt-16">
              Спасибо за заказ. В ближайшее время наш менеджер свяжется с вами.
              <v-btn class="full-width ml-0 mt-16" outlined @click="onCancel">Закрыть</v-btn>
            </aside>
          </v-slide-x-transition>
        </section>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { BasketModule } from "../store/basket.module";
import { Product, ProductPrice } from "../@types/product.type";

import ConfirmOrder from "./ConfirmOrder.vue";
import { UserContactsDto } from "../@types/order.dto";
import { ProductsService } from "../api/products.service";
import { WithLoadingAnimation } from "@/utils/decorators";

@Component({ components: { ConfirmOrder } })
export default class BasketDialog extends Vue {
  isDialogVisible = false;
  step = 1;

  // VUEX DATA
  get selectedItems() {
    return BasketModule.selectedProducts;
  }
  get overallPrice() {
    return BasketModule.overallPrice;
  }
  get selectedItemsCount() {
    return BasketModule.dishesCount;
  }
  get isMobile() {
    return this.$vuetify.breakpoint.xs;
  }
  get headerText() {
    if (this.step === 1) return "Корзина";
    else if (this.step === 2) return "Оформление заказа";
    else return "Заказ оформлен";
  }

  // BASE
  async show() {
    this.isDialogVisible = true;
  }

  @WithLoadingAnimation
  async onCancel() {
    if (this.step === 3) {
      return window.location.reload();
    }

    this.hideDialog();
  }
  hideDialog() {
    this.isDialogVisible = false;
  }
  onNextStep() {
    this.step++;
  }
  onBackPressed() {
    if (this.step === 1) return this.hideDialog();
    else this.step--;
  }

  // FUNCTIONAL
  onIncrementCount(product: Product, selection: ProductPrice) {
    selection.userSelectionCount++;
    product.overallUserSelectionCount++;
  }
  onDecrementCount(product: Product, selection: ProductPrice) {
    selection.userSelectionCount--;
    product.overallUserSelectionCount--;
  }
  async onConfirm(userContacts: UserContactsDto) {
    await ProductsService.sendOrder({ totalCount: this.overallPrice, items: this.selectedItems }, userContacts);

    this.onNextStep();
  }
}
</script>

<style lang="scss">
.counter {
  border: 1px solid gray;
  border-radius: 5px;
}

.basket__container {
  max-width: 600px;
  margin: auto;
}
</style>
