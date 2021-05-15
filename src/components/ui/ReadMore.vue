<template>
  <div>
    <p>
      <span v-html="formattedString"> </span>
      <span v-show="text.length > maxChars">
        <v-tooltip bottom open-delay="500">
          <template #activator="{ on, attrs }">
            <button v-bind="attrs" v-on="on" v-if="!isReadMore" @click="isReadMore = true">
              {{ activator }}
            </button>
          </template>
          <span>Развернуть</span>
        </v-tooltip>
      </span>
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  components: {},
})
export default class ReadMore extends Vue {
  @Prop({ required: true })
  readonly text: string;

  @Prop({ default: "..." })
  readonly activator: string;

  @Prop({ default: 100 })
  readonly maxChars: number;

  isReadMore = false;

  get formattedString() {
    if (!this.text) return "";
    let val_container = this.text;
    if (!this.isReadMore && this.text.length > this.maxChars) {
      val_container = val_container.substring(0, this.maxChars) + "  ";
    }
    return val_container;
  }
}
</script>
