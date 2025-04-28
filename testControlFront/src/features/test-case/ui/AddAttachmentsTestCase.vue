<template>
  <a-row>
    <a-col :span="2">
      <a-typography-title :level="5">Вложения</a-typography-title>
    </a-col>
    <a-col :span="1">
      <a-upload
        :custom-request="customRequest"
      >
        <a-button type="text" size="small">
          <a-typography-title :level="5"><PlusOutlined style="font-size: 14px" /></a-typography-title>

        </a-button>
      </a-upload>
    </a-col>
  </a-row>
</template>

<script setup lang="ts">
import {PlusOutlined} from '@ant-design/icons-vue'
import {useRoute} from 'vue-router'
const route = useRoute();

const customRequest = async ({ file, onSuccess, onError }) => {
  try {
    // Читаем файл как ArrayBuffer (бинарные данные)
    const binaryData = await readFileAsArrayBuffer(file);
    console.log('Бинарные данные файла:', binaryData);

     await uploadToServer(binaryData);

    onSuccess(); // Уведомляем AntDV об успешной загрузке
  } catch (error) {
    onError(error);
  }
};

// Функция для чтения файла как ArrayBuffer
const readFileAsArrayBuffer = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};

// Пример отправки на сервер (замените на свой API)
const uploadToServer = async (binaryData) => {
  const formData = new FormData();
  formData.append('file', new Blob([binaryData]));
  formData.append('testCaseId', route.params.id);
  formData.append('isImg', false);
  await fetch('http://localhost:3000/testcaseattachments', {
    method: 'POST',
    body: formData,
  });
};
</script>

<style scoped>

</style>
