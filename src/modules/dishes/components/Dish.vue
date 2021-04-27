<template>
  <v-card class="mx-auto" max-width="800">
    <v-expand-transition>
      <div v-show="isExpanded" class="pointer expanded-image-container" @click="isExpanded = !isExpanded">
        <v-img :src="dish.image" height="250px" style="border-top-left-radius:5px; border-top-right-radius:5px;"></v-img>
      </div>
    </v-expand-transition>

    <section class="d-flex dish pointer" v-ripple :class="{ left_border: overallCount > 0 }" @click="isExpanded = !isExpanded">
      <v-col :cols="isExpanded ? 12 : 7">
        <div class="d-flex flex-column dish__info ml-3">
          <p class="app-label-md bold">
            <span v-if="overallCount" class="primary--text">{{ overallCount }}x</span> {{ dish.title }}
          </p>
          <div class="dish__description"><ReadMore :text="dish.description" :maxChars="isExpanded ? 9999 : 60" /></div>
          <span class="lightBlue--text">{{ dish.price }} ₸</span>
        </div>
      </v-col>
      <v-col cols="5" v-show="!isExpanded">
        <div class="dish__image-container" v-show="!isExpanded">
          <v-img :src="dish.image" height="100%"></v-img>
        </div>
      </v-col>
    </section>

    <v-expand-transition>
      <div v-show="isExpanded">
        <v-divider></v-divider>
        <div class="pa-6 d-flex justify-space-between align-center">
          <v-col cols="7">
            <div class="app-label-sm d-flex align-center mb-1">
              <v-icon color="primary" class="mr-2">mdi-weight-kilogram</v-icon><span class="bold">Вес</span>: 150 гр
            </div>
            <div class="app-label-sm d-flex align-center mb-1">
              <v-icon color="primary" class="mr-2">mdi-cash-multiple</v-icon><span class="bold">Цена</span>: 1100 ₸
            </div>
            <div class="app-label-sm d-flex align-center mb-1">
              <v-icon color="primary" class="mr-2">mdi-counter</v-icon><span class="bold">Количество</span>: {{ firstSelectionCount }}
            </div>
          </v-col>

          <!-- <v-btn v-if="count < 1" large color="primary" @click="onAddToOrder"><div class="app-label-sm">Добавить в корзину</div> </v-btn> -->
          <div>
            <v-btn color="primary" class="mr-1" :large="!isMobile" :small="isMobile" outlined depressed @click="onDecrmentCount('firstSelectionCount')"
              ><v-icon>mdi-minus-thick</v-icon></v-btn
            >
            <v-btn color="primary" :large="!isMobile" :small="isMobile" outlined depressed @click="onIncrementCount('firstSelectionCount')">
              <v-icon>mdi-plus-thick</v-icon>
            </v-btn>
          </div>
        </div>
        <v-divider></v-divider>
        <div class="pa-6 d-flex justify-space-between align-center">
          <v-col cols="7">
            <div class="app-label-sm d-flex align-center mb-1">
              <v-icon color="primary" class="mr-2">mdi-weight-kilogram</v-icon><span class="bold">Вес</span>: 300 гр
            </div>
            <div class="app-label-sm d-flex align-center mb-1">
              <v-icon color="primary" class="mr-2">mdi-cash-multiple</v-icon><span class="bold">Цена</span>: 2100 ₸
            </div>
            <div class="app-label-sm d-flex align-center mb-1">
              <v-icon color="primary" class="mr-2">mdi-counter</v-icon><span class="bold">Количество</span>: {{ secondSelectionCount }}
            </div>
          </v-col>

          <!-- <v-btn v-if="count < 1" large color="primary" @click="onAddToOrder"><div class="app-label-sm">Добавить в корзину</div> </v-btn> -->
          <div>
            <v-btn color="primary" class="mr-1" :large="!isMobile" :small="isMobile" outlined depressed @click="onDecrmentCount('secondSelectionCount')"
              ><v-icon>mdi-minus-thick</v-icon></v-btn
            >
            <v-btn color="primary" :large="!isMobile" :small="isMobile" outlined depressed @click="onIncrementCount('secondSelectionCount')">
              <v-icon>mdi-plus-thick</v-icon>
            </v-btn>
          </div>
        </div>
        <v-divider></v-divider>
        <div class="pa-6 d-flex justify-space-between align-center">
          <v-col cols="7">
            <div class="app-label-sm d-flex align-center mb-1">
              <v-icon color="primary" class="mr-2">mdi-weight-kilogram</v-icon><span class="bold">Вес</span>: 500 гр
            </div>
            <div class="app-label-sm d-flex align-center mb-1">
              <v-icon color="primary" class="mr-2">mdi-cash-multiple</v-icon><span class="bold">Цена</span>: 3500 ₸
            </div>
            <div class="app-label-sm d-flex align-center mb-1">
              <v-icon color="primary" class="mr-2">mdi-counter</v-icon><span class="bold">Количество</span>: {{ thirdSelectionCount }}
            </div>
          </v-col>

          <!-- <v-btn v-if="count < 1" large color="primary" @click="onAddToOrder"><div class="app-label-sm">Добавить в корзину</div> </v-btn> -->
          <div>
            <v-btn color="primary" class="mr-1" :large="!isMobile" :small="isMobile" outlined depressed @click="onDecrmentCount('thirdSelectionCount')"
              ><v-icon>mdi-minus-thick</v-icon></v-btn
            >
            <v-btn color="primary" :large="!isMobile" :small="isMobile" outlined depressed @click="onIncrementCount('thirdSelectionCount')">
              <v-icon>mdi-plus-thick</v-icon>
            </v-btn>
          </div>
        </div>
        <v-divider></v-divider>
        <v-card-text v-if="dish.detailedDescription">
          <div v-html="dish.detailedDescription"></div>
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { IDish, ISelectedDish } from "../@types/dish.type";
import ReadMore from "@/components/ui/ReadMore.vue";
import { BasketModule } from "../store/basket.module";

@Component({ components: { ReadMore } })
export default class extends Vue {
  @Prop()
  private dish: IDish;

  isExpanded = false;

  overallCount = 0;

  firstSelectionCount = 0;
  secondSelectionCount = 0;
  thirdSelectionCount = 0;

  get isMobile() {
    return this.$vuetify.breakpoint.xs;
  }

  onExpandClick() {
    this.isExpanded = !this.isExpanded;
  }

  get payload(): ISelectedDish {
    return { ...this.dish, count: this.overallCount };
  }

  onAddToOrder() {
    this.overallCount = 1;
    BasketModule.addToSelectedItems(this.payload);
  }

  onIncrementCount(counter) {
    this.overallCount++;
    this[counter]++;
    BasketModule.addToSelectedItems(this.payload);
  }

  onDecrmentCount(counter) {
    this.overallCount--;
    this[counter]--;
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
      max-width: 100px;
      max-height: 70px;
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
