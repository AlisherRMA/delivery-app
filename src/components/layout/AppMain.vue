<template>
  <div class="d-flex full-height">
    <div class="content-wrapper full-width d-flex flex-column">
      <v-expand-transition>
        <div v-show="isDesktopSidebarVisible">
          <div class="page-banner-text"></div>
        </div>
      </v-expand-transition>

      <router-view style="z-index:10"></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { ScrollModule } from "@/modules/base/store/scroll.module";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class AppMain extends Vue {
  get isDesktopSidebarVisible() {
    return ScrollModule.isDesktopSidebarVisible;
  }
}
</script>

<style lang="scss" scoped>
.content-wrapper {
  background-color: #f2f2f2;
}

.page-banner-text {
  animation-name: moveInLeft;
  animation-duration: 1s;
  animation-timing-function: ease-out;

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
    // clip-path: circle(70% at -30% 50%);
    clip-path: none;
    background: unset;
  }

  padding-right: 250px;
}
</style>
