<template>
  <section id="app-header-main" v-if="isHeaderVisible">
    <v-app-bar :color="isDesktopSidebarVisible ? 'primary' : 'transparent'" style="z-index: 16" fixed dense flat>
      <v-spacer></v-spacer>

      <span style="position:relative;">
        <v-btn icon @click="onOpenBasketClicked">
          <v-icon color="white">mdi-cart-outline</v-icon>
        </v-btn>
        <v-avatar style="position: absolute" v-show="selectedItemsCount" class="items-count" color="#4b878bff" size="18">
          {{ selectedItemsCount }}
        </v-avatar>
      </span>

      <v-btn icon>
        <v-icon color="white" @click="openManagementPage">mdi-account</v-icon>
      </v-btn>
    </v-app-bar>
    <v-img id="header-img" src="@/assets/images/navbar_image.jpg" height="20vh"> </v-img>
    <div id="contacts">
      <div class="text-center my-4">
        <h1 @click="$router.push('/')">Ёж Принёс</h1>
        <p>Мед, Малина, Варенье, Витамины, Орехи в меду, подарки</p>
      </div>
      <div class="my-4 d-flex justify-center">
        <div v-for="(link, i) in links" :key="i" class="d-flex flex-column align-center" :class="link.appendClass || ''">
          <v-btn icon @click="onOpenLink(link.href)">
            <v-icon x-large color="primary">{{ link.icon }}</v-icon>
          </v-btn>
        </div>
      </div>
    </div>
    <Basket ref="basketRef" />
  </section>
</template>

<script lang="ts">
import LanguageChanger from "@/components/ui/LanguageChanger.vue";
import { Component, Vue } from "vue-property-decorator";

import { BasketModule } from "@/modules/dishes/store/basket.module";
import { ScrollModule } from "@/modules/base/store/scroll.module";

import Basket from "@/modules/dishes/components/Basket.vue";

@Component({
  name: "AppHeader",
  components: { LanguageChanger, Basket },
})
export default class AppNavbar extends Vue {
  get isHeaderVisible() {
    return this.$route.name !== "Signin";
  }
  get selectedItemsCount() {
    return BasketModule.dishesCount;
  }
  get isDesktopSidebarVisible() {
    return ScrollModule.isDesktopSidebarVisible;
  }
  get links() {
    return [
      { icon: "mdi-map-marker-radius", href: "https://go.2gis.com/idpt1o", text: "Алматы, Шевченко 121" },
      { icon: "mdi-whatsapp", href: "https://api.whatsapp.com/send?phone=77027877920", text: "Whatsapp", appendClass: "mx-4" },
      { icon: "mdi-instagram", href: "https://www.instagram.com/ezh.prines", text: "ezh.prines" },
    ];
  }

  imageContainer: any = null;

  $refs: {
    basketRef: Basket;
  };

  onOpenLink(href: string) {
    window.open(href, "blank");
  }
  onOpenBasketClicked() {
    this.$refs.basketRef.show();
  }
  openManagementPage() {
    this.$router.push({ name: "Management" });
  }

  // LIFECYCLE HOOKS
  mounted() {
    this.imageContainer = document.getElementById("header-img");
  }
  created() {
    window.addEventListener("scroll", this.handleScroll);
  }
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  // SCROLL HANDLERS
  handleScroll() {
    const isMainHeaderImageVisible = this.checkVisible(this.imageContainer);
    if (isMainHeaderImageVisible) {
      if (!ScrollModule.isDesktopSidebarVisible) return;
      ScrollModule.setDesktopSidebarVisible(false);
    } else {
      if (ScrollModule.isDesktopSidebarVisible) return;
      ScrollModule.setDesktopSidebarVisible(true);
    }
  }
  checkVisible(elm) {
    const rect = elm.getBoundingClientRect();
    const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
  }
}
</script>

<style lang="scss">
#app-header {
  position: sticky;
  height: 60px;
  background: $primary;
}

.items-count {
  position: absolute;
  top: 25px;
  left: 25px;
}

#header-img {
  filter: opacity(60%) contrast(150%);
}
</style>
