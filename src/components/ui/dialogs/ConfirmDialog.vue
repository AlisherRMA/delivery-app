<template>
  <div id="notification-dialog">
    <v-dialog v-model="isDialogVisible" max-width="500" hide-overlay content-class="shadow-light">
      <div id="app-notification">
        <v-card elevation="1" :class="`v-card--${color}`">
          <div class="d-flex px-3 pt-3">
            <v-icon :color="color">{{ getIcon(color) }}</v-icon>
            <div class="flex-grow-1 main-text px-4 pt-4">
              <span v-html="text" />
            </div>
          </div>
          <v-card-actions class="justify-center pb-5 pl-9 mt-4">
            <v-btn @click="onConfirm" :color="color" depressed class="mr-3 px-10">{{ positiveText }}</v-btn>
            <v-btn @click="onCancel" :color="color" outlined class="px-10">{{ negativeText }}</v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ConfirmDialog extends Vue {
  @Prop({ default: "success" })
  private color: string;
  @Prop({ required: true })
  private text: string;
  @Prop({ default: "Да" })
  private positiveText: string;
  @Prop({ default: "Нет" })
  private negativeText: string;

  isDialogVisible = false;

  resolve?: any;

  async show(): Promise<boolean> {
    this.isDialogVisible = true;
    return new Promise(res => {
      this.resolve = res;
    });
  }

  onConfirm() {
    this.resolve(true);
    this.resolve = undefined;
    this.hideDialog();
  }

  onCancel() {
    this.hideDialog();
    if (this.resolve) {
      this.resolve(false);
      this.resolve = undefined;
    }
  }
  hideDialog() {
    this.isDialogVisible = false;
  }
  getIcon(color: string) {
    switch (color) {
      case "success":
        return "mdi-information-outline";
      case "warning":
        return "mdi-alert-octagon-outline";
      case "error":
        return "mdi-alert-outline";
      default:
        return "mdi-information-outline";
    }
  }
}
</script>

<style lang="scss"></style>
