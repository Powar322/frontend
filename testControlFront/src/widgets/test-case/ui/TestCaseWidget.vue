<template>
  <RouterLink :to="`/collections/${TestCaseStore.testCaseCollectionId}`">Назад</RouterLink>
  <DescriptionTestCase/>
  <AddAttachmentsTestCase/>
  <ListOfAttachmentsForTestCase/>
  <a-typography-title :level="5">Шаги</a-typography-title>
  <ListOfTestCaseSteps/>
  <a-typography-title :level="5">Комментарии</a-typography-title>
  <NewCommentForTestCase/>
  <CommentsForTestCase/>
</template>

<script setup lang="ts">
import {useRoute} from 'vue-router'
import {onMounted} from 'vue'
import {
  DescriptionTestCase,
  ListOfTestCaseSteps,
  AddAttachmentsTestCase,
  ListOfAttachmentsForTestCase,
  CommentsForTestCase,
  NewCommentForTestCase,
  useTestCaseStore,
  useTestCaseAttachmentStore,
  useTestCaseCommentsStore
} from '@/features/test-case'
const route = useRoute();
const TestCaseStore = useTestCaseStore()
const testCaseAttachmentStore = useTestCaseAttachmentStore()
const testCaseCommentsStore = useTestCaseCommentsStore()

onMounted(()=>{
  TestCaseStore.getTestCase(route.params.id)
  testCaseAttachmentStore.getAllAttachments(route.params.id)
  testCaseCommentsStore.getTestCaseCommentsByTestCaseId(route.params.id)
})

</script>

<style scoped>

</style>
