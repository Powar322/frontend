<template>
  <a-list item-layout="horizontal" :data-source="notInCollectionItemStore.testCases">
    <template #renderItem="{ item }">
      <a-list-item>
        <a-list-item-meta
          :description="item.description"
        >
          <template #title>
            <a :href="`/testcase/${item.id}`">{{ item.caseId }}</a>
            <a-flex :vertical="'vertical'">
              <div>Коллекция: {{ item.colName }}</div>
            </a-flex>
          </template>
        </a-list-item-meta>
      </a-list-item>
    </template>
  </a-list>
</template>

<script setup lang="ts">
import {onMounted} from 'vue'
import {useNotInCollectionItemStore} from '../model'

const notInCollectionItemStore = useNotInCollectionItemStore()

onMounted( ()=>{
  notInCollectionItemStore.getNotInCollection(1)
})
</script>

<style scoped>

</style>
