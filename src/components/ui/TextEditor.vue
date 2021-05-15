<template>
  <div id="app">
    <vue-editor v-model="content"></vue-editor>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

import { VueEditor } from "vue2-editor";

@Component({ components: { VueEditor } })
export default class ProductsManagement extends Vue {
  @Prop()
  private value: string;

  content = "<p>Some initial content</p>";

  mounted() {
    this.content = this.value;
  }

  @Watch("content")
  onContentChange(content) {
    this.$emit("input", content);
  }
}
</script>
