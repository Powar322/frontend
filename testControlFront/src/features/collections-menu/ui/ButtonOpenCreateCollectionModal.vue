<template>
  <a-button type="primary" @click="showModal">Создать</a-button>
</template>

<script setup lang="ts">
import {useCreateCollectionStore} from '../model'
const createCollectionStore = useCreateCollectionStore()

const showModal = () => {
  createCollectionStore.setModalIsOpen(true)
}
</script>

<style scoped>

</style>
