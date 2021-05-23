<template>
  <div class="d-flex full-height">
    <div class="content-wrapper full-width d-flex flex-column">
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
// .content-wrapper {
//   background-color: #f2f2f2;
// }
</style>
