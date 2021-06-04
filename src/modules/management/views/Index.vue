<template>
  <div class="pa-6">
    <v-tabs v-model="tab">
      <v-tab v-for="tab in tabs" :key="tab">{{ tab }}</v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item> <ProductsManagement :products="products" @onProductsUpdated="onProductsUpdated" /> </v-tab-item>
      <v-tab-item> <GroupsManagement :groups="groups" @onGroupsUpdated="onGroupsUpdated" /> </v-tab-item>
      <v-tab-item> <Cities :cities="cities" @onCitiesUpdated="onCitiesUpdated" /> </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import GroupsManagement from "../components/Groups.vue";
import ProductsManagement from "../components/Products.vue";
import Cities from "../components/Cities.vue";

import { ProductsManagementService } from "../api/products-management.service";
import { Category, Product } from "@/modules/dishes/@types/product.type";
import { CitiesModule } from "@/modules/dishes/store/cities.module";

@Component({ components: { GroupsManagement, ProductsManagement, Cities } })
export default class Management extends Vue {
  tab = 0;
  get tabs() {
    return ["Товары", "Группы", "Доставка"];
  }

  products: Product[] = [];
  groups: Category[] = [];

  async mounted() {
    // if (!this.productsGroups?.length) await BasketModule.getProductsList();
    // console.log(this.productsGroups);
    await this.getProducts();
    await this.getGroups();
    await this.getCities();
  }

  onGroupsUpdated() {
    this.getGroups();
  }

  async onProductsUpdated() {
    await this.getProducts();
  }

  async onCitiesUpdated() {
    await this.getCities();
  }

  async getProducts() {
    this.products = await ProductsManagementService.getProducts();
    this.products.map((product, i) => {
      if (!product.price_sort_number) product.price_sort_number = i + 1;
    });
  }

  async getGroups() {
    this.groups = await ProductsManagementService.getGroups();
    this.groups.map((group, i) => {
      if (!group.group_sort_number) group.group_sort_number = i + 1;
    });
  }

  async getCities() {
    await CitiesModule.getCities();
  }

  get cities() {
    return CitiesModule.cities;
  }
}
</script>

<style lang="scss"></style>
