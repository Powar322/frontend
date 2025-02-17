<template>
<div>
  <a-typography-title :style="{marginBottom: '8px', marginTop: '0px'}">Коллекции</a-typography-title>
  <div>
    <a-button type="primary" @click="visible = true">Новая Коллекция</a-button>
    <a-modal
      v-model:open="visible"
      title="Создать новую коллекцию"
      ok-text="Create"
      cancel-text="Cancel"
      @ok="onOk"
    >
      <a-form ref="formRef" :model="formState" layout="vertical" name="form_in_modal">
        <a-form-item
          name="name"
          label="Название коллекции"
          :rules="[{ required: true, message: 'Пожалуйста введите имя коллекции!' }]"
        >
          <a-input v-model:value="formState.name" />
        </a-form-item>
        <a-form-item name="description" label="Описание">
          <a-textarea v-model:value="formState.description" />
        </a-form-item>
        <a-form-item
          name="project"
          label="Проект"
          :rules="[{ required: true, message: 'Пожалуйста введите проект для коллекции!' }]"
        >
        <a-input v-model:value="formState.project" />
      </a-form-item>
      </a-form>
    </a-modal>
  </div>
  <div>
    <a-table :columns="columns" :data-source="fetched">
      <template #bodyCell="{ column, text, record }">
        <template v-if="column.dataIndex === 'name'">
          <RouterLink :to="`/collections/${record.id}`">{{ record.name }}</RouterLink>
        </template>
        <template v-if="column.dataIndex === 'delete'">
          <a-popconfirm
          v-if="fetched.length"
          title="Sure to delete?"
          @confirm="onDelete(record.id)"
        >
          <a>Delete</a>
        </a-popconfirm>
        </template>
      </template>
    </a-table>
  </div>
</div>
</template>

<script setup lang="ts">
import {ref, onMounted, reactive} from 'vue'
import type { FormInstance } from 'ant-design-vue';
const columns =[
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'project',
    dataIndex: 'project',
    key: 'project',
  },
  {
    title:'Delete',
    dataIndex:'delete',
    key:'id'
  }
]
const fetched = ref([])
function update(){
  fetch("http://localhost:3000/collections/get")
  .then(response => response.json())
  .then(data => fetched.value = data)
}
onMounted(()=>{
  update()
})

interface Values {
  name: string;
  description: string;
  project: string;
}

const formRef = ref<FormInstance>();
const visible = ref(false);
const formState = reactive<Values>({
  name: '',
  description: '',
  project: '',
});
const onDelete = (key: string) => {
  console.log(key)
  fetch(`http://localhost:3000/collections/delete?id=${key}`,{
    method: "DELETE"
  })
  update()
};
const onOk = () => {
  formRef.value
    .validateFields()
    .then(values => {
      console.log('Received values of form: ', values);
      fetch("http://localhost:3000/collections/create",{
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values)
      })
      update()
    })
    .catch(info => {
      console.log('Validate Failed:', info);
    });
};
</script>

<style scoped>

</style>
    