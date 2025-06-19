<template>
<a-button type="primary" @click="handleClick" :disabled="isActive()">Завершить прогон</a-button>
</template>

<script setup lang="ts">
import {useCollectionRunStore} from '../model'
import { updateTestCaseCollectionRunResultsResult } from '@/features/collection-run-results'
const collectionRunStore = useCollectionRunStore()

const handleClick = () => {
  const total = collectionRunStore.stats.total - collectionRunStore.stats.notDo
  if( total - (collectionRunStore.stats.passed + collectionRunStore.stats.failed) == 0 ){
    if(collectionRunStore.stats.failed > collectionRunStore.stats.passed){
      updateTestCaseCollectionRunResultsResult(collectionRunStore.id, {
        collectionId: collectionRunStore.collectionId,
        resultId: 2,
        dateOfRun: collectionRunStore.dateOfRun,
      })
    }
    else {
      updateTestCaseCollectionRunResultsResult(collectionRunStore.id, {
        collectionId: collectionRunStore.collectionId,
        resultId: 1,
        dateOfRun: collectionRunStore.dateOfRun,
      })
    }
  }
}

const isActive = () => {
  const isComplete = (collectionRunStore.stats.total - collectionRunStore.stats.failed - collectionRunStore.stats.passed - collectionRunStore.stats.notDo) == 0
  console.log(isComplete)
  return isComplete && collectionRunStore.resultId != 3
}
</script>

<style scoped>

</style>
