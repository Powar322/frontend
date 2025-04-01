<template>
  <a-input
    size="large"
    placeholder="Проект"
    :value="createCollectionStore.project"
    @change="handleProjectChange"
  />
</template>

<script setup lang="ts">
import {useCreateCollectionStore} from '../model'

const createCollectionStore = useCreateCollectionStore()

const handleProjectChange = (e: InputEvent) => {
  const target = e.target as HTMLInputElement

  createCollectionStore.setProject(target.value)
}
</script>

<style scoped>

</style>
