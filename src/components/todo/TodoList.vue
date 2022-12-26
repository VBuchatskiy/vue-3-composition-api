<script setup lang="ts">
import { ITodo } from "@/store/todo";
import { defineProps, ref } from "vue";
import { ElCard } from "element-plus";
import { BaseButton } from "@/components/base";
import { TodoDialog, TodoListItem } from "@/components/todo";

const visible = ref(false);

defineProps<{
  items: Map<string, ITodo>;
}>();

const onDialogOpen = () => {
  visible.value = !visible.value;
};
</script>

<template>
  <el-card>
    <template #header>
      <header>
        <base-button
          v-on="{
            click: onDialogOpen,
          }"
        >
          create
        </base-button>
        <todo-dialog v-model="visible"></todo-dialog>
      </header>
    </template>
    <template #default>
      <template v-for="(item, key) in items.values()" v-bind:key="key">
        <todo-list-item v-bind="{ item }"> </todo-list-item>
      </template>
    </template>
  </el-card>
</template>

<style></style>
