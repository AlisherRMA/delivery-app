<template>
  <div class="pa-6">
    <v-tabs v-model="tab">
      <v-tab v-for="tab in tabs" :key="tab">{{ tab }}</v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item> <ProductsManagement :products="products" /> </v-tab-item>
      <v-tab-item> <GroupsManagement :groups="groups" @onGroupsUpdated="onGroupsUpdated" /> </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import GroupsManagement from "../components/Groups.vue";
import ProductsManagement from "../components/Products.vue";
import { ProductsManagementService } from "../api/products-management.service";
import { Product } from "@/modules/dishes/@types/product.type";
import TiptapVue from "@/components/ui/Tiptap.vue";

@Component({ components: { GroupsManagement, ProductsManagement, TiptapVue } })
export default class Management extends Vue {
  tab = 0;
  get tabs() {
    return ["Товары", "Группы"];
  }

  products: Product[] = [];
  groups: any = [];

  async mounted() {
    // if (!this.productsGroups?.length) await BasketModule.getProductsList();
    // console.log(this.productsGroups);
    this.products = await ProductsManagementService.getProducts();
    await this.getGroups();
  }

  onGroupsUpdated() {
    this.getGroups();
  }

  async getGroups() {
    this.groups = await ProductsManagementService.getGroups();
  }
}
</script>

<style lang="scss"></style>
