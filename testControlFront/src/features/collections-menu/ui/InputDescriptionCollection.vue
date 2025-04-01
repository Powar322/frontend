<template>
  <a-input
    size="large"
    placeholder="Описание проекта"
    :value="createCollectionStore.description"
    @change="handleDescriptionChange"
  />
</template>

<script setup lang="ts">
import {computed} from 'vue'
import {useCreateCollectionStore} from '../model'

const createCollectionStore = useCreateCollectionStore()

const handleDescriptionChange = (e: InputEvent) => {
  const target = e.target as HTMLInputElement

  createCollectionStore.setDescription(target.value)
}
</script>

<style scoped>

</style>
