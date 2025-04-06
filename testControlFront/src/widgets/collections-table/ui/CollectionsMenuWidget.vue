<template>
  <a-typography-title :style="{marginBottom: '8px', marginTop: '0px'}">Коллекции</a-typography-title>
  <CreateNewCollectionModal/>
  <CollectionsTable/>
</template>

<script setup lang="ts">
import  CreateNewCollectionModal  from './CreateNewCollectionModal.vue'
import {
  CollectionsTable
}  from '@/features/collections-menu'
</script>

<style scoped>

</style>
