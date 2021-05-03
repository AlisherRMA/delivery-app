import { Component, Vue, Prop } from "vue-property-decorator";
import { IDishGroup } from "../@types/dish.type";
import { ScrollModule } from "../../base/store/scroll.module";
import { ProductGroups } from "../@types/product.type";

@Component
export default class SidebarMixin extends Vue {
  @Prop()
  private groups: IDishGroup[];

  get isMobile() {
    return this.$vuetify.breakpoint.xs;
  }

  get isSidebarVisible() {
    return ScrollModule.isDesktopSidebarVisible;
  }

  scrollTo(group: ProductGroups) {
    if (!group.identificator) return;
    let position = document.getElementById(group.identificator)?.offsetTop;
    if (this.isMobile && position) position -= 60;

    // smooth scroll
    window.scrollTo({ top: position, behavior: "smooth" });
  }
}
