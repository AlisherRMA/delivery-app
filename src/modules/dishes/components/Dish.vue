<template>
  <v-card class="mx-auto" max-width="800">
    <v-expand-transition>
      <div v-show="isExpanded" class="pointer expanded-image-container" @click="isExpanded = !isExpanded">
        <v-img :src="dish.image" height="250px" style="border-radius:5px;"></v-img>
      </div>
    </v-expand-transition>

    <section class="d-flex dish pointer" v-ripple :class="{ left_border: count > 0 }" @click="isExpanded = !isExpanded">
      <v-col :cols="isExpanded ? 12 : 7">
        <div class="d-flex flex-column dish__info ml-3">
          <p class="app-label-md bold">
            <span v-if="count" class="primary--text">{{ count }}x</span> {{ dish.title }}
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
          <span> Количество: {{ count }} </span>

          <v-btn v-if="count < 1" large color="primary" @click="onAddToOrder"><div class="app-label-sm">Добавить в корзину</div> </v-btn>
          <div v-else>
            <v-btn color="primary" class="mr-1" large outlined depressed @click="onDecrmentCount"><v-icon>mdi-minus-thick</v-icon></v-btn>
            <v-btn color="primary" large outlined depressed @click="onIncrementCount"> <v-icon>mdi-plus-thick</v-icon> </v-btn>
          </div>
        </div>
        <v-divider></v-divider>
        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed
          making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've
          got to find a way to escape.
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

  count = 0;

  onExpandClick() {
    this.isExpanded = !this.isExpanded;
  }

  get payload(): ISelectedDish {
    return { ...this.dish, count: this.count };
  }

  onAddToOrder() {
    this.count = 1;
    BasketModule.addToSelectedItems(this.payload);
  }

  onIncrementCount() {
    this.count++;
    BasketModule.addToSelectedItems(this.payload);
  }

  onDecrmentCount() {
    this.count--;
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
