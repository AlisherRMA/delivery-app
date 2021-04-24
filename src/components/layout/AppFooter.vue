<template>
  <footer id="app-footer" class="primary"></footer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class AppFooter extends Vue {}
</script>

<style lang="scss" scoped>
#app-footer {
  height: 100px;
}
</style>
