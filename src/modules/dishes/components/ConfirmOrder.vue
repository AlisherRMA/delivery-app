<template>
  <section class="pa-4">
    <v-divider></v-divider>
    <v-form ref="formRef" v-model="isFormValid">
      <v-text-field label="Имя" v-model="name" placeholder="Как мы можем к Вам обращаться?" :rules="[rules.required]"></v-text-field>
      <phone-mask-vue v-model="mobileNumber" :rules="[rules.required]" />
      <v-autocomplete label="Выберите город" v-model="city" :items="cities" class="mt-0 pt-0" :rules="[rules.required]"></v-autocomplete>
      <v-text-field v-if="city === 'Другое'" label="Введите название города" class="mt-0 pt-0" v-model="alternativeCity"></v-text-field>
      <v-textarea rows="2" label="Адрес" v-model="address" :rules="[rules.required]"></v-textarea>
      <v-btn class="full-width" :disabled="!isFormValid" color="primary" @click="onNextStep">Подтвердить заказ</v-btn>
    </v-form>
  </section>
</template>

<script lang="ts">
import { Component } from "vue-property-decorator";

import PhoneMaskVue from "@/components/ui/masks/PhoneMask.vue";
import FormValidator from "@/mixins/FormValidator";

import { UserContactsDto } from "../@types/order.dto";

@Component({ components: { PhoneMaskVue } })
export default class ConfirmOrder extends FormValidator {
  name = "";
  mobileNumber: string = "";
  city = "";
  alternativeCity: Nullable<string> = null;
  address = "";

  isFormValid = false;

  formRef = "formRef";

  get cities() {
    return [
      "Алматы",
      "Нур-Султан",
      "Шыкмент",
      "Актобе",
      "Караганда",
      "Тараз",
      "Павлодар",
      "Семей",
      "Усть-Каменогорск",
      "Кызылорда",
      "Уральск",
      "Костанай",
      "Атырау",
      "Петропавловск",
      "Актау",
      "Темиртау",
      "Кокшетау",
      "Туркестан",
      "Экибастуз",
      "Талдыкорган",
      "Рудный",
      "Жанаозен",
      "Другое",
    ];
  }

  get payload(): UserContactsDto {
    return {
      name: this.name,
      mobileNumber: this.mobileNumber,
      city: this.alternativeCity ? this.alternativeCity : this.city,
      address: this.address,
    };
  }

  onNextStep() {
    if (!this.validateForm()) return;
    this.$emit("onConfirm", this.payload);
  }
}
</script>

<style lang="scss"></style>
