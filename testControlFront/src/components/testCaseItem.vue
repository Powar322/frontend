<template>
    <div>
        <a-flex :vertical="'vertical'">
            <RouterLink :to="`/collections/${fetched.colId}`">Назад</RouterLink>
            <a-typography-title :style="style4">{{ fetched.caseId }}: {{ fetched.testName }}</a-typography-title>
            <a-typography-title :style="style4" :level="2">Коллекция: {{ fetched.colName }}</a-typography-title>
            <a-row>
                <a-col :span="8">
                    <a-typography-title :style="style4" :level="3">Описание:</a-typography-title>
                </a-col>
                <a-col :span="8">
                    <a-typography-title :style="style4" :level="3">Тестовые данные:</a-typography-title>
                </a-col>
            </a-row>
            <a-row>
                <a-col :span="8">
                    <a-typography-paragraph :style="style4"
                        :content="fetched.description"
                    />
                </a-col>
                <a-col :span="8">
                    <a-typography-paragraph :style="style4"
                        :content="fetched.testData"
                    />
                </a-col>
            </a-row>

        </a-flex>
    </div>
    <a-divider />
    <a-list size="small" bordered :data-source="testCases">
        <template #renderItem="{ item }">
            <a-list-item>{{item.numberOfStep}} | {{ item.step }}</a-list-item>
        </template>
        <template #header>
            <div>Header</div>
        </template>
        <template #footer>
            <div>Footer</div>
        </template>
    </a-list>
  <a-timeline>
    <a-timeline-item v-for="item in testCases" :key="item.id">{{ item.step }}</a-timeline-item>
  </a-timeline>
</template>

<script setup lang="ts">
import {ref, onMounted} from "vue"
import { useRoute } from "vue-router";
const route = useRoute();
const colId = ref()
colId.value = route.params.id

interface Item {
    id: number;
    caseId: string;
    colId: number;
    colName: string;
    testName: string;
    description: string;
    testData: string;
}

const fetched = ref<Item>({
    id: 0,
    caseId: '',
    colId: 0,
    colName: '',
    testName: '',
    description: '',
    testData: '',
})

const testCases = ref()

const style4 ={
    marginBottom: '4px',
    marginTop: '4px'
}

function update(){
  fetch(`http://localhost:3000/testcases/getbyid?id=${colId.value}`)
  .then(response => response.json())
  .then(data => fetched.value = data[0])
}
function getTestSteps(){
  fetch(`http://localhost:3000/testcases/getStepsByIdtestCase?id=${colId.value}`)
  .then(response => response.json())
  .then(data => testCases.value = data)
}
onMounted(()=>{
  update()
  getTestSteps()
})
</script>
