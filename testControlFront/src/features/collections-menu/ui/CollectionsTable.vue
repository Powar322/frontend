<template>
  <a-table
    :columns="columns"
    :data-source="testCaseCollectionsStore.testCaseCollections"
    >
    <template #bodyCell="{ column,  record }">
      <template v-if="column.dataIndex === 'name'">
        <RouterLink :to="`/collections/${record.id}`">{{ record.name }}</RouterLink>
      </template>
      <template v-if="column.dataIndex === 'delete'">
        <a-popconfirm
          v-if="record"
          title="Sure to delete?"
          @confirm="onDelete(record.id)"
        >
          <a>Delete</a>
        </a-popconfirm>
      </template>
    </template>
  </a-table>
</template>


<script setup lang="ts">
import { collectionsTableColumns, useTestCaseCollectionsStore, type CollectionsColumns } from '../model'
import { deleteTestCaseCollection} from '../api'

const testCaseCollectionsStore = useTestCaseCollectionsStore()
const columns: Array<CollectionsColumns> = collectionsTableColumns

const onDelete = async (key: number) => {
  await deleteTestCaseCollection( key )
  await testCaseCollectionsStore.getAllTestCaseCollection()
};
</script>
<style scoped>

</style>
