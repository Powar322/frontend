<template>
  <a-popconfirm
    title="Вы уверены что хотите привязать тест-кейс?"
    ok-text="Да"
    cancel-text="Нет"
    @confirm="handleAccept(item.id, newCollectionId)"
  >
    <a href="#">{{item.testCaseId}}</a>
  </a-popconfirm>
</template>

<script setup lang="ts">
import { updateTestCaseLinkCollection } from '../api'
import {useCollectionItemStore, useNotInCollectionItemStore} from '../model'
const collectionItemStore = useCollectionItemStore()
const notInCollectionItemStore = useNotInCollectionItemStore()

const props = defineProps({
  item:{
    id: Number,
    testCaseId: Number,
    required: true
  },
  newCollectionId: Number
})

function handleAccept(testCaseId: number, newCollectionId: number){
  console.log(testCaseId, newCollectionId)
  updateTestCaseLinkCollection((testCaseId), {
    collectionId: newCollectionId
  })
  collectionItemStore.getCollections(collectionItemStore.id)
  notInCollectionItemStore.getNotInCollection(collectionItemStore.id)
}

</script>

<style scoped>

</style>
