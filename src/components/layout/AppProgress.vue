<template>
  <v-dialog v-model="isLoading" persistent width="200">
    <v-card style="height:100px; overflow: hidden; border-radius: 24px 4px" class="d-flex align-center justify-center">
      <CubeSpin background="red" />
      <!-- <Spinner /> -->
      <p class="ma-0" style="font-size:20px;padding:15px;">
        Загрузка
      </p>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CubeSpin from "vue-loading-spinner/src/components/RotateSquare2.vue";
// import Spinner from "../ui/Spinner.vue";

import BaseModule from "@/store/base.module";

@Component({
  name: "AppProgress",
  components: { CubeSpin },
})
export default class extends Vue {
  get isLoading() {
    return BaseModule.isLoading;
  }
}
</script>

<style lang="scss">
.v-dialog {
  box-shadow: unset !important;
}

.spinner:after {
  background: $secondary !important;
}
</style>
