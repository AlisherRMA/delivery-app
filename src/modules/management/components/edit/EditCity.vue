<template>
  <v-dialog v-model="isVisible" max-width="600">
    <v-card class="pa-6">
      <v-form :ref="formRef" lazy-validation>
        <v-text-field label="Название города" v-model="name" :rules="[rules.required]" validate-on-blur></v-text-field>
        <v-text-field label="Цена за доставку" autocomplete="off" v-model.number="delivery_price" :rules="[rules.required]" validate-on-blur></v-text-field>
      </v-form>

      <div class="mt-4 d-flex justify-space-around">
        <v-btn color="primary" outlined @click="onClose">Отмена</v-btn>
        <v-btn color="primary" @click="onConfirm">{{ isNew ? "Создать" : "Изменить" }}</v-btn>
      </div>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Prop } from "vue-property-decorator";
import FormValidator from "@/mixins/FormValidator";
import { City } from "@/modules/dishes/@types/city.type";

@Component
export default class EditCities extends FormValidator {
  @Prop({ type: Boolean, default: true })
  private isNew: boolean;

  formRef = "formRef";

  isVisible = false;

  item: Nullable<City> = null;
  name: Nullable<string> = null;
  delivery_price = 2000;

  show(item?: City) {
    this.isVisible = true;
    this.name = item?.name as string;
    if (item?.delivery_price) this.delivery_price = item.delivery_price as number;

    this.item = item as City;
  }

  onConfirm() {
    if (!this.validateForm()) return;

    this.$emit("onUpdate", { name: this.name, delivery_price: this.delivery_price, id: this.item?.id || null });

    this.onClose();
  }

  async onClose() {
    await this.resetForm();
    this.name = null;
    this.isVisible = false;
  }
}
</script>

<style lang="scss"></style>
