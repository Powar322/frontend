<template>
  <a-button type="primary" @click="showModal">Создать</a-button>
  <a-modal
    v-model:open="modalIsOpen"
    title="Создание коллекций"
    okText="Сохранить"
    cancelText="Отменить"
    @ok="createAndClose"
    @cancel="resetStore"
  >
    <CreateNewCollectionForm/>
  </a-modal>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import CreateNewCollectionForm from './CreateNewCollectionForm.vue'
import {
  useCreateCollectionStore
} from '@/features/collections-menu'

const createCollectionStore = useCreateCollectionStore()
const modalIsOpen = ref<boolean>(false)

const showModal = () => {
  modalIsOpen.value = true
}

const createAndClose = () => {
  createCollectionStore.createCollection()
  modalIsOpen.value = false
}

const resetStore = () =>{
  createCollectionStore.$reset()
  modalIsOpen.value = false
}
</script>

<style scoped>

</style>
