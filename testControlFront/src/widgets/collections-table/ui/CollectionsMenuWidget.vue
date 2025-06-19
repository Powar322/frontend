<template>
  <a-typography-title :style="{marginBottom: '8px', marginTop: '0px'}">Коллекции</a-typography-title>
  <CreateNewCollectionModal/>
  <CollectionsTable/>
</template>

<script setup lang="ts">
import {onMounted} from 'vue'
import  CreateNewCollectionModal  from './CreateNewCollectionModal.vue'
import {
  useTestCaseCollectionsStore,
  CollectionsTable
}  from '@/features/collections-menu'

const testCaseCollectionsStore = useTestCaseCollectionsStore()

onMounted(()=>{
  testCaseCollectionsStore.getAllTestCaseCollection()
})
</script>

<style scoped>

</style>
