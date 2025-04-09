<template>
  <a-list size="small" bordered :data-source="testCaseStore.steps">
    <template #renderItem="{ item }">
      <a-list-item>{{item.numberOfStep}} | {{ item.step }}</a-list-item>
    </template>
    <template #header>
      <div>Header</div>
    </template>
    <template #footer>
      <div>Footer</div>
    </template>
  </a-list>
</template>

<script setup lang="ts">
import {useTestCaseStore} from '../model'

const testCaseStore = useTestCaseStore()

</script>

<style scoped>

</style>
