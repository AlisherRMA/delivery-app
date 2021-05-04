<template>
  <div>
    <v-dialog v-model="isDialogVisible" fullscreen hide-overlay>
      <v-card elevation="1" class="pa-4">
        <h1 class="text-center">Корзина</h1>
        <div v-for="(item, i) in selectedItems" :key="i">
          <v-divider></v-divider>
          <div class="app-label-md bold">{{ i + 1 }}. {{ item.product_name }}</div>
          <v-row class="my-0 mx-2">
            <v-col cols="4">
              <div><v-img :src="item.image_link" height="50px" width="60px"></v-img></div>
            </v-col>
            <v-col cols="8">
              <div v-for="(selection, i) in Object.values(item.selection)" :key="i">
                <div v-if="selection.count">
                  <span class="primary--text">{{ selection.count }}x</span> {{ selection.weight }} гр.
                </div>
              </div>
            </v-col>
          </v-row>
          <v-divider></v-divider>
        </div>

        <!-- <v-data-table :items="selectedItems" :headers="headers" disable-sort hide-default-footer>
            <template #data>
              <tr>
                asdas
              </tr>
            </template>
          </v-data-table> -->

        <v-card-actions>
          <v-btn @click="onCancel">Отмена</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { BasketModule } from "../store/basket.module";

@Component
export default class ApproveIntersectingRequestDialog extends Vue {
  isDialogVisible = false;

  get selectedItems() {
    return BasketModule.selectedDishes;
  }

  get headers() {
    return [{ text: "Название", value: "product_name" }];
  }

  async show() {
    this.isDialogVisible = true;
  }

  onConfirm() {
    this.hideDialog();
  }

  onCancel() {
    this.hideDialog();
  }
  hideDialog() {
    this.isDialogVisible = false;
  }
}
</script>

<style lang="scss"></style>
