<template>
  <a-tabs v-model:activeKey="activeKey">
    <a-tab-pane key="1" tab="Тест-кейсы">
      <CreateNewTestCaseModal/>
      <ListOfTestCases/>
      <a-typography-link @click="showNotInCollection">
        Привязать другой тест-кейс
      </a-typography-link>
      <ListOfTestCasesNotInCollection v-if="notInCol"/>
    </a-tab-pane>
    <a-tab-pane key="2" tab="Запуски" force-render>Content of Tab Pane 2</a-tab-pane>
  </a-tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ListOfTestCases, ListOfTestCasesNotInCollection } from '@/features/collection-item'
import CreateNewTestCaseModal from './CreateNewTestCaseModal.vue'
const activeKey = ref('1');
const notInCol = ref(false)

const showNotInCollection = () =>{
  notInCol.value = !notInCol.value
}
</script>

<style scoped>

</style>
