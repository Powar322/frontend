import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './app'
import Antd from 'ant-design-vue';
import App from './App.vue'
const app = createApp(App)

app.use(router).use(createPinia()).use(Antd)

app.mount('#app')
