<template>
  <div class="d-flex full-height">
    <div class="content-wrapper full-width d-flex flex-column">
      <div class="page-banner-text"></div>

      <router-view style="z-index:10"></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class AppMain extends Vue {}
</script>

<style lang="scss" scoped>
.content-wrapper {
  background-color: #f2f2f2;
}

.page-banner-text {
  z-index: 0;
  position: fixed;
  background: $primary;
  width: 60%;

  /* adjustments to snippet */
  top: 0px;
  left: 0px;
  height: 100vh;

  /* this is the code for circle */
  // clip-path: circle(600px at left);
  clip-path: circle(55% at 0 46%);

  @include respond(phone) {
    clip-path: circle(70% at -30% 50%);
  }

  padding-right: 250px;
}
</style>
