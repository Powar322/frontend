<template>
  <a-row>
    <a-col :span="12">
      <a-textarea v-model:value="value" placeholder="Новый комментарий" :rows="4" />
    </a-col>
  </a-row>
  <a-button v-if="value" @click="createNewComment"> Добавить</a-button>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import { createTestCaseComment } from '../api'
import { useTestCaseStore } from '../model'
import dayjs from 'dayjs';

const testCaseStore = useTestCaseStore()

const value = ref()
const createNewComment = () => {
  createTestCaseComment({
    testCaseId: testCaseStore.id,
    text: value.value,
    date: dayjs(new Date())
  })
  value.value = ""
}
</script>

<style scoped>

</style>
