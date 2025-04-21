<template>
  <a-list size="small" bordered :data-source="testCaseStore.steps">
    <template #renderItem="{ item }">
      <a-list-item>
        <a-space align="center">
        {{item.numberOfStep}} |
        <a-typography-paragraph
          class="margin-bottom"
          v-model:content="item.step"
          :editable="{ triggerType: 'text', onEnd: ()=>(handleEdit(item.id, item.step)) }"
        />
        </a-space>
      </a-list-item>
    </template>
    <template #header>
      <div>Header</div>
    </template>
    <template #footer>
      <PopCreateTestCaseStep/>
    </template>
  </a-list>
</template>

<script setup lang="ts">
import PopCreateTestCaseStep from './PopCreateTestCaseStep.vue'
import {useTestCaseStore} from '../model'
import {updateTestCaseStepById} from '../api'

const testCaseStore = useTestCaseStore()

function handleEdit(id: number, step: string) {
  updateTestCaseStepById(id, {step: step})
}



</script>

<style scoped>
.margin-bottom{
  margin-bottom: 0;
}
</style>
