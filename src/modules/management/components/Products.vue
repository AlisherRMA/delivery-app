<template>
  <section class="pa-2">
    <div>
      <v-btn color="lightBlue" class="white--text" @click="onAddNewItem">Добавить товар</v-btn>
      <v-btn color="lightBlue" class="white--text ml-2" @click="isEditOrderMode = true">Изменить порядок</v-btn>
    </div>
    <!-- <div class="mt-2">
    </div> -->
    <div v-if="products && products.length">
      <v-data-table
        :headers="headers"
        :items="sortedArray"
        mobile-breakpoint="md"
        :footer-props="{
          'items-per-page-options': [isEditOrderMode ? 100 : 10],
        }"
      >
        <template #item="{item}">
          <tr>
            <!-- <td>{{ item.category_name }}</td> -->
            <td>{{ item.product_name }}</td>

            <td v-if="isEditOrderMode">
              <v-btn icon v-if="isEditOrderMode" @click="onOrderMovedToTheTop(item)"><v-icon>mdi-arrow-up</v-icon></v-btn>
              <v-btn icon v-if="isEditOrderMode" @click="onOrderMovedToTheBottom(item)"><v-icon>mdi-arrow-down</v-icon></v-btn>
            </td>
            <td v-else>
              <v-btn icon x-small><v-icon @click="onClickOnRow(item)">mdi-pencil</v-icon></v-btn>
              <v-btn icon x-small><v-icon @click="showDeleteDialog(item)">mdi-delete</v-icon></v-btn>
            </td>
          </tr>
        </template>
      </v-data-table>

      <div v-if="isEditOrderMode" class="mt-3">
        <v-btn color="primary" class="px-10" @click="onSaveProductsOrder">Сохранить</v-btn>
        <v-btn color="primary" class="px-10 ml-3" outlined @click="isEditOrderMode = false">Отмена</v-btn>
      </div>

      <ConfirmDialog
        ref="deleteDialogRef"
        color="error"
        :text="`Вы действительно хотите удалить товар ${selectedProduct ? selectedProduct.product_name : ''}?`"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { Product } from "@/modules/dishes/@types/product.type";
import { DataTableHeader } from "vuetify/types";
import { Component, Prop, Vue } from "vue-property-decorator";

import ConfirmDialog from "@/components/ui/dialogs/ConfirmDialog.vue";
import { ProductsManagementService } from "../api/products-management.service";

@Component({ components: { ConfirmDialog } })
export default class ProductsManagement extends Vue {
  @Prop()
  private products: Product[];

  selectedProduct: Nullable<Product> = null;
  isEditOrderMode = false;

  $refs: {
    deleteDialogRef: ConfirmDialog;
  };

  get headers(): DataTableHeader[] {
    return [
      // { text: "Группа", value: "category_name" },
      { text: "Название", value: "product_name" },
      { text: "Действия", value: "actions" },
    ];
  }

  onClickOnRow(item: Product) {
    this.$router.push({ name: "EditProduct", query: { productId: item.id.toString() } });
  }

  onAddNewItem() {
    this.$router.push({ name: "EditProduct", query: { isNew: String(true) } });
  }

  async showDeleteDialog(item: Product) {
    this.selectedProduct = item;
    const isDeleted = await this.$refs.deleteDialogRef.show();
    this.selectedProduct = null;
    if (!isDeleted) return;
    await ProductsManagementService.deleteProduct(item.id);
    this.$emit("onProductsUpdated");
  }

  onOrderMovedToTheTop(group: Product) {
    if (group.price_sort_number! <= 1) return;

    const swapableGroup = this.products.find(iterable => iterable.price_sort_number === group.price_sort_number! - 1);
    if (swapableGroup && swapableGroup.price_sort_number) swapableGroup.price_sort_number = group.price_sort_number;
    if (group.price_sort_number) group.price_sort_number--;
  }

  onOrderMovedToTheBottom(group: Product) {
    const swapableGroup = this.products.find(iterable => iterable.price_sort_number === group.price_sort_number! + 1);
    if (swapableGroup && swapableGroup.price_sort_number) swapableGroup.price_sort_number = group.price_sort_number;
    if (group.price_sort_number) group.price_sort_number++;
  }

  get sortedArray() {
    return this.products.sort(({ price_sort_number: a }, { price_sort_number: b }) => (a as number) - (b as number));
  }

  async onSaveProductsOrder() {
    await ProductsManagementService.updateProductsOrder(this.products);
    this.isEditOrderMode = false;
  }
}
</script>

<style lang="scss"></style>
