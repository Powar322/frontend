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
    <CreateNewTestCaseForm/>
  </a-modal>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import {useCreateTestCaseStore, useCollectionItemStore} from '@/features/collection-item'
import CreateNewTestCaseForm from './CreateNewTestCaseForm.vue'

const CreateTestCaseStore = useCreateTestCaseStore()
const collectionItemStore = useCollectionItemStore()
const modalIsOpen = ref<boolean>(false)

const showModal = () => {
  modalIsOpen.value = true
  CreateTestCaseStore.setFkCollectionId(collectionItemStore.id)
}

const createAndClose = () => {
  modalIsOpen.value = false
  CreateTestCaseStore.createTestCase()
  CreateTestCaseStore.$reset()
  collectionItemStore.getCollections(collectionItemStore.id)
}

const resetStore = () => {
  CreateTestCaseStore.$reset()
  modalIsOpen.value = false
}

</script>

<style scoped>

</style>
