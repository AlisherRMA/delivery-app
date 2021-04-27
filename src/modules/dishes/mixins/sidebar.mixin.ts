import { Component, Vue, Prop } from "vue-property-decorator";
import { IDishGroup } from "../@types/dish.type";

@Component
export default class SidebarMixin extends Vue {
  @Prop()
  private groups: IDishGroup[];

  get isMobile() {
    return this.$vuetify.breakpoint.xs;
  }

  scrollTo(group: IDishGroup) {
    if (!group.id) return;
    let position = document.getElementById(group.id)?.offsetTop;
    if (this.isMobile && position) position -= 60;

    // smooth scroll
    window.scrollTo({ top: position, behavior: "smooth" });
  }
}
