<template>
  <a-image-preview-group>
    <a-space>
      <a-image v-for="attachment in testCaseAttachmentStore.attachments"
        :width="200" :src="attachment.url" />
    </a-space>
  </a-image-preview-group>
</template>

<script setup lang="ts">
import {useTestCaseAttachmentStore } from '../model'
const testCaseAttachmentStore = useTestCaseAttachmentStore()

</script>

<style scoped>

</style>
