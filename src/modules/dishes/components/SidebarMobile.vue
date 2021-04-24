<template>
  <div class="scrollmenu">
    <a v-for="(group, i) in groups" :key="i" @click="scrollTo(group)" class="to-uppercase">{{ group.groupTitle }}</a>
  </div>
</template>

<script lang="ts">
import { Component } from "vue-property-decorator";
import SidebarMixin from "../mixins/sidebar.mixin";

@Component
export default class SidebarMobile extends SidebarMixin {}
</script>

<style lang="scss">
div.scrollmenu {
  background-color: #333;
  overflow-x: auto;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  position: fixed;
  top: 45px;
  width: 100%;
  z-index: 20;
}

div.scrollmenu a {
  display: inline-block;
  color: white;
  text-align: center;
  padding: 14px;
  text-decoration: none;
}

div.scrollmenu a:hover {
  background-color: #777;
}
</style>
