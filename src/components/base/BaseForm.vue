<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

defineEmits<{
  (event: "submit"): void;
}>();

defineProps<{
  valid: boolean;
}>();
</script>

<template>
  <form>
    <header>
      <slot name="header"></slot>
    </header>
    <fieldset>
      <slot name="default"></slot>
    </fieldset>
    <footer>
      <slot name="actions"></slot>
    </footer>
  </form>
</template>

<style lang="scss"></style>
