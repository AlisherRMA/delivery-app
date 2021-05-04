<template>
  <v-card class="mx-auto" max-width="800">
    <v-expand-transition>
      <div v-show="isExpanded" class="pointer expanded-image-container" @click="isExpanded = !isExpanded">
        <v-img :src="product.image_link" height="250px" style="border-top-left-radius:5px; border-top-right-radius:5px;"></v-img>
      </div>
    </v-expand-transition>

    <section class="d-flex dish pointer" v-ripple :class="{ left_border: overallCount > 0 }" @click="isExpanded = !isExpanded">
      <v-col :cols="isExpanded ? 12 : 7">
        <div class="d-flex flex-column dish__info ml-3">
          <p class="app-label-md bold">
            <span v-if="overallCount" class="primary--text">{{ overallCount }}x</span> {{ product.product_name }}
          </p>
          <div class="dish__description"><ReadMore :text="product.description || ''" :maxChars="isExpanded ? 9999 : 60" /></div>
          <!-- <span class="lightBlue--text">{{ dish.price }} ₸</span> -->
        </div>
      </v-col>
      <v-col cols="5" v-show="!isExpanded">
        <div class="dish__image-container" v-show="!isExpanded">
          <v-img :src="product.image_link" max-height="100%"></v-img>
        </div>
      </v-col>
    </section>

    <v-expand-transition>
      <div v-show="isExpanded">
        <v-divider></v-divider>
        <div v-for="(price, i) in product.prices" :key="i">
          <div class="pa-4 d-flex justify-space-between align-center">
            <v-col cols="4" class="d-flex pr-0">
              <div class="app-label-sm"><span class="bold">Вес</span>: {{ price.weight }} гр</div>
            </v-col>
            <v-col cols="2" class="px-0">
              <div class="app-label-sm lightBlue--text">{{ price.price }} ₸</div>
            </v-col>

            <div>
              <v-btn color="primary" :large="!isMobile" :small="isMobile" outlined depressed @click="onDecrmentCount(i)"
                ><v-icon>mdi-minus-thick</v-icon></v-btn
              >
              <span v-if="selection[i]"> {{ selection[i].count }} </span>
              <v-btn color="primary" :large="!isMobile" :small="isMobile" outlined depressed @click="onIncrementCount(i)">
                <v-icon>mdi-plus-thick</v-icon>
              </v-btn>
            </div>
          </div>
          <v-divider></v-divider>
        </div>
        <v-divider></v-divider>
        <v-card-text v-if="product.detailedDescription">
          <div v-html="product.detailedDescription"></div>
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ReadMore from "@/components/ui/ReadMore.vue";
import { BasketModule } from "../store/basket.module";
import { Product, SelectedProduct } from "../@types/product.type";

@Component({ components: { ReadMore } })
export default class extends Vue {
  @Prop()
  private product: Product;

  isExpanded = false;

  overallCount = 0;

  selection = { overallCount: 0 };

  firstSelectionCount = 0;
  secondSelectionCount = 0;
  thirdSelectionCount = 0;

  get isMobile() {
    return this.$vuetify.breakpoint.xs;
  }

  onExpandClick() {
    this.isExpanded = !this.isExpanded;
  }

  get payload(): SelectedProduct {
    return { ...this.product, selection: this.selection, overallCount: this.overallCount };
  }

  mounted() {
    if (this.product.prices?.length) {
      this.product.prices.map((item, index) => {
        this.$set(this.selection, index, { ...item });
        this.selection[index].count = 0;
      });
    }
  }

  onAddToOrder() {
    this.overallCount = 1;
    BasketModule.addToSelectedItems(this.payload);
  }

  onIncrementCount(selectionIndex: number) {
    this.overallCount++;
    this.selection[selectionIndex].count++;
    BasketModule.addToSelectedItems(this.payload);
  }

  onDecrmentCount(selectionIndex: number) {
    this.overallCount--;
    this.selection[selectionIndex].count--;
    BasketModule.removeFromSelectedItems(this.payload);
  }
}
</script>

<style lang="scss">
.dish {
  padding: 10px;

  &__description {
    @include respond(phone) {
      // max-width: 150px;
    }
  }

  &__image-container {
    max-width: 300px;

    margin-left: auto;

    @include respond(phone) {
      max-width: 60px;
      max-height: 50px;
    }

    & > * {
      border-radius: 5px;
    }
  }

  .image__hidden {
    opacity: 0;
  }
}

.left_border {
  border-left: 6px solid $secondary;
}

.expanded-image-container {
  @include respond(phone) {
    max-width: 96vw;
  }
}
</style>
