<template>
  <div id="app" class="pa-0">
    <v-app style="position:relative">
      <AppHeader />
      <AppProgress />
      <v-main>
        <!-- <cube-spin></cube-spin> -->
        <AppMain />
      </v-main>
      <!-- <AppFooter /> -->
    </v-app>
  </div>
</template>

<script lang="ts">
import AppHeader from "@/components/layout/AppHeader.vue";
import AppMain from "@/components/layout/AppMain.vue";
import AppFooter from "@/components/layout/AppFooter.vue";
import AppProgress from "@/components/layout/AppProgress.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    AppHeader,
    AppMain,
    AppFooter,
    AppProgress,
  },
})
export default class App extends Vue {}
</script>
