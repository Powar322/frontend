<template>
  <a-button @click="resetStore">Отменить</a-button>
</template>

<script setup lang="ts">
import {useCreateCollectionStore} from '../model'
const createCollectionStore = useCreateCollectionStore()

const resetStore = () => {
  createCollectionStore.$reset()
}
</script>

<style scoped>

</style>
