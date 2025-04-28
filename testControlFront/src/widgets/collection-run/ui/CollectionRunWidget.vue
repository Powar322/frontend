<template>
  <RouterLink :to="`/collections/${collectionRunStore.collectionId}`">Назад</RouterLink>
  <DescriptionTestCaseCollectionRunResult/>
  <ProgressTestCaseCollectionRunResult/>
  <ButtonEndRunTestCaseCollection/>
  <a-divider />
  <ListOfTestCasesResults/>
</template>

<script setup lang="ts">
import {useRoute} from 'vue-router'
import {onMounted} from 'vue'
import {
  DescriptionTestCaseCollectionRunResult,
  ProgressTestCaseCollectionRunResult,
  ListOfTestCasesResults,
  ButtonEndRunTestCaseCollection,
  useCollectionRunStore} from '@/features/collection-run-results'

const collectionRunStore = useCollectionRunStore()
const route = useRoute();

onMounted(()=>{
  collectionRunStore.getTestCaseCollectionRunId(route.params.id)
})
</script>

<style scoped>

</style>
