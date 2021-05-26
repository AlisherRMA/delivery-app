<template>
  <div class="mx-auto" max-width="800">
    <v-expand-transition>
      <div v-show="isExpanded" class="pointer expanded-image-container" @click="isExpanded = !isExpanded">
        <v-img :src="product.image_link" max-width="780px" height="250px" style="border-top-left-radius:5px; border-top-right-radius:5px;"></v-img>
      </div>
    </v-expand-transition>

    <v-divider></v-divider>

    <section
      class="d-flex dish pointer align-center"
      v-ripple
      :class="{ left_border: product.overallUserSelectionCount > 0 }"
      @click="isExpanded = !isExpanded"
    >
      <v-col :cols="isExpanded ? 12 : 9" class="px-0 pb-0">
        <div class="d-flex flex-column dish__info ml-3" style="min-height: 70px;">
          <p class="app-label-md bold">
            <span v-if="product.overallUserSelectionCount" class="primary--text">{{ product.overallUserSelectionCount }}x</span> {{ product.product_name }}
          </p>
          <div class="dish__description"><ReadMore :text="product.description || ''" :maxChars="isExpanded ? 9999 : 100" class="darkGrey--text" /></div>
          <div class="d-flex" v-if="defaultPrice">
            <div class="lightBlue--text app-label-sm">{{ defaultPrice }} ₸</div>
            <v-icon :class="{ rotate: isExpanded }" class="mx-auto">mdi-chevron-down</v-icon>
          </div>
        </div>
      </v-col>
      <v-col cols="3" class="px-0 pt-0" v-show="!isExpanded">
        <div class="dish__image-container d-flex align-center" v-show="!isExpanded">
          <v-img :src="product.image_link" max-height="100%"></v-img>
        </div>
      </v-col>
    </section>

    <v-expand-transition>
      <div v-show="isExpanded">
        <v-divider></v-divider>
        <div v-for="(price, i) in product.prices" :key="i">
          <div class="d-flex justify-space-between align-center">
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
        <div class="pb-6"></div>
      </div>
    </v-expand-transition>
  </div>
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

  get defaultPrice() {
    if (this.product.prices.length) {
      const price = this.product.prices.find(price => price.is_default === 1);
      // if there's default price
      if (price && price.id) return price.price;
      // otherwise return 1st as default
      else return this.product.prices[0].price;
    }
    return null;
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
      max-width: 90px;
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
    max-width: 95vw;
  }
}

.expand-transition-enter-active,
.expand-transition-leave-active {
  transition-duration: 0.6s !important;
}
</style>
