<template>
  <section class="pa-4">
    <v-divider></v-divider>
    <v-form ref="formRef" v-model="isFormValid">
      <div class="app-label-md bold">Способ доставки</div>
      <v-radio-group row v-model="withDelivery" class="mt-0 mb-2" hide-details>
        <v-radio label="Курьер" :value="true"></v-radio>
        <v-radio label="Самовывоз" :value="false"></v-radio>
      </v-radio-group>
      <v-divider></v-divider>

      <v-text-field label="Имя" v-model="name" placeholder="Как мы можем к Вам обращаться?" :rules="[rules.required]"></v-text-field>
      <phone-mask-vue v-model="mobileNumber" :rules="[rules.required]" />

      <v-slide-x-transition>
        <section v-if="withDelivery">
          <v-autocomplete
            label="Выберите город"
            v-model="city"
            :items="cities"
            item-value="name"
            item-text="name"
            class="mt-0 pt-0"
            :rules="[rules.required]"
          ></v-autocomplete>
          <v-text-field v-if="city === 'Другое'" label="Введите название города" class="mt-0 pt-0" v-model="alternativeCity"></v-text-field>
          <v-textarea
            rows="2"
            placeholder="Введите адрес доставки (город, дом, этаж, квартира) и любые примечания"
            v-model="address"
            :rules="[rules.required]"
          ></v-textarea>
        </section>
      </v-slide-x-transition>

      <v-slide-x-transition>
        <section v-if="!withDelivery" class="d-flex align-center">
          <v-icon color="lightBlue" class="mr-2">mdi-information</v-icon> Адрес магазина: Казахстан, г. Алматы, ул. Шевченко 121
        </section>
      </v-slide-x-transition>

      <div v-if="priceForSelectedCity" class="app-label-md text-end bold"><span>Стоимость доставки: </span>{{ priceForSelectedCity }} ₸</div>
      <div v-if="priceForSelectedCity" class="app-label-md text-end bold lightBlue--text"><span>Итого: </span>{{ priceWithDelivery }} ₸</div>
      <v-btn class="full-width mt-3" :disabled="!isFormValid" color="primary" @click="onNextStep">Отправить заказ менеджеру</v-btn>
    </v-form>
  </section>
</template>

<script lang="ts">
import { Component } from "vue-property-decorator";

import PhoneMaskVue from "@/components/ui/masks/PhoneMask.vue";
import FormValidator from "@/mixins/FormValidator";

import { UserContactsDto } from "../@types/order.dto";
import { CitiesModule } from "../store/cities.module";
import { BasketModule } from "../store/basket.module";

@Component({ components: { PhoneMaskVue } })
export default class ConfirmOrder extends FormValidator {
  name = "";
  mobileNumber: string = "";
  city = "";
  alternativeCity: Nullable<string> = null;
  address = "";

  withDelivery = true;

  isFormValid = false;

  formRef = "formRef";

  async mounted() {
    if (!this.cities) await CitiesModule.getCities();
  }

  get cities() {
    return CitiesModule.cities;
  }

  get priceForSelectedCity() {
    if (!this.city) return null;
    const city = this.cities.find(currentCity => currentCity.name == this.city);
    return city?.delivery_price;
  }

  get priceWithDelivery() {
    if (!this.priceForSelectedCity) return null;
    return BasketModule.overallPrice + this.priceForSelectedCity;
  }

  get payload(): UserContactsDto {
    return {
      name: this.name,
      mobileNumber: this.mobileNumber,
      city: this.alternativeCity ? this.alternativeCity : this.city,
      address: this.address,
      priceForSelectedCity: this.priceForSelectedCity as number,
      priceWithDelivery: this.priceWithDelivery as number,
      withDelivery: this.withDelivery,
    };
  }

  onNextStep() {
    if (!this.validateForm()) return;

    this.$emit("onConfirm", this.payload);
  }
}
</script>

<style lang="scss"></style>
