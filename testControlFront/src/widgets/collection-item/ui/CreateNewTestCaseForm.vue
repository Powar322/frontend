<template>
  <a-space direction="vertical">
    <a-typography-paragraph>
      Номер тест-кейса
    </a-typography-paragraph>
    <InputTestCaseNumber/>
    <a-typography-paragraph>
      Название тест-кейса
    </a-typography-paragraph>
    <InputTestCaseName/>
    <a-typography-paragraph>
      Описание тест-кейса
    </a-typography-paragraph>
    <InputTestCaseDescription/>
    <a-typography-paragraph>
      Тестовые данные
    </a-typography-paragraph>
    <InputTestCaseTestData/>
  </a-space>
</template>

<script setup lang="ts">
import {
  InputTestCaseNumber,
  InputTestCaseName,
  InputTestCaseDescription,
  InputTestCaseTestData
} from '@/features/collection-item'
</script>

<style scoped>

</style>
