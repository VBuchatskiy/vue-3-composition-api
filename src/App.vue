<script setup lang="ts">
import { useNotificationState } from "@/store/notification";
import { ElContainer, ElMain } from "element-plus";

const $notification = useNotificationState();
</script>
<template>
  <el-container>
    {{ $notification.state.notifications }}
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>
