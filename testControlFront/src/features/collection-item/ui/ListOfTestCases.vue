<template>
  <a-list item-layout="horizontal" :data-source="collectionItemStore.testCases">
    <template #renderItem="{ item }">
      <a-list-item>
        <a-list-item-meta
          :description="item.description"
        >
          <template #title>
            <a :href="`/testcase/${item.id}`">{{ item.caseId }}</a>
          </template>
        </a-list-item-meta>
      </a-list-item>
    </template>
  </a-list>
</template>

<script setup lang="ts">
import {useCollectionItemStore} from '../model'

const collectionItemStore = useCollectionItemStore()

</script>

<style scoped>

</style>
