<template>
  <a-modal
    v-model:open="createCollectionStore.modalIsOpen"
    title="Создание коллекций"
  >
    <template #footer>
      <ButtonCancelCreateNewCollection/>
      <ButtonConfirmCreateNewCollection/>
    </template>
    <CreateNewCollectionForm/>
  </a-modal>
</template>

<script setup lang="ts">
import CreateNewCollectionForm from './CreateNewCollectionForm.vue'
import {
  ButtonCancelCreateNewCollection,
  ButtonConfirmCreateNewCollection,
  useCreateCollectionStore,
} from '@/features/collections-menu'

const createCollectionStore = useCreateCollectionStore()
</script>

<style scoped>

</style>
