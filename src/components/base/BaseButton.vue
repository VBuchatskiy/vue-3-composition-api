<script setup lang="ts">
import { ElButton } from "element-plus";
import { defineProps } from "vue";

enum type {
  "primary",
}

const props = defineProps<{
  type?: type;
  disabled?: boolean;
}>();
</script>

<template>
  <el-button
    dark
    v-bind="{
      type: props.type || 'primary',
      disabled: props.disabled || false,
    }"
  >
    <slot name="default"></slot>
  </el-button>
</template>

<style lang="scss"></style>
