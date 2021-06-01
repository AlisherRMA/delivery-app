<template>
  <v-dialog v-model="isVisible" max-width="600">
    <v-card class="pa-4" v-if="item">
      <v-text-field label="Цена" type="number" v-model.number="item.price"></v-text-field>
      <v-text-field label="Вес" type="number" v-model.number="item.weight"></v-text-field>
      <v-switch
        :disabled="cannotSetDefaultPrice"
        v-model="item.is_default"
        hint="Для данного товара уже задана цена по умолчанию"
        :persistent-hint="cannotSetDefaultPrice"
        label="Является основной ценой"
      ></v-switch>

      <v-btn class="full-width my-2" color="primary" @click="onSubmit">Применить</v-btn>
      <v-btn class="full-width" @click="onClose" color="primary" outlined>Отмена</v-btn>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { ProductPriceBase } from "../../@types/product-price.type";
import { ProductsManagementService } from "../../api/products-management.service";

/** Edits/creates a price for an existing product */
@Component
export default class EditPriceDialog extends Vue {
  @Prop({ default: false, type: Boolean })
  private isDefaultPriceSet: boolean;

  @Prop({ default: false, type: Boolean })
  readonly isNew: boolean;

  item: Nullable<ProductPriceBase> = null;

  isVisible = false;

  get cannotSetDefaultPrice() {
    return this.isDefaultPriceSet && this.item?.is_default == 0;
  }

  show(payload: ProductPriceBase) {
    this.item = { ...payload };
    this.item.is_default = payload.is_default === 1;
    this.isVisible = true;
  }

  onClose() {
    this.isVisible = false;
  }

  async onSubmit() {
    if (this.isNew) await ProductsManagementService.createPrice(this.item as ProductPriceBase);
    else await ProductsManagementService.updatePrice(this.item as ProductPriceBase);
    this.isVisible = false;
    this.clear();
    this.$emit("onPricesUpdated");
  }

  clear() {
    this.item = null;
  }
}
</script>

<style lang="scss"></style>
