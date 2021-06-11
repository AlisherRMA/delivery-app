<template>
  <div>
    <div class="my-2 ml-1">
      <v-btn color="lightBlue" class="white--text" @click="showAddDialog">Добавить город</v-btn>
      <v-btn color="lightBlue" class="white--text ml-2" @click="isEditOrderMode = true">Изменить порядок</v-btn>
    </div>
    <v-data-table
      :headers="headers"
      :items="citiesSorted"
      mobile-breakpoint="md"
      :footer-props="{
        'items-per-page-options': [isEditOrderMode ? 100 : 10],
      }"
    >
      <template v-slot:[`item.name`]="{ item }">
        {{ item.name }}
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-btn icon x-small v-if="!isEditOrderMode"><v-icon @click="showEditDialog(item)">mdi-pencil</v-icon></v-btn>
        <v-btn icon x-small class="ml-1" v-if="!isEditOrderMode"><v-icon @click="showDeleteDialog(item)">mdi-delete</v-icon></v-btn>

        <v-btn icon v-if="isEditOrderMode" @click="onOrderMovedToTheTop(item)"><v-icon>mdi-arrow-up</v-icon></v-btn>
        <v-btn icon v-if="isEditOrderMode" @click="onOrderMovedToTheBottom(item)"><v-icon>mdi-arrow-down</v-icon></v-btn>
      </template>
    </v-data-table>

    <div v-if="isEditOrderMode" class="mt-3">
      <v-btn color="primary" class="px-10" @click="onSaveCitiesOrder">Сохранить</v-btn>
      <v-btn color="primary" class="px-10 ml-3" outlined @click="isEditOrderMode = false">Отмена</v-btn>
    </div>

    <EditCities ref="editCitiesRef" :isNew="isNew" @onUpdate="onUpdate" />
    <ConfirmDialog ref="deleteDialogRef" color="error" text="Вы действительно хотите удалить указанный город?" />
  </div>
</template>

<script lang="ts">
import { City } from "@/modules/dishes/@types/city.type";
import { DataTableHeader } from "vuetify/types";
import { Component, Prop, Vue } from "vue-property-decorator";

import EditCities from "./edit/EditCity.vue";
import ConfirmDialog from "@/components/ui/dialogs/ConfirmDialog.vue";

import { ProductsManagementService } from "../api/products-management.service";

@Component({ components: { EditCities, ConfirmDialog } })
export default class CitiesManagement extends Vue {
  @Prop()
  private cities: City[];

  $refs: {
    editCitiesRef: EditCities;
    deleteDialogRef: ConfirmDialog;
  };

  isEditOrderMode = false;
  isNew = false;

  get headers(): DataTableHeader[] {
    const headers = [{ text: "Город", value: "name" }];
    if (!this.isEditOrderMode) headers.push({ text: "Стоимость", value: "delivery_price" });
    headers.push({ text: "Действия", value: "actions" });
    return headers;
  }

  showEditDialog(city: City) {
    this.isNew = false;
    this.$refs.editCitiesRef.show(city);
  }

  showAddDialog() {
    this.isNew = true;
    this.$refs.editCitiesRef.show();
  }

  async showDeleteDialog(city: City) {
    const isDeleted = await this.$refs.deleteDialogRef.show();
    if (!isDeleted) return;
    await ProductsManagementService.deleteCity(city.id);
    this.$emit("onCitiesUpdated");
  }

  async onUpdate(payload) {
    await ProductsManagementService.updateCity(payload);
    this.$emit("onCitiesUpdated");
  }

  onOrderMovedToTheTop(group: City) {
    if (group.city_sort_number! <= 1) return;

    const swapableGroup = this.cities.find(iterable => iterable.city_sort_number === group.city_sort_number! - 1);
    if (swapableGroup && swapableGroup.city_sort_number) swapableGroup.city_sort_number = group.city_sort_number;
    if (group.city_sort_number) group.city_sort_number--;
  }

  onOrderMovedToTheBottom(group: City) {
    const swapableGroup = this.cities.find(iterable => iterable.city_sort_number === group.city_sort_number! + 1);
    if (swapableGroup && swapableGroup.city_sort_number) swapableGroup.city_sort_number = group.city_sort_number;
    if (group.city_sort_number) group.city_sort_number++;
  }

  get citiesSorted() {
    return this.cities.sort(({ city_sort_number: a }, { city_sort_number: b }) => (a as number) - (b as number));
  }

  async onSaveCitiesOrder() {
    await ProductsManagementService.updateCitiesOrder(this.cities);
    this.isEditOrderMode = false;
  }
}
</script>

<style lang="scss"></style>
