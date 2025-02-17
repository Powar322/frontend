import { createRouter, createWebHistory } from 'vue-router'
import collectionItem from '../components/collectionItem.vue'
import collectionMain from '@/components/collectionMain.vue'
import testCaseItem from '../components/testCaseItem.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/collections',
      name: 'collections',
      component: collectionMain,
    },
    {
      path: '/collections/:id',
      name: 'collectionItem',
      component: collectionItem
    },
    {
      path: '/testcase/:id',
      name: 'testCaseItem',
      component: testCaseItem
    }
  ],
})

export default router
