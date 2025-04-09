<template>
  <RouterLink :to="`/collections/${TestCaseStore.colId}`">Назад</RouterLink>
  <DescriptionTestCase/>
  <ListOfTestCaseSteps/>
</template>

<script setup lang="ts">
import {useRoute} from 'vue-router'
import {onMounted} from 'vue'
import {
  DescriptionTestCase,
  ListOfTestCaseSteps,
  useTestCaseStore} from '@/features/test-case'
const route = useRoute();
const TestCaseStore = useTestCaseStore()

onMounted(()=>{
  TestCaseStore.getTestCase(route.params.id)
})
</script>

<style scoped>

</style>
