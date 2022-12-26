import { defineStore } from "pinia";
import { reactive } from "vue";
import { useNotificationState } from "./notification";
import axios, { AxiosError } from "axios";

export interface ITodo {
  id: string;
  title: string;
  content: string;
  is_complete: boolean;
}

export interface IPagination {
  page: number;
  limit: number;
  total?: number;
}

export interface ITodoState {
  collection: Map<string, ITodo>;
  pagination: IPagination;
  item: Set<ITodo>;
  loading: boolean;
}

export const useTodoStore = defineStore("todo", () => {
  const notification = useNotificationState();

  const state: ITodoState = reactive({
    item: new Set(),
    collection: new Map(),
    pagination: {
      page: 1,
      total: 1,
      limit: 1,
    },
    loading: false,
  });

  const getTodoCollection = async () => {
    state.loading = !state.loading;

    try {
      const { data } = await axios.get("todos");
      const { items, ...rest } = data;

      items.forEach((item: ITodo) => {
        state.collection.set(item.id, item);
      });

      Object.assign(state.pagination, rest);
    } catch (error) {
      if (error instanceof AxiosError) {
        notification.state.notifications.set("0", error);
      }
    } finally {
      state.loading = !state.loading;
    }
  };

  const createTodo = async (todo: ITodo) => {
    state.loading = !state.loading;

    try {
      const { data } = await axios.post("todo", todo);

      state.item.add(data);
    } catch (error) {
      if (error instanceof AxiosError) {
        notification.state.notifications.set("0", error);
      }
    } finally {
      state.loading = !state.loading;
    }
  };

  return { state, getTodoCollection, createTodo };
});
