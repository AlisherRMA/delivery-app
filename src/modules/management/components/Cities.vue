<template>
  <div>
    <div class="my-2 ml-1">
      <v-btn color="lightBlue" class="white--text" @click="showAddDialog">Добавить город</v-btn>
    </div>
    <v-data-table :headers="headers" :items="cities" mobile-breakpoint="md">
      <template v-slot:[`item.name`]="{ item }">
        {{ item.name }}
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-btn icon x-small><v-icon @click="showEditDialog(item)">mdi-pencil</v-icon></v-btn>
        <v-btn icon x-small class="ml-1"><v-icon @click="showDeleteDialog(item)">mdi-delete</v-icon></v-btn>
      </template>
    </v-data-table>

    <EditCities ref="editCitiesRef" :isNew="isNew" @onUpdate="onUpdate" />
  </div>
</template>

<script lang="ts">
import { City } from "@/modules/dishes/@types/city.type";
import { DataTableHeader } from "vuetify/types";
import { Component, Prop, Vue } from "vue-property-decorator";

import EditCities from "./edit/EditCity.vue";
import { ProductsManagementService } from "../api/products-management.service";

@Component({ components: { EditCities } })
export default class CitiesManagement extends Vue {
  @Prop()
  private cities: City[];

  $refs: {
    editCitiesRef: EditCities;
  };

  isNew = false;

  get headers(): DataTableHeader[] {
    return [
      { text: "Город", value: "name" },
      { text: "Стоимость", value: "delivery_price" },
      { text: "Действия", value: "actions" },
    ];
  }

  showEditDialog(city: City) {
    this.isNew = false;
    this.$refs.editCitiesRef.show(city);
  }

  showAddDialog() {
    this.isNew = true;
    this.$refs.editCitiesRef.show();
  }

  async onUpdate(payload) {
    await ProductsManagementService.updateCity(payload);
    this.$emit("onCitiesUpdated");
  }
}
</script>

<style lang="scss"></style>
