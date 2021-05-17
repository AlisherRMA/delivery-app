<template>
  <section>
    <v-btn color="lightBlue" @click="onAddItem">Добавить позицию</v-btn>
    <v-data-table :headers="headers" :items="prices" disable-sort mobile-breakpoint="md">
      <template v-slot:[`item.is_default`]="{ item }"> {{ item.is_default == 0 ? "Нет" : "Да" }} </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-btn @click="onEditItem(item)" icon x-small><v-icon>mdi-pencil</v-icon></v-btn>
        <v-btn @click="onDeleteItem(item)" icon x-small><v-icon>mdi-delete</v-icon></v-btn>
      </template>
    </v-data-table>

    <ConfirmDialog
      :text="`Вы действительно хотите удалить позицию с весом ${selectedItem ? selectedItem.weight : ''} и с ценой ${selectedItem ? selectedItem.price : ''}`"
      ref="confirmDialogRef"
      color="error"
    />
    <EditPriceDialog ref="editPriceRef" :isDefaultPriceSet="isDefaultPriceSet" @onPricesUpdated="onPricesUpdated" :isNew="dialogMode === 'new'" />
    <AddPriceToNewProduct
      ref="addPriceToNewProductRef"
      :isDefaultPriceSet="isDefaultPriceSet"
      @onPricesAddedToNewProduct="onPricesAddedToNewProduct"
      @onPriceUpdatedOnNewProduct="onPriceUpdatedOnNewProduct"
      :isEditMode="dialogMode === 'edit'"
    />
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { ProductPriceBase } from "../../@types/product-price.type";

import ConfirmDialog from "@/components/ui/dialogs/ConfirmDialog.vue";
import EditPriceDialog from "./EditPriceDialog.vue";
import AddPriceToNewProduct from "./AddPriceToNewProduct.vue";
import { ProductsManagementService } from "../../api/products-management.service";

@Component({ components: { ConfirmDialog, EditPriceDialog, AddPriceToNewProduct } })
export default class EditPrices extends Vue {
  @Prop({ required: true })
  private prices: ProductPriceBase[];

  @Prop()
  private productId: number;

  @Prop({ default: false })
  readonly isNew: boolean;

  $refs: {
    confirmDialogRef: ConfirmDialog;
    editPriceRef: EditPriceDialog;
    addPriceToNewProductRef: AddPriceToNewProduct;
  };

  selectedItem: Nullable<ProductPriceBase> = null;

  dialogMode = "edit";

  get headers() {
    return [
      { text: "Цена", value: "price" },
      { text: "Вес", value: "weight" },
      { text: "Основная цена", value: "is_default" },
      { text: "Действия", value: "actions" },
    ];
  }

  get isDefaultPriceSet() {
    return this.prices.some(item => item.is_default == 1);
  }

  onEditItem(item) {
    this.dialogMode = "edit";

    if (this.isNew) return this.$refs.addPriceToNewProductRef.show(item);
    this.$refs.editPriceRef.show(item);
  }

  onAddItem() {
    this.dialogMode = "new";
    const payload: ProductPriceBase = {
      discount: 0,
      is_default: 0,
      price: 0,
      price_id: null,
      product_id: this.productId ? this.productId : ((null as unknown) as number),
      weight: 0,
    };
    if (this.isNew) return this.$refs.addPriceToNewProductRef.show(payload);
    else this.$refs.editPriceRef.show(payload);
  }

  async onDeleteItem(item: ProductPriceBase) {
    this.selectedItem = item;
    const isConfirmed = await this.$refs.confirmDialogRef.show();
    this.selectedItem = null;
    if (!isConfirmed) return;
    if (this.isNew) {
      const index = this.prices.findIndex(iterable => iterable.price_id == item.price_id);
      this.prices.splice(index, 1);
    } else {
      await ProductsManagementService.deletePrice(item.price_id as number);
      this.onPricesUpdated();
    }
  }

  onPricesUpdated() {
    this.$emit("onPricesUpdated");
  }

  onPricesAddedToNewProduct(item: ProductPriceBase) {
    this.prices.push(item);
  }

  onPriceUpdatedOnNewProduct(item: ProductPriceBase) {
    const index = this.prices.findIndex(iterable => iterable.price_id == item.price_id);
    this.$set(this.prices, index, item);
  }
}
</script>

<style lang="scss"></style>
