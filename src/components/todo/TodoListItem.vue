<script setup lang="ts">
import { ITodo } from "@/store/todo";
import { defineProps } from "vue";
import { ElCard } from "element-plus";
import { BaseButton } from "@/components/base";

defineProps<{
  item: ITodo;
}>();
</script>

<template>
  <el-card>
    <slot name="header">
      <header>
        <h4>{{ item.title }}</h4>
      </header>
    </slot>

    <slot name="default">
      <main>
        <p>{{ item.content }}</p>
      </main>
      <footer><base-button> update </base-button></footer>
    </slot>
  </el-card>
</template>

<style></style>
