<template>
  <div>
    <v-dialog v-model="isDialogVisible" fullscreen hide-overlay>
      <v-card elevation="1" class="pa-4">
        <h1 class="text-center">Корзина</h1>
        <!-- ITEMS -->
        <section v-if="selectedItemsCount" class="d-flex flex-column full-height">
          <div v-for="(item, i) in selectedItems" :key="i">
            <div v-for="(selection, i) in Object.values(item.prices)" :key="i">
              <v-expand-transition>
                <div v-if="selection.userSelectionCount">
                  <v-divider></v-divider>
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
                        <span> {{ selection.count }} </span>
                        <v-btn :large="!isMobile" :small="isMobile" rounded icon @click="onDecrementCount(item, selection)">
                          <v-icon>mdi-minus-thick</v-icon>
                        </v-btn>
                      </div>
                    </v-col>
                  </v-row>
                  <v-divider></v-divider>
                </div>
              </v-expand-transition>
            </div>
          </div>
          <!-- OVERALL PRICE -->
          <div class="d-flex pa-3 lightBlue">
            <span class="ml-auto app-label-md bold">Итого: {{ overallPrice }}₸</span>
          </div>
          <div class="mt-auto flex-grow-1">asd</div>
        </section>
        <section v-else class="text-center app-label-md">
          Ваша корзина пуста
        </section>
        <v-card-actions>
          <v-btn class="full-width" outlined @click="onCancel">Отмена</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { BasketModule } from "../store/basket.module";
import { Product, ProductPrice } from "../@types/product.type";

@Component
export default class BasketDialog extends Vue {
  isDialogVisible = false;

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

  async show() {
    this.isDialogVisible = true;
  }

  onIncrementCount(product: Product, selection: ProductPrice) {
    selection.userSelectionCount++;
    product.overallUserSelectionCount++;
  }

  onDecrementCount(product: Product, selection: ProductPrice) {
    selection.userSelectionCount--;
    product.overallUserSelectionCount--;
  }

  onConfirm() {
    this.hideDialog();
  }

  onCancel() {
    this.hideDialog();
  }
  hideDialog() {
    this.isDialogVisible = false;
    this.$forceUpdate();
  }
}
</script>

<style lang="scss">
.counter {
  // position: relative;
  border: 1px solid gray;
  border-radius: 5px;
  // top: -13px;
}
</style>
