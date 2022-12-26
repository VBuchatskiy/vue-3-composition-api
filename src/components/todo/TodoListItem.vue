<script setup lang="ts">
import { useTodoStore, ITodo } from "@/store/todo";
import { defineProps, ref, reactive } from "vue";
import { ElForm, ElFormItem, ElInput, FormInstance } from "element-plus";
import { BaseButton } from "@/components/base";
import { isEqual } from "lodash";

const todoStore = useTodoStore();
const disabled = ref<boolean>(true);
const form = ref<FormInstance>();

const props = defineProps<{
  item: ITodo;
}>();

const model = reactive<ITodo>({
  ...props.item,
});

const validate = (form: FormInstance | undefined): void => {
  form?.validate((valid) =>
    valid && !isEqual(props.item, model)
      ? (disabled.value = false)
      : (disabled.value = true)
  );
};

const onSubmit = async () => {
  await todoStore.updateTodo(model);
};
</script>

<template>
  <el-form
    v-bind="{
      ref: 'form',
      model,
    }"
  >
    <el-form-item
      v-bind="{
        label: 'title',
        prop: 'title',
        rules: [
          {
            required: true,
            message: 'please provide subject',
          },
        ],
      }"
    >
      <el-input
        v-model="model.title"
        v-on="{
          input: () => validate(form),
        }"
      >
      </el-input>
    </el-form-item>
    <el-form-item
      v-bind="{
        label: 'content',
        prop: 'content',

        rules: [
          {
            required: true,
            message: 'please provide content',
          },
        ],
      }"
    >
      <el-input
        v-model="model.content"
        v-bind="{
          type: 'textarea',
        }"
        v-on="{
          input: () => validate(form),
        }"
      ></el-input>
    </el-form-item>
    <el-form-item>
      <base-button
        v-bind="{ disabled }"
        v-on="{
          click: onSubmit,
        }"
      >
        update
      </base-button>
    </el-form-item>
  </el-form>
</template>
