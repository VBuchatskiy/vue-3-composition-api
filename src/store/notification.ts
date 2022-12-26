import { defineStore } from "pinia";
import { AxiosError } from "axios";
import { reactive } from "vue";

interface INotificationState {
  notifications: Map<string, AxiosError>;
}

export const useNotificationState = defineStore("notification", () => {
  const state: INotificationState = reactive({
    notifications: new Map(),
  });

  return { state };
});
