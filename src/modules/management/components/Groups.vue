<template>
  <div>
    <div class="my-2 ml-1">
      <v-btn color="lightBlue" class="white--text" @click="showAddDialog">Создать новую группу</v-btn>
      <v-btn color="lightBlue" class="white--text ml-2" @click="isEditOrderMode = true">Изменить порядок</v-btn>
    </div>

    <v-data-table
      :headers="headers"
      :items="sortedArray"
      mobile-breakpoint="md"
      :footer-props="{
        'items-per-page-options': [isEditOrderMode ? 100 : 10],
      }"
    >
      <template v-slot:[`item.name`]="{ item }">
        {{ item.name }}
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon @click="showEditDialog(item)" v-if="!isEditOrderMode">mdi-pencil</v-icon>
        <v-icon @click="showDeleteDialog(item)" v-if="!isEditOrderMode">mdi-delete</v-icon>

        <v-btn icon v-if="isEditOrderMode" @click="onOrderMovedToTheTop(item)"><v-icon>mdi-arrow-up</v-icon></v-btn>
        <v-btn icon v-if="isEditOrderMode" @click="onOrderMovedToTheBottom(item)"><v-icon>mdi-arrow-down</v-icon></v-btn>
      </template>
    </v-data-table>

    <div v-if="isEditOrderMode" class="mt-3">
      <v-btn color="primary" class="px-10" @click="onSaveGroupsOrder">Сохранить</v-btn>
      <v-btn color="primary" class="px-10 ml-3" outlined @click="isEditOrderMode = false">Отмена</v-btn>
    </div>

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

@Component({ components: { EditGroups, AddGroups, ConfirmDialog } })
export default class GroupsManagement extends Vue {
  @Prop()
  readonly groups: Category[];

  isEditOrderMode = false;

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

  get sortedArray() {
    return this.groups.sort(({ group_sort_number: a }, { group_sort_number: b }) => (a as number) - (b as number));
  }

  onOrderMovedToTheTop(group: Category) {
    if (group.group_sort_number! <= 1) return;

    const swapableGroup = this.groups.find(iterable => iterable.group_sort_number === group.group_sort_number! - 1);
    if (swapableGroup && swapableGroup.group_sort_number) swapableGroup.group_sort_number = group.group_sort_number;
    if (group.group_sort_number) group.group_sort_number--;
  }

  onOrderMovedToTheBottom(group: Category) {
    const swapableGroup = this.groups.find(iterable => iterable.group_sort_number === group.group_sort_number! + 1);
    if (swapableGroup && swapableGroup.group_sort_number) swapableGroup.group_sort_number = group.group_sort_number;
    if (group.group_sort_number) group.group_sort_number++;
  }

  async onSaveGroupsOrder() {
    await ProductsManagementService.updateGroupsOrder(this.groups);
    this.isEditOrderMode = false;
  }
}
</script>

<style lang="scss"></style>
