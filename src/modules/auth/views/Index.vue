<template>
  <section class="abs-center signin-card">
    <v-card class="full-width pa-4">
      <div class="text-center app-label-lg mb-8">Вход в систему</div>

      <v-form v-model="isFormValid" ref="formRef">
        <v-text-field label="Email" v-model="email" outlined prepend-inner-icon="mdi-account-circle"></v-text-field>
        <v-text-field label="Пароль" v-model="password" type="password" :rules="[rules.required]" outlined prepend-inner-icon="mdi-lock-outline"></v-text-field>
        <v-btn class="full-width mt-4" color="primary" :disabled="isFormValid" height="40px">Войти</v-btn>
      </v-form>
    </v-card>
  </section>
</template>

<script lang="ts">
import FormValidator from "@/mixins/FormValidator";
import { Component } from "vue-property-decorator";

@Component
export default class extends FormValidator {
  email = "";
  password = "";

  formRef = "formRef";

  isFormValid = false;
}
</script>

<style lang="scss">
.signin-card {
  box-sizing: border-box;
  width: 94%;
  max-width: 600px;
}
</style>
