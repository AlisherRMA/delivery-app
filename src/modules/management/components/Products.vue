<template>
  <section class="pa-2">
    <div>
      <v-btn color="lightBlue" class="white--text">Добавить новый товар</v-btn>
    </div>
    <div v-if="products && products.length">
      <v-data-table :headers="headers" :items="products" mobile-breakpoint="md">
        <template #item="{item}">
          <tr @click="onClickOnRow(item)" class="pointer">
            <td>{{ item.category_name }}</td>
            <td>{{ item.product_name }}</td>
          </tr>
        </template>
      </v-data-table>
    </div>
  </section>
</template>

<script lang="ts">
import { Product } from "@/modules/dishes/@types/product.type";
import { DataTableHeader } from "vuetify/types";
import { Component, Prop, Vue } from "vue-property-decorator";

import ExpansionPanel from "../../../components/ui/ExpansionPanel.vue";

@Component({ components: { ExpansionPanel } })
export default class ProductsManagement extends Vue {
  @Prop()
  private products: Product[];

  get headers(): DataTableHeader[] {
    return [
      { text: "Группа", value: "category_name" },
      { text: "Название", value: "product_name" },
    ];
  }

  onClickOnRow(item: Product) {
    this.$router.push({ name: "EditProduct", query: { productId: item.id.toString() } });
  }
}
</script>

<style lang="scss"></style>
