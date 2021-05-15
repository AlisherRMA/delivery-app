<template>
  <div>
    <div class="my-2 ml-1">
      <v-btn color="lightBlue" class="white--text" @click="showAddDialog">Создать новую группу</v-btn>
    </div>
    <v-data-table :headers="headers" :items="groups" mobile-breakpoint="md">
      <template v-slot:[`item.name`]="{ item }">
        {{ item.name }}
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon @click="showEditDialog(item)">mdi-pencil</v-icon> <v-icon @click="showDeleteDialog(item)">mdi-delete</v-icon>
      </template>
    </v-data-table>

    <TextEditor />

    <EditGroups ref="editGroupsRef" :isNew="false" @onGroupEdited="onGroupEdited" />
    <AddGroups ref="addGroupsRef" :isNew="true" @onGroupAdded="onGroupAdded" />
    <ConfirmDialog
      ref="deleteDialogRef"
      color="error"
      text="Вы действительно хотите удалить группу? Все товары, которые относятся к данной группе будут также удалены."
    />
  </div>
</template>

<script lang="ts">
import { Category } from "@/modules/dishes/@types/product.type";
import { Component, Prop, Vue } from "vue-property-decorator";
import { DataTableHeader } from "vuetify";
import EditGroups from "./edit/EditGroups.vue";
import AddGroups from "./edit/EditGroups.vue";
import { ProductsManagementService } from "../api/products-management.service";
import ConfirmDialog from "@/components/ui/dialogs/ConfirmDialog.vue";
import TextEditor from "@/components/ui/TextEditor.vue";

@Component({ components: { EditGroups, AddGroups, ConfirmDialog, TextEditor } })
export default class GroupsManagement extends Vue {
  @Prop()
  readonly groups;

  $refs: {
    editGroupsRef: EditGroups;
    addGroupsRef: AddGroups;
    deleteDialogRef: ConfirmDialog;
  };

  get headers(): DataTableHeader[] {
    return [
      { text: "Группа", value: "name" },
      { text: "Действия", value: "actions" },
    ];
  }

  showEditDialog(item) {
    this.$refs.editGroupsRef.show(item);
  }

  showAddDialog() {
    this.$refs.addGroupsRef.show();
  }

  async showDeleteDialog(item: Category) {
    const isConfirmed = await this.$refs.deleteDialogRef.show();
    if (!isConfirmed) return;
    await ProductsManagementService.deleteGroup(item.category_id);
    this.$emit("onGroupsUpdated");
  }

  async onGroupEdited(payload: Category) {
    await ProductsManagementService.updateGroup(payload);
    this.$emit("onGroupsUpdated");
  }

  async onGroupAdded(name: string) {
    await ProductsManagementService.addGroup(name);
    this.$emit("onGroupsUpdated");
  }
}
</script>

<style lang="scss"></style>
