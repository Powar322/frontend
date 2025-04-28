<template>
  <a-button type="primary" :disabled="isActive()" @click="handleClick">Начать прогон</a-button>
</template>

<script setup lang="ts">
import { createTestCaseCollectionRun } from '../api'
import { useCollectionRunsStore } from '../model'
import {useRoute} from 'vue-router'

const route = useRoute();
const CollectionRunsStore = useCollectionRunsStore()

const isActive = () => {
  for (const item of CollectionRunsStore.collectionRuns){
    if(item.resultId === 3){
      return true
    }
  }
}

const handleClick = () => {
  createTestCaseCollectionRun({
    collectionId: Number(route.params.id),
    dateOfRun: new Date().toISOString().split('T')[0]
  })
  CollectionRunsStore.getCollectionRuns(Number(route.params.id))
}

</script>

<style scoped>

</style>
