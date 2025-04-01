<template>
  <a-input
    size="large"
    placeholder="Название проекта"
    :value="createCollectionStore.name"
    @change="handleNameChange"
  />
</template>

<script setup lang="ts">
import {useCreateCollectionStore} from '../model'

const createCollectionStore = useCreateCollectionStore()

const handleNameChange = (e: InputEvent) => {
  const target = e.target as HTMLInputElement

  createCollectionStore.setName(target.value)
}
</script>

<style scoped>

</style>
