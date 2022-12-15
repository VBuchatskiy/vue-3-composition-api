import { createStore, ActionTree, MutationTree } from "vuex";

enum RootMutationTypes {
  SetTodoCollection = "SetTodoCollection",
  SetTodo = "SetTodo",
  RemoveTodo = "RemoveTodo",
}

enum RootActionTypes {
  GetTodoCollection = "GetTodoCollection",
  GetTodo = "GetTodo",
  CreateTodo = "CreateTodo",
  UpdateTodo = "UpdateTodo",
  RemoveTodo = "RemoveTodo",
}

interface Todo {
  id: string;
  title: string;
  content: string;
}

interface RootState {
  item: Set<Todo>;
  collection: Map<string, Todo>;
}

const state: RootState = {
  item: new Set(),
  collection: new Map(),
};

const mutations: MutationTree<RootState> = {
  [RootMutationTypes.SetTodoCollection](state: RootState, todo: Todo) {
    state.collection.set(todo.id, todo);
  },

  [RootMutationTypes.SetTodo](state: RootState, todo) {
    state.item.add(todo);
  },

  [RootMutationTypes.RemoveTodo](state: RootState, id: string) {
    state.collection.delete(id);
  },
};

const actions: ActionTree<RootState, RootState> = {
  [RootActionTypes.GetTodoCollection]({ commit }) {
    try {
      const collection = new Map();

      commit(RootMutationTypes.SetTodoCollection, collection);
    } catch (error) {
      error;
    }
  },

  [RootActionTypes.GetTodo]({ commit }, id: string) {
    try {
      const todo = {};

      commit(RootMutationTypes.SetTodo, todo);
    } catch (error) {
      error;
    }
  },

  [RootActionTypes.CreateTodo]({ commit }, todo: Todo) {
    try {
      console.warn(todo);
    } catch (error) {
      error;
    }
  },

  [RootActionTypes.UpdateTodo]({ commit }, todo: Todo) {
    try {
      todo;
    } catch (error) {
      error;
    }
  },

  [RootActionTypes.RemoveTodo]({ commit }, id: string) {
    try {
      commit(RootMutationTypes.RemoveTodo, id);
    } catch (error) {
      error;
    }
  },
};

export default createStore({
  state,
  mutations,
  actions,
});
