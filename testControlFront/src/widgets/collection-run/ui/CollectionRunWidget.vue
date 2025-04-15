<template>
  <RouterLink :to="`/collections/${collectionRunStore.collectionId}`">Назад</RouterLink>
  <a-typography-title>Прогон: {{ collectionRunStore.id }} коллекции {{collectionRunStore.collectionId}}</a-typography-title>
</template>

<script setup lang="ts">
import {useRoute} from 'vue-router'
import {onMounted} from 'vue'
import {useCollectionRunStore} from '@/features/collection-run-results'

const collectionRunStore = useCollectionRunStore()
const route = useRoute();

onMounted(()=>{
  collectionRunStore.getTestCaseCollectionRunId(route.params.id)
})
</script>

<style scoped>

</style>
