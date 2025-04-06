<template>
  <RouterLink :to="`/`">Назад</RouterLink>
  <a-typography-title>Коллекция: {{ collectionItemStore.name }}</a-typography-title>
  <a-typography-title :level="2">Проект: {{ collectionItemStore.project }}</a-typography-title>
  <a-typography-title :level="3">Описание:</a-typography-title>
  <a-typography-paragraph :content="collectionItemStore.description" />
  <CollectionItemTabs/>
</template>

<script setup lang="ts">
import {useRoute} from 'vue-router'
import {onMounted} from 'vue'
import CollectionItemTabs from './CollectionItemTabs.vue'
import {
  useCollectionItemStore
} from '@/features/collection-item'

const collectionItemStore = useCollectionItemStore()
const colId: number = useRoute().params.colId
onMounted( ()=>{
  collectionItemStore.createCollection(1)
})

</script>

<style scoped>

</style>
