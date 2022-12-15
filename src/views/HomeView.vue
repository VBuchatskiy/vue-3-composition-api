<template>
  <suspense>
    <section class="home">
      <todo-list> </todo-list>
    </section>
  </suspense>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TodoList from "@/components/TodoList.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    TodoList,
  },
});
</script>
