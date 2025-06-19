<template>
  <a-list item-layout="horizontal" :data-source="collectionRunStore.testCasesResults">
    <template #renderItem="{ item }">
      <a-list-item>
        <a-list-item-meta>
          <template #title>
            <a-space>
              <a :href="`/testcase/${item.resTestCaseId}`">{{item.testCaseId}}</a>
              <TagSelectTestCaseCollectionRunResults :item="item"/>
            </a-space>
          </template>
          <template #description>
            Описание: {{item.testCaseDescription}}
          </template>
        </a-list-item-meta>
      </a-list-item>
    </template>
  </a-list>
</template>

<script setup lang="ts">
import {useCollectionRunStore} from '../model'
import TagSelectTestCaseCollectionRunResults from './TagSelectTestCaseCollectionRunResults.vue'

const collectionRunStore = useCollectionRunStore()

</script>

<style scoped>

</style>
