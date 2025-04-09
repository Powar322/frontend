<template>
  <a-descriptions size="default" layout="vertical">
    <template #title> {{testCaseStore.caseId}} | {{testCaseStore.testName}} </template>
    <a-descriptions-item label="Коллекция">{{testCaseStore.colName}}</a-descriptions-item>
    <a-descriptions-item label="Описание">{{testCaseStore.description}}</a-descriptions-item>
    <a-descriptions-item label="Тестовые данные">{{testCaseStore.testData}}</a-descriptions-item>
  </a-descriptions>
</template>

<script setup lang="ts">
import { useTestCaseStore } from '../model'

const testCaseStore = useTestCaseStore()

</script>

<style scoped>

</style>
