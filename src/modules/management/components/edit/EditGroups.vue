<template>
  <v-dialog v-model="isVisible" max-width="600">
    <v-card class="pa-6">
      <v-form :ref="formRef" lazy-validation>
        <v-text-field label="Название группы" v-model="name" :rules="[rules.required]" validate-on-blur></v-text-field>
      </v-form>

      <div class="mt-4 d-flex justify-space-around">
        <v-btn color="primary" outlined @click="onClose">Отмена</v-btn>
        <v-btn color="primary" @click="onConfirm">{{ isNew ? "Создать" : "Изменить" }}</v-btn>
      </div>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Category } from "@/modules/dishes/@types/product.type";
import FormValidator from "@/mixins/FormValidator";
import { wait } from "@/utils";

@Component
export default class EditGroups extends FormValidator {
  @Prop({ type: Boolean, default: true })
  private isNew: boolean;

  formRef = "formRef";

  isVisible = false;

  item: Nullable<Category> = null;
  name: Nullable<string> = null;

  show(item?: Category) {
    this.isVisible = true;
    this.name = item?.name as string;
    this.item = item as Category;
  }

  onConfirm() {
    if (!this.validateForm()) return;
    if (this.isNew) {
      this.$emit("onGroupAdded", this.name);
    } else this.$emit("onGroupEdited", { category_id: this.item?.category_id, name: this.name });

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
