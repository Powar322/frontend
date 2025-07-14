<template>
  <a-descriptions size="small" layout="vertical">
    <template #title>Коллекция: {{CollectionItemStore.name}}</template>
    <a-descriptions-item label="Проект">{{CollectionItemStore.project}}</a-descriptions-item>
    <a-descriptions-item label="Описание">{{CollectionItemStore.description}}</a-descriptions-item>
  </a-descriptions>
</template>

<script setup lang="ts">
import {useCollectionItemStore} from '../model'
const CollectionItemStore  = useCollectionItemStore()

</script>

<style scoped>

</style>
