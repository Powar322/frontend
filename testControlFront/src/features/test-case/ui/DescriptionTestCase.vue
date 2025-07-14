<template>
  <a-descriptions size="default" layout="vertical">
    <template #title> {{testCaseStore.testCaseId}} | {{testCaseStore.testCaseName}} </template>
    <a-descriptions-item label="Коллекция">{{testCaseStore.testCaseCollectionName}}</a-descriptions-item>
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
