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
      <a-popconfirm title="Добавление шага" ok-text="Yes" cancel-text="No">
        <template #description>
          <a-space>
            Номер шага
            <a-input-number size="small" :min="1" :max="100000" />
            Описание шага
            <a-input size="small"/>
          </a-space>
        </template>
        <a href="#">Добавить шаг</a>
      </a-popconfirm>
    </template>
  </a-list>
</template>

<script setup lang="ts">
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
