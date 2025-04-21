<template>
  <a-popconfirm
    title="Вы уверены что хотите привязать тест-кейс?"
    ok-text="Да"
    cancel-text="Нет"
    @confirm="confirm"
    @cancel="cancel"
  >
    <a href="#">{{item.testCaseId}}</a>
  </a-popconfirm>
</template>

<script setup lang="ts">
const props = defineProps({
  item:{
    id: Number,
    testCaseId: Number,
    required: true
  },
  newCollection:{
    id: Number
  }
})
</script>

<style scoped>

</style>
