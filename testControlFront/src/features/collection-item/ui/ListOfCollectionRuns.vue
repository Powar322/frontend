<template>
  <a-list item-layout="horizontal" :data-source="collectionRunsStore.collectionRuns">
    <template #renderItem="{ item }">
      <a-list-item>
        <a-list-item-meta>
          <template #title>
            <a-space>
              <a :href="`/collections/${item.id}/runs`">№{{ item.id }}</a>
              <a-tag :color="pickColor(item.resultId)">{{ item.resultName }}</a-tag>
            </a-space>
          </template>
          <template #description>
            Дата запуска: {{item.dateOfRun}}
          </template>
        </a-list-item-meta>
      </a-list-item>
    </template>
  </a-list>
</template>

<script setup lang="ts">
import {useCollectionRunsStore} from '../model'

const collectionRunsStore = useCollectionRunsStore()

const pickColor = (resultId: number) =>{
  switch(resultId){
    case 1: return "green"
    case 2: return "red"
    case 3: return "cyan"
  }
}
console.log(pickColor(1))
</script>

<style scoped>

</style>
