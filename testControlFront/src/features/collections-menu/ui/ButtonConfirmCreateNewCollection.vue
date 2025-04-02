<template>
  <a-button type="primary" @click="createAndClose">Сохранить</a-button>
</template>

<script setup lang="ts">
import {useCreateCollectionStore} from '../model'
const createCollectionStore = useCreateCollectionStore()

const createAndClose = () => {
  createCollectionStore.createCollection()
  createCollectionStore.setModalIsOpen(false)
}

</script>

<style scoped>

</style>
