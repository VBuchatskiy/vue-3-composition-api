<script setup lang="ts">
import { useTodoStore } from "@/store/todo";
import { onMounted } from "vue";
import { TodoList } from "@/components/todo";

const store = useTodoStore();

onMounted(async () => {
  await store.getTodoCollection();
});
</script>

<template>
  <suspense>
    <template #default>
      <todo-list
        v-bind="{
          items: store.state.collection,
        }"
      ></todo-list>
    </template>
  </suspense>
</template>
