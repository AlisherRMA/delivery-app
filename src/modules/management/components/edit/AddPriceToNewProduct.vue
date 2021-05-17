<template>
  <v-dialog v-model="isVisible" max-width="600">
    <v-card class="pa-4" v-if="item">
      NOVAYA
      {{ isEditMode }}
      <v-text-field label="Цена" type="number" v-model.number="item.price" autocomplete="off"></v-text-field>
      <v-text-field label="Вес" type="number" v-model.number="item.weight" autocomplete="off"></v-text-field>
      <v-switch
        :disabled="cannotSetDefaultPrice"
        v-model="item.is_default"
        hint="Для данного товара уже задана цена по умолчанию"
        :persistent-hint="cannotSetDefaultPrice"
        label="Является основной ценой"
      ></v-switch>

      {{ item }}

      <v-btn class="full-width my-2" color="primary" @click="onSubmit">Применить</v-btn>
      <v-btn class="full-width" @click="onClose" color="primary" outlined>Отмена</v-btn>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { ProductPriceBase } from "../../@types/product-price.type";

/** creates a price for a new product */
@Component
export default class AddPriceToNewProduct extends Vue {
  @Prop({ default: false, type: Boolean })
  private isDefaultPriceSet: boolean;
  @Prop({ default: false })
  private isEditMode: boolean;

  item: Nullable<ProductPriceBase> = null;

  isVisible = false;

  get cannotSetDefaultPrice() {
    return this.isDefaultPriceSet && (this.item?.is_default == false || this.item?.is_default == 0);
  }

  show(payload: ProductPriceBase) {
    this.item = { ...payload };
    if (typeof this.item.is_default !== "boolean") this.item.is_default = payload.is_default === 1;
    this.isVisible = true;
  }

  onClose() {
    this.isVisible = false;
  }

  async onSubmit() {
    this.isVisible = false;
    if (this.isEditMode) this.$emit("onPriceUpdatedOnNewProduct", this.item);
    else this.$emit("onPricesAddedToNewProduct", this.item);
    this.clear();
  }

  clear() {
    this.item = null;
  }
}
</script>

<style lang="scss"></style>
