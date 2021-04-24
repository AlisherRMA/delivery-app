<template>
  <div id="app" class="pa-0">
    <v-app style="position:relative">
      <AppHeader />

      <v-main class="mt-12">
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
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },
})
export default class App extends Vue {}
</script>
