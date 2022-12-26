<script setup lang="ts">
import { defineProps, defineEmits, ref, reactive, computed } from "vue";
import {
  ElDialog,
  ElForm,
  ElFormItem,
  ElInput,
  FormInstance,
} from "element-plus";
import { BaseButton } from "@/components/base";
import { useTodoStore, ITodo } from "@/store/todo";

const disabled = ref<boolean>(true);

const props = defineProps<{
  modelValue: boolean;
}>();

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});

const emit = defineEmits<{
  (event: "update:modelValue", visible: boolean): void;
}>();

const onClose = (form: FormInstance | undefined): void => {
  form?.resetFields();
  emit("update:modelValue", false);
};

const todoStore = useTodoStore();
const form = ref<FormInstance>();
const item = reactive<ITodo>({
  id: "",
  title: "",
  content: "",
  is_complete: false,
});

const onInput = (form: FormInstance | undefined) => {
  form?.validate((valid: boolean): void => {
    valid ? (disabled.value = !valid) : (disabled.value = valid);
  });
};

const onSubmit = async () => {
  await todoStore.createTodo(item);
};
</script>

<template>
  <el-dialog
    v-model="value"
    v-bind="{
      title: 'create todo',
    }"
  >
    <el-form
      dark
      v-bind="{ ref: 'form', model: item }"
      v-on="{
        submit: () => onSubmit(),
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
              trigger: 'blur',
            },
          ],
        }"
      >
        <el-input
          v-model="item.title"
          v-bind="{ placeholder: 'enter the subject' }"
          v-on="{
            input: () => onInput(form),
          }"
        />
      </el-form-item>
      <el-form-item
        v-bind="{
          label: 'content',
          prop: 'content',
          rules: [
            {
              required: true,
              message: 'please input email address',
              trigger: 'blur',
            },
          ],
        }"
        v-on="{
          input: () => onInput(form),
        }"
      >
        <el-input
          v-model="item.content"
          v-bind="{
            placeholder: 'enter the description',
            type: 'textarea',
          }"
        />
      </el-form-item>
      <el-form-item>
        <base-button
          v-bind="{
            disabled,
          }"
          v-on="{
            click: () => onSubmit(),
          }"
        >
          create
        </base-button>
        <base-button
          v-on="{
            click: () => onClose(form),
          }"
        >
          cancel
        </base-button>
      </el-form-item>
    </el-form>
    <template #footer> </template>
  </el-dialog>
</template>
