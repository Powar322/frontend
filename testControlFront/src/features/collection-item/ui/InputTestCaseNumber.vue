<template>
  <a-input v-model:value="createTestCaseStore.caseId"
  @change="handleNameChange"
  >
    <template #addonBefore>
      <a-select v-model:value="createTestCaseStore.casePrefix" @change="handlePrefixChange" style="width: 90px">
        <a-select-option value="TS">TS</a-select-option>
        <a-select-option value="TC">TC</a-select-option>
      </a-select>
    </template>
  </a-input>
</template>

<script setup lang="ts">
import { useCreateTestCaseStore } from '../model'

const createTestCaseStore = useCreateTestCaseStore()

const handleNameChange = (e: InputEvent) => {
  const target = e.target as HTMLInputElement

  createTestCaseStore.setCaseId(target.value)
}

const handlePrefixChange = (e: string) => {
  createTestCaseStore.setCasePrefix(e)
}
</script>

<style scoped>

</style>
