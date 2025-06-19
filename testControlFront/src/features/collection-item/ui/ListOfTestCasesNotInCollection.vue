<template>
  <a-list item-layout="horizontal" :data-source="notInCollectionItemStore.testCases">
    <template #renderItem="{ item }">
      <a-list-item>
        <a-list-item-meta
          :description="item.description"
        >
          <template #title>
            <PopAddInCollectionTestCase :item="item" :newCollectionId="collectionItemStore.id"/>
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
import PopAddInCollectionTestCase from './PopAddInCollectionTestCase.vue'

const notInCollectionItemStore = useNotInCollectionItemStore()
const collectionItemStore = useCollectionItemStore()
onMounted( ()=>{
  notInCollectionItemStore.getNotInCollection(collectionItemStore.id)
})
</script>

<style scoped>

</style>
