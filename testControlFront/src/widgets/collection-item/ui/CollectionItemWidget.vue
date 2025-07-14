<template>
  <RouterLink :to="`/`">Назад</RouterLink>
  <DescriptionTestCaseCollection/>
  <CollectionItemTabs/>
</template>

<script setup lang="ts">
import {useRoute} from 'vue-router'
const route = useRoute();
import {onMounted} from 'vue'
import CollectionItemTabs from './CollectionItemTabs.vue'
import {
  useCollectionItemStore,
  useCollectionRunsStore,
  DescriptionTestCaseCollection
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
