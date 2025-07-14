<template>
  <a-input
    v-model:value="createTestCaseStore.name"
    @change="handleNameChange"
  />
</template>

<script setup lang="ts">
import {useCreateTestCaseStore} from '../model'

const createTestCaseStore = useCreateTestCaseStore()

const handleNameChange = (e: InputEvent) => {
  const target = e.target as HTMLInputElement
  createTestCaseStore.setName(target.value)
}

</script>

<style scoped>

</style>
