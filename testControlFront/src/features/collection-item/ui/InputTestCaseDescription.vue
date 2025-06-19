<template>
  <a-textarea
    v-model:value="createTestCaseStore.description"
    @change="handleNameChange"
  />
</template>

<script setup lang="ts">
import {useCreateTestCaseStore} from '../model'

const createTestCaseStore = useCreateTestCaseStore()

const handleNameChange = (e: InputEvent) => {
  const target = e.target as HTMLInputElement
  createTestCaseStore.setDescription(target.value)
}

</script>

<style scoped>

</style>
