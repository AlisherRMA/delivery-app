import { Component, Vue, Prop } from "vue-property-decorator";
import { IDishGroup } from "../@types/dish.type";

@Component
export default class SidebarMixin extends Vue {
  @Prop()
  private groups: IDishGroup[];

  scrollTo(group: IDishGroup) {
    if (!group.id) return;
    const position = document.getElementById(group.id)?.offsetTop;
    // smooth scroll
    window.scrollTo({ top: position, behavior: "smooth" });
  }
}
