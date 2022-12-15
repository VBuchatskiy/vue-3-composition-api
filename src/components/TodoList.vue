<template>
  <section>
    <h4>{{ title }}</h4>
    <template v-if="collection.length">
      <ul>
        <template v-for="(todo, key) of collection" v-bind:key="key">
          <li>
            {{ todo }}
          </li>
        </template>
      </ul>
    </template>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "TodoList",

  setup() {
    const { state } = useStore();
    const title = "todo list";
    const collection = state.collection;

    return {
      title,
      collection,
    };
  },
});
</script>
