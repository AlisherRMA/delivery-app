<template>
  <v-card class="mx-auto" max-width="800">
    <v-expand-transition>
      <div v-show="isExpanded" class="pointer expanded-image-container" @click="isExpanded = !isExpanded">
        <v-img :src="product.image_link" height="250px" style="border-top-left-radius:5px; border-top-right-radius:5px;"></v-img>
      </div>
    </v-expand-transition>

    <section class="d-flex dish pointer" v-ripple :class="{ left_border: product.overallUserSelectionCount > 0 }" @click="isExpanded = !isExpanded">
      <v-col :cols="isExpanded ? 12 : 7">
        <div class="d-flex flex-column dish__info ml-3">
          <p class="app-label-md bold">
            <span v-if="product.overallUserSelectionCount" class="primary--text">{{ product.overallUserSelectionCount }}x</span> {{ product.product_name }}
          </p>
          <div class="dish__description"><ReadMore :text="product.description || ''" :maxChars="isExpanded ? 9999 : 60" /></div>
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
              <span v-if="product.prices && product.prices[i]"> {{ product.prices[i].userSelectionCount }} </span>
              <span v-else class="px-1">0</span>
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
import { Product } from "../@types/product.type";
import { BasketModule } from "../store/basket.module";

@Component({ components: { ReadMore } })
export default class extends Vue {
  @Prop()
  private product: Product;

  // VUEX DATA
  get expandedItems() {
    return BasketModule.expandedItems;
  }
  get isExpanded() {
    return this.expandedItems.includes(this.product.id);
  }
  set isExpanded(_val) {
    if (this.expandedItems.includes(this.product.id)) BasketModule.clearExpandedItems();
    else BasketModule.setExpandedItems(this.product.id);
  }

  // FUNCTIONAL
  onIncrementCount(selectionIndex: number) {
    this.product.overallUserSelectionCount++;
    this.product.prices[selectionIndex].userSelectionCount++;
  }
  onDecrmentCount(selectionIndex: number) {
    this.product.overallUserSelectionCount--;
    this.product.prices[selectionIndex].userSelectionCount--;
  }

  get isMobile() {
    return this.$vuetify.breakpoint.xs;
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
