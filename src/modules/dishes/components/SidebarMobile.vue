<template>
  <section v-show="isSidebarVisible">
    <div class="scrollmenu">
      <a v-for="(group, i) in groups" :key="i" @click="scrollTo(group)" class="to-uppercase">{{ group.groupTitle }}</a>
    </div>
  </section>
</template>

<script lang="ts">
import { Component } from "vue-property-decorator";
import SidebarMixin from "../mixins/sidebar.mixin";

@Component
export default class SidebarMobile extends SidebarMixin {}
</script>

<style lang="scss">
div.scrollmenu {
  user-select: none;
  // background-color: #333;
  background-color: #e98074;
  overflow-x: auto;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  position: fixed;
  top: 45px;
  width: 100%;
  z-index: 20;
  // scroll-margin-top: 0px;
  // border-top: 4px #7e191b solid;
}

div.scrollmenu a {
  display: inline-block;
  color: white;
  text-align: center;
  padding: 14px;
  text-decoration: none;
  user-select: none;
  // border: 1px $primary solid;
  // color: $primary;
  // border-radius: 4px;
  // margin-right: 5px;
}

div.scrollmenu a:hover {
  background-color: $primary;
  user-select: none;
  // background-color: #7e191b;
}
</style>
