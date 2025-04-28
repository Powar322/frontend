<template>
  <a-descriptions size="default" layout="vertical">
    <template #title>Прогон: {{ collectionRunStore.id }} коллекции {{collectionRunStore.collectionId}}</template>
  </a-descriptions>
</template>

<script setup lang="ts">
import { useCollectionRunStore } from '../model'

const collectionRunStore = useCollectionRunStore()

</script>

<style scoped>

</style>
