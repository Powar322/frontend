<template>
<a-layout 
:style="{height: '100vh', marginTop: 0 }">
    <a-layout-header style="background: #81e789" class="header">
      <a-typography-title :style="{marginBottom: '8px', marginTop: '8px'}">Test-Control</a-typography-title>
    </a-layout-header>
    <a-layout>
      <a-layout-sider width="160">
        <a-menu
          v-model:selectedKeys="selectedKeys2"
          v-model:openKeys="openKeys"
          mode="inline"
          :style="{ height: '100%', borderRight: 0 }"
        >
          <a-menu-item key="1">
            <pie-chart-outlined />
            <span>Коллекция</span>
          </a-menu-item>
          <a-menu-item key="2">
            <FileDoneOutlined />
            <span>Тест-кейс</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout style="padding: 24px 24px 24px">

        <a-layout-content
          :style="{ background: '#fff', padding: '24px', margin: 0}"
        >
        <RouterView>
        </RouterView>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>


</template>

<script lang="ts" setup>
import { useRoute, useRouter } from "vue-router";
import { ref } from 'vue';
import { PieChartOutlined, FileDoneOutlined } from '@ant-design/icons-vue';
const selectedKeys2 = ref<string[]>(['1']);
const openKeys = ref<string[]>(['sub1']);
const route = useRoute();
const routeNow = route.params
console.log(routeNow)
</script>
<style>
body{
  margin: 0 !important;
}


</style>