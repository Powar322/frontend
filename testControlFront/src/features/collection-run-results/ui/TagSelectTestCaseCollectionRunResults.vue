<template>
  <a-dropdown>
    <a>
      <a-tag :color="pickColor(item.resultId)">{{ item.resultName }}</a-tag>
    </a>
    <template #overlay>
      <a-menu >
        <a-menu-item @click="handleClickResultChange(1, item.id)">
          <a><a-tag color="green">Пройдено</a-tag></a>
        </a-menu-item>
        <a-menu-item @click="handleClickResultChange(2, item.id)">
          <a><a-tag color="red">Не пройдено</a-tag></a>
        </a-menu-item>
        <a-menu-item @click="handleClickResultChange(3, item.id)">
          <a><a-tag color="cyan">В процессе</a-tag></a>
        </a-menu-item>
        <a-menu-item @click="handleClickResultChange(4, item.id)">
          <a><a-tag color="default">Не делается</a-tag></a>
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>

<script setup lang="ts">
import {updateTestCaseCollectionRunResultsForTCResult} from '../api'
import {useCollectionRunStore} from '../model'
const collectionRunStore = useCollectionRunStore()

const props = defineProps({
  item:{
    id: Number,
    resultId: Number,
    resultName: String,
    required: true
  }
})

const handleClickResultChange = (key: number, id: number) =>{
  updateTestCaseCollectionRunResultsForTCResult(id, {
    resultId: key,
  })
  collectionRunStore.getTestCaseCollectionRunId(collectionRunStore.id)
}


const pickColor = (resultId: number) =>{
  switch(resultId){
    case 1: return "green"
    case 2: return "red"
    case 3: return "cyan"
    case 4: return "default"
  }
}
</script>

<style scoped>

</style>
