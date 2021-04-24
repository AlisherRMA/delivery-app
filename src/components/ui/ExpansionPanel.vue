<template>
  <v-expansion-panels class="mb-3" :readonly="readonly">
    <v-expansion-panel>
      <v-expansion-panel-header class="label expansion-header">
        <slot name="header">{{ title }}</slot>
        <template v-slot:actions>
          <v-icon>
            $expand
          </v-icon>
        </template>
      </v-expansion-panel-header>
      <v-expansion-panel-content :eager="eager">
        <!-- <v-divider class="mb-3" /> -->
        <div class="mb-3"></div>
        <slot />
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class ExpansionPanel extends Vue {
  @Prop()
  readonly title: string;
  @Prop({ default: false })
  readonly outlined: boolean;
  @Prop({ default: false })
  readonly readonly: boolean;
  @Prop({ default: false })
  readonly eager: boolean;
}
</script>

<style lang="scss" scoped></style>
