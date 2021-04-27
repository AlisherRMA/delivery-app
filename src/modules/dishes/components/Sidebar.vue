<template>
  <section>
    <div v-for="(group, i) in groups" :key="i">
      <span class="pointer to-uppercase cool-link" @click="scrollTo(group)">
        {{ group.groupTitle }}
      </span>
    </div>
  </section>
</template>

<script lang="ts">
import { Component } from "vue-property-decorator";
import SidebarMixin from "../mixins/sidebar.mixin";

@Component
export default class extends SidebarMixin {}
</script>

<style lang="scss">
.cool-link {
  display: inline-block;
  color: white;
  text-decoration: none;
  font-size: 20px;
}

.cool-link::after {
  content: "";
  display: block;
  width: 0;
  height: 2px;
  background: $secondary;
  transition: width 0.3s;
}

.cool-link:hover::after {
  width: 100%;
}
</style>
