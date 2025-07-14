<template>
  <a-tooltip>
    <template #title> пройдено {{collectionRunStore.stats.passed}} / провалено {{collectionRunStore.stats.failed}} / в процессе {{collectionRunStore.stats.inProgress}} / не делается {{collectionRunStore.stats.notDo}} </template>
    <a-progress :percent="allPercent()" :success="{ percent: successPercent() }" strokeColor="red" type="dashboard" />
  </a-tooltip>
</template>

<script setup lang="ts">
import { useCollectionRunStore } from '../model'

const collectionRunStore = useCollectionRunStore()

const allPercent = () =>{
  const total = collectionRunStore.stats.total - collectionRunStore.stats.notDo
  const sum = collectionRunStore.stats.failed + collectionRunStore.stats.passed
  //console.log(sum / collectionRunStore.stats.total * 100)
  return sum / total * 100
}

const successPercent = () =>{
  const total = collectionRunStore.stats.total - collectionRunStore.stats.notDo
  console.log(collectionRunStore.stats.passed / collectionRunStore.stats.total * 100)
  return collectionRunStore.stats.passed / total * 100
}
</script>

<style scoped>

</style>
