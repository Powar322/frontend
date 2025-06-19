<template>
    <div>
        <a-modal
        v-model:open="visible"
        title="Создать новый тест-кейс"
        ok-text="Создать"
        cancel-text="Отмена"
        @ok="onOk"
        >
            <a-form ref="formRef" :model="formState" layout="vertical" name="form_in_modal">
                <a-input-group compact>
                <a-form-item
                name="testCasesIdName"
                label="ID тест-кейса"
                >
                    <a-select v-model:value="testCasesIdName">
                        <a-select-option value="TC">TC</a-select-option>
                        <a-select-option value="TS">TS</a-select-option>
                    </a-select>
                </a-form-item>
                <a-form-item
                name="testCasesId"
                label=" "
                >
                    <a-input v-model:value="testCasesId" style="width: 50%" />
                </a-form-item>
                </a-input-group>
                <a-form-item
                name="name"
                label="Название тест-кейса"
                :rules="[{ required: true, message: 'Пожалуйста введите имя коллекции!' }]"
                >
                    <a-input v-model:value="formState.name" />
                </a-form-item>
                <a-form-item
                name="collection"
                label="Коллекция"
                >
                    {{ fetched.name }}
                </a-form-item>
                <a-form-item
                name="description"
                label="Описание">
                    <a-textarea v-model:value="formState.description" />
                </a-form-item>
                <a-form-item
                name="project"
                label="Тестовые данные"
                >
                    <a-textarea v-model:value="formState.test_data" />
                </a-form-item>
            </a-form>
        </a-modal>
        <a-flex :vertical="'vertical'">
            <RouterLink :to="`/`">Назад</RouterLink>
            <a-typography-title :style="style4">Коллекция: {{ fetched.name }}</a-typography-title>
            <a-typography-title :style="style4" :level="2">Проект: {{ fetched.project }}</a-typography-title>
            <a-typography-title :style="style4" :level="3">Описание:</a-typography-title>
            <a-typography-paragraph :style="style4"
                :content="fetched.description"
            />
        </a-flex>
        <a-tabs v-model:activeKey="activeKey">
            <a-tab-pane key="1" tab="Тест-кейсы">
                <a-button type="primary" @click="visible = true"> Создать новый тест-кейс</a-button>
                <a-list item-layout="horizontal" :data-source="testCases">
                    <template #renderItem="{ item }">
                    <a-list-item>
                        <a-list-item-meta
                        :description="item.description"
                        >
                        <template #title>
                            <a :href="`/testcase/${item.id}`">{{ item.caseId }}</a>
                        </template>
                        </a-list-item-meta>
                        </a-list-item>
                    </template>
                    <template #footer>
                        <a-typography-link @click="notInCollection()">
                            Привязать другой тест-кейс
                        </a-typography-link>
                        <div v-if="addOther">
                            <a-list item-layout="horizontal" :data-source="notInCol">
                                <template #renderItem="{ item }">
                                <a-list-item>
                                    <a-list-item-meta
                                    :description="item.description"
                                    >
                                    <template #title>
                                        <a :href="`/testcase/${item.id}`">{{ item.caseId }}</a>
                                        <a-flex :vertical="'vertical'">
                                            <div>Коллекция: {{ item.colName }}</div>
                                        </a-flex>
                                    </template>
                                    </a-list-item-meta>
                                    </a-list-item>
                                </template>
                            </a-list>
                        </div>
                    </template>
                </a-list>
            </a-tab-pane>
            <a-tab-pane key="2" tab="Запуски" force-render>Content of Tab Pane 2</a-tab-pane>
        </a-tabs>
    </div>
</template>

<script setup lang="ts">
import {ref, onMounted, reactive} from "vue"
import { useRoute } from "vue-router";
import type { FormInstance } from 'ant-design-vue';
const activeKey = ref('1');
const colId = ref()
const route = useRoute();
colId.value = route.params.id
const addOther = ref(false)
const notInCol = ref()
const style4 ={
    marginBottom: '4px',
    marginTop: '4px'
}
interface Item {
    id: number
    name: string;
    description: string;
    project: string;
}

const fetched = ref<Item>({
    id: 0,
    name: '',
    description: '',
    project: '',
})
const testCases = ref()

interface Values {
  case_id: string;
  FK_collection_id: number;
  name: string;
  description: string;
  test_data: string;
}
const testCasesIdName = ref<string>('TC')
const testCasesId = ref<string>('')
const formRef = ref<FormInstance>();
const visible = ref(false);

const formState = reactive<Values>({
  case_id: '',
  FK_collection_id: 0,
  name: '',
  description: '',
  test_data: '',
});

function notInCollection(){
    addOther.value = !addOther.value
    if (addOther.value === true){
        fetch(`http://localhost:3000/collections/getnotincollection?id=${colId.value}`)
            .then(response => response.json())
            .then(data => notInCol.value = data)
    }
}


const onOk = () => {
    formState.FK_collection_id = colId.value
    formState.case_id = `${testCasesIdName.value}${testCasesId.value}`
    fetch("http://localhost:3000/testcases/create",{
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState)
      })
};
function update(){
  fetch(`http://localhost:3000/collections/getbyid?id=${colId.value}`)
  .then(response => response.json())
  .then(data => fetched.value = data[0])
}
function getTestCases(){
  fetch(`http://localhost:3000/testcases/getbyidcol?colId=${colId.value}`)
  .then(response => response.json())
  .then(data => testCases.value = data)
}
onMounted(()=>{
  update()
  getTestCases()
})

</script>
