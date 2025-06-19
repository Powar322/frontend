<template>
  <a-popconfirm title="Добавление шага" ok-text="Yes" cancel-text="No">
    <template #description>
      <a-space>
        Номер шага
        <a-input-number
          size="small" :min="1" :max="100000"
          v-model:value="createTestCase.numberOfStep"
          @change="handleNumberOfStepChange"
        />
        Описание шага
        <a-input
          size="small"
          v-model:value="createTestCase.step"
          @change="handleStepChange"
        />
      </a-space>
    </template>
    <template #okButton>
      <a-button type="primary" @click="createStep"> Создать </a-button>
    </template>
    <a href="#">Добавить шаг</a>
  </a-popconfirm>
</template>

<script setup lang="ts">
import {useCreateTestCaseStepStore, useTestCaseStore} from '../model'

const testCaseStore = useTestCaseStore()
const createTestCase = useCreateTestCaseStepStore()

const createStep = () => {
  createTestCase.setTestCaseId(testCaseStore.id)
  createTestCase.sendRequest()
  createTestCase.$reset()
  testCaseStore.getTestCase(testCaseStore.id)
}


const handleNumberOfStepChange = (e: InputEvent) => {
  const target = e.target as HTMLInputElement
  createTestCase.setNumberOfStep(Number(target.value))
}

const handleStepChange = (e: InputEvent) => {
  const target = e.target as HTMLInputElement
  createTestCase.setStep(target.value)
}


</script>

<style scoped>

</style>
