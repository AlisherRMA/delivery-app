<template>
  <section class="pa-2">
    <div>
      <v-btn color="lightBlue" class="white--text" @click="onAddNewItem">Добавить новый товар</v-btn>
    </div>
    <div v-if="products && products.length">
      <v-data-table :headers="headers" :items="products" mobile-breakpoint="md">
        <template #item="{item}">
          <tr>
            <!-- <td>{{ item.category_name }}</td> -->
            <td>{{ item.product_name }}</td>
            <td>
              <v-btn icon x-small><v-icon @click="onClickOnRow(item)">mdi-pencil</v-icon></v-btn>
              <v-btn icon x-small><v-icon @click="showDeleteDialog(item)">mdi-delete</v-icon></v-btn>
            </td>
          </tr>
        </template>
      </v-data-table>

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

import ExpansionPanel from "../../../components/ui/ExpansionPanel.vue";
import ConfirmDialog from "@/components/ui/dialogs/ConfirmDialog.vue";
import { ProductsManagementService } from "../api/products-management.service";

@Component({ components: { ExpansionPanel, ConfirmDialog } })
export default class ProductsManagement extends Vue {
  @Prop()
  private products: Product[];

  selectedProduct: Nullable<Product> = null;

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
}
</script>

<style lang="scss"></style>
