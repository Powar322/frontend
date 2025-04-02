<template>
  <a-space direction="vertical">
    <a-typography-paragraph>
      Название коллекции
    </a-typography-paragraph>
    <InputNameCollection/>
    <a-typography-paragraph>
      Описание коллекции
    </a-typography-paragraph>
    <InputDescriptionCollection/>
    <a-typography-paragraph>
      Проект коллекции
    </a-typography-paragraph>
    <InputProjectCollection/>
  </a-space>
</template>

<script setup lang="ts">
import {
  InputDescriptionCollection,
  InputNameCollection,
  InputProjectCollection
} from '@/features/collections-menu'
</script>

<style scoped>

</style>
