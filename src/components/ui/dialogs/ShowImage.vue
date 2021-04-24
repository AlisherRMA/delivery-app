<template>
  <v-dialog v-model="isDialogVisible" max-width="1200" eager @keydown.esc="close">
    <v-card id="show-image-dialog">
      <v-toolbar color="primaryGrey" flat height="50px">
        <div style="font-size: 18px;">{{ fileName }}</div>
        <v-spacer></v-spacer>
        <v-btn icon @click="isDialogVisible = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>

      <div class="d-flex justify-center align-center">
        <v-img :src="image">
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </div>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ShowImageDialog extends Vue {
  @Prop({ required: true })
  private image: any;
  @Prop({ required: true })
  private fileName: string;

  isDialogVisible = false;

  show() {
    this.isDialogVisible = true;
  }

  close() {
    this.isDialogVisible = false;
  }
}
</script>

<style lang="scss">
#show-image-dialog {
  .v-responsive {
    max-width: 70% !important;
  }
}
</style>
