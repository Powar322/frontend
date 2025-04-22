<template>
  <a-row>
    <a-col :span="1">
      <a-typography-paragraph>Вложения</a-typography-paragraph>
    </a-col>
    <a-col :span="1">
      <a-upload
        v-model:file-list="fileList"
        name="file"
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        :max-count="1"
        :headers="headers"
        @change="handleChange"
      >
        <a-button type="text" size="small">
          <PlusOutlined style="font-size: 14px" />
        </a-button>
      </a-upload>
    </a-col>
  </a-row>
</template>

<script setup lang="ts">
import {PlusOutlined} from '@ant-design/icons-vue'
import { ref } from 'vue';
import { message } from 'ant-design-vue';
import type { UploadChangeParam } from 'ant-design-vue';

const handleChange = (info: UploadChangeParam) => {
  if (info.file.status !== 'uploading') {
    console.log(info.file, info.fileList);
  }
  if (info.file.status === 'done') {
    message.success(`${info.file.name} file uploaded successfully`);
  } else if (info.file.status === 'error') {
    message.error(`${info.file.name} file upload failed.`);
  }
};

const fileList = ref([]);
const headers = {
  authorization: 'authorization-text',
};


</script>

<style scoped>

</style>
