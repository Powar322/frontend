<template>
  <RouterLink :to="`/collections/${TestCaseStore.testCaseCollectionId}`">Назад</RouterLink>
  <DescriptionTestCase/>
  <AddAttachmentsTestCase/>
  <ListOfTestCaseSteps/>
</template>

<script setup lang="ts">
import {useRoute} from 'vue-router'
import {onMounted} from 'vue'
import {
  DescriptionTestCase,
  ListOfTestCaseSteps,
  AddAttachmentsTestCase,
  useTestCaseStore} from '@/features/test-case'
const route = useRoute();
const TestCaseStore = useTestCaseStore()

onMounted(()=>{
  TestCaseStore.getTestCase(route.params.id)
})

</script>

<style scoped>

</style>
