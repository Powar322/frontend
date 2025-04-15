<template>
  <RouterLink :to="`/`">Назад</RouterLink>
  <a-typography-title :style="style4">Коллекция: {{ collectionItemStore.name }}</a-typography-title>
  <a-typography-title :level="2" :style="style4">Проект: {{ collectionItemStore.project }}</a-typography-title>
  <a-typography-title :level="3" :style="style4">Описание:</a-typography-title>
  <a-typography-paragraph :content="collectionItemStore.description" :style="style4" />
  <CollectionItemTabs/>
</template>

<script setup lang="ts">
import {useRoute} from 'vue-router'
const route = useRoute();
import {onMounted} from 'vue'
import CollectionItemTabs from './CollectionItemTabs.vue'
import {
  useCollectionItemStore,
  useCollectionRunsStore
} from '@/features/collection-item'

const collectionItemStore = useCollectionItemStore()
const collectionRunsStore = useCollectionRunsStore()
const colId = route.params.id
onMounted( ()=>{
  collectionItemStore.getCollections(colId)
  collectionRunsStore.getCollectionRuns(colId)
})

const style4 ={
  marginBottom: '4px',
  marginTop: '4px'
}

</script>

<style scoped>

</style>
