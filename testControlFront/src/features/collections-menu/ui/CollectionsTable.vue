<template>
  <a-table
    :columns="columns"
    :data-source="data"
    >
    <template #bodyCell="{ column,  record }">
      <template v-if="column.dataIndex === 'name'">
        <RouterLink :to="`/collections/${record.id}`">{{ record.name }}</RouterLink>
      </template>
      <template v-if="column.dataIndex === 'delete'">
        <a-popconfirm
          v-if="data.length"
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
import {onMounted, ref} from 'vue'
import { collectionsTableColumns, type CollectionsColumns } from '../model'
import {getAllCollections, deleteCollection} from '../api'

const columns: Array<CollectionsColumns> = collectionsTableColumns
const data = ref()

const onDelete = async (key: number) => {
  await deleteCollection({ id: key })
  data.value = await getAllCollections()
};

onMounted(async ()=>{
  data.value = await getAllCollections()
})

</script>
<style scoped>

</style>
