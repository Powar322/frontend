<template>
  <a-comment v-for="comment in testCaseComments.comments">
    <template #author>Han Solo</template>
    <template #content>
      <p>
        {{comment.text}}
      </p>
    </template>
    <template #datetime>
      <a-tooltip :title="dayjs(comment.date).format('YYYY-MM-DD HH:mm:ss')">
        <span>{{ dayjs(comment.date).fromNow() }}</span>
      </a-tooltip>
    </template>
  </a-comment>
</template>
<script lang="ts" setup>
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);
import { useTestCaseCommentsStore } from '../model'

const testCaseComments = useTestCaseCommentsStore()

console.log(dayjs())
</script>
