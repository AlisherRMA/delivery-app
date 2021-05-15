<template>
  <section v-if="item">
    <div class="app-label-lg text-center mt-4">Редактирование товара</div>
    <v-card class="pa-4 mx-auto" max-width="600">
      <v-divider></v-divider>
      <div>
        <label class="app-label-md lightBlue--text">Название товара</label>
        <v-text-field class="pt-0 mt-0" v-model="item.product_name"></v-text-field>
      </div>

      <v-divider></v-divider>
      <div>
        <div class="d-flex align-center justify-space-between">
          <label class="app-label-md lightBlue--text">Изображение</label>
          <v-btn icon small @click="isImgEditing = true"> <v-icon>mdi-pencil</v-icon> </v-btn>
        </div>
        <v-img v-if="!isImgEditing" :src="item.image_link" style="border-radius: 5px" max-width="500px"></v-img>
        <div v-else>
          <v-textarea label="Вставьте ссылку на изображение" v-model="tempImgLink" :autofocus="isImgEditing" rows="1"></v-textarea>
          <v-img :src="tempImgLink" style="border-radius: 5px" max-width="250px" class="mx-auto"></v-img>
          <v-btn v-show="tempImgLink" color="primary" class="full-width mt-2" @click="onSaveImage">Применить</v-btn>
          <v-btn v-show="tempImgLink" color="primary" outlined class="full-width mt-2" @click="(tempImgLink = null), (isImgEditing = false)">Отмена</v-btn>
        </div>
      </div>

      <v-divider class="mt-2"></v-divider>
      <div>
        <div class="d-flex align-center justify-space-between">
          <label class="app-label-md lightBlue--text">Описание</label>
          <v-btn icon small @click="isDescEditing = true"> <v-icon>mdi-pencil</v-icon> </v-btn>
        </div>

        <div v-if="!isDescEditing">
          <ReadMore :text="item.description" :maxChars="400" />
        </div>
        <div v-else>
          <TextEditor v-model="tempDesc" />
          <v-btn v-show="tempDesc && tempDesc !== `<p>${item.description}</p>`" color="primary" class="full-width mt-2" @click="onSaveDesc">Применить</v-btn>
          <v-btn v-show="tempDesc" color="primary" outlined class="full-width mt-2" @click="(tempDesc = null), (isDescEditing = false)">Отмена</v-btn>
        </div>
      </div>

      <v-divider class="mt-2"></v-divider>
      <div>
        <label class="app-label-md lightBlue--text">Граммаж</label>
        <div>{{ item.description }}</div>
      </div>

      <v-btn v-show="tempDesc && tempDesc !== `<p>${item.description}</p>`" color="primary" class="full-width mt-2" @click="onSaveProduct">
        <v-icon class="mr-2">mdi-content-save-outline</v-icon> Сохранить изменения
      </v-btn>
    </v-card>
  </section>
</template>

<script lang="ts">
import { Product } from "@/modules/dishes/@types/product.type";
import { Component, Vue } from "vue-property-decorator";
import { ProductsManagementService } from "../api/products-management.service";

import TextEditor from "@/components/ui/TextEditor.vue";
import ReadMore from "@/components/ui/ReadMore.vue";

@Component({ components: { TextEditor, ReadMore } })
export default class extends Vue {
  id: Nullable<string> = null;
  item: Nullable<Product> = null;

  isImgEditing = false;
  tempImgLink: Nullable<string> = null;

  isDescEditing = false;
  tempDesc: Nullable<string> = null;

  async mounted() {
    this.id = this.$route.query.productId as string;
    this.item = await ProductsManagementService.getProductById(this.id);
    this.tempDesc = this.item?.description as string;
  }

  onSaveImage() {
    if (this.item) this.item.image_link = this.tempImgLink as string;
    this.isImgEditing = false;
  }

  onSaveDesc() {
    if (this.item) this.item.description = this.tempDesc as string;
    this.isDescEditing = false;
  }

  async onSaveProduct() {
    await ProductsManagementService.updateProduct(this.item as Product);
  }
}
</script>

<style lang="scss"></style>
