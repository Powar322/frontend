<template>
  <a-list item-layout="horizontal" :data-source="notInCollectionItemStore.testCases">
    <template #renderItem="{ item }">
      <a-list-item>
        <a-list-item-meta
          :description="item.description"
        >
          <template #title>
            <a :href="`/testcase/${item.id}`">{{ item.testCaseId }}</a>
            <a-flex :vertical="'vertical'">
              <div>Коллекция: {{ item.testCaseCollectionName }}</div>
            </a-flex>
          </template>
        </a-list-item-meta>
      </a-list-item>
    </template>
  </a-list>
</template>

<script setup lang="ts">
import {onMounted} from 'vue'
import {useNotInCollectionItemStore, useCollectionItemStore} from '../model'

const notInCollectionItemStore = useNotInCollectionItemStore()
const collectionItemStore = useCollectionItemStore()
onMounted( ()=>{
  notInCollectionItemStore.getNotInCollection(collectionItemStore.id)
})
</script>

<style scoped>

</style>
