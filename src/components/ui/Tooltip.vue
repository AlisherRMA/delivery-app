<template>
  <v-tooltip :disabled="!text ? true : false" top>
    <template v-slot:activator="{ on }">
      <span style="line-height: initial;" v-on="on">
        <slot></slot>
      </span>
    </template>
    <span v-html="text" />
  </v-tooltip>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Tooltip extends Vue {
  @Prop()
  private text: string;
}
</script>

<style lang="scss">
#tooltip-span {
  line-height: initial;
}
</style>
